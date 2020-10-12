/*
{
    "path": "Path parameter",
    "httpMethod": "Incoming request's method name"
    "headers": {Incoming request headers}
    "queryStringParameters": {query string parameters }
    "body": "A JSON string of the request payload."
    "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encode"
}
*/

const { Octokit } = require('@octokit/rest')

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
})

const keyTopic = 'hacktoberfest'
const keyPrLabel = 'hacktoberfest-accepted'
const validUrlPrefix = 'https://github.com/'
const moderationAccount = 'hacktoberfest-team'

const getRepo = async (owner, repo) => {
  return await octokit.repos.get({
    owner,
    repo,
  })
}

const getTopics = async (repo) => {
  const {
    data: { names: topics },
  } = await octokit.repos.getAllTopics({
    owner: repo.owner.login,
    repo: repo.name,
  })

  return topics
}

const getPulls = async (repo) => {
  const { data: pulls } = await octokit.pulls.list({
    owner: repo.owner.login,
    repo: repo.name,
    state: 'all',
  })

  return pulls
}

const getOpenHelpWantedIssues = async (repo) => {
  const { data: issues } = await octokit.issues.listForRepo({
    owner: repo.owner.login,
    repo: repo.name,
    state: 'open',
    labels: 'help wanted',
  })

  return issues
}

const banned = async (repo) => {
  const { data: issues } = await octokit.issues.listForRepo({
    owner: repo.owner.login,
    repo: repo.name,
    creator: moderationAccount,
  })

  return (
    issues.filter(
      (i) => i.title === 'Pull requests here won’t count toward Hacktoberfest.'
    ).length > 0
  )
}

const hasTopic = (topics) => {
  return topics.includes(keyTopic)
}

const hasTaggedPrs = (pulls) => {
  return (
    pulls.filter((p) => {
      return p.labels.filter((l) => l.name === keyPrLabel).length > 0
    }).length > 0
  )
}

const getValidUrl = (url) => {
  if (!url.startsWith(validUrlPrefix)) {
    throw new Error("It's not a GitHub repository URL!")
  }

  url = new URL(url)
  const [, repoOwner, repoName] = url.pathname.split('/')

  return {
    repoOwner,
    repoName,
  }
}

exports.handler = async (event, context, callback) => {
  try {
    const { repoOwner, repoName } = getValidUrl(event.queryStringParameters.url)
    const { data: repo } = await getRepo(repoOwner, repoName)
    const topics = await getTopics(repo)
    const pulls = await getPulls(repo)
    const openHelpWantedIssues = await getOpenHelpWantedIssues(repo)

    const body = {
      name: repo.name,
      long_name: `${repoOwner}/${repoName}`,
      description: repo.description,
      url: repo.html_url,
      requested_at: new Date(),
      topics,
      topic: hasTopic(topics),
      tag_prs: hasTaggedPrs(pulls),
      recent_prs: false, // todo: return true if it has any PRs approved/merged in the last X days - probably won't do this
      open_help_wanted_issue_count: openHelpWantedIssues.length,
      repo_updated_at: repo.updated_at,
      language: repo.language,
      license: repo.license,
      forks: repo.forks,
      stargazers_count: repo.stargazers_count,
      banned: await banned(repo),
    }

    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body),
    })
  } catch (error) {
    callback(null, {
      statusCode: 500,
      body: JSON.stringify({ ...error, message: error.errorMessage }),
    })
  }
}

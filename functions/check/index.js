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

const getRepo = async () => {
  return await octokit.repos.get({
    owner: 'lukeocodes',
    repo: 'hacktoberfest-checker',
  })
}

const getTopics = async () => {
  const {
    data: { names: topics },
  } = await octokit.repos.getAllTopics({
    owner: 'lukeocodes',
    repo: 'hacktoberfest-checker',
  })

  return topics
}

const hasTopic = (topics) => {
  return topics.includes(keyTopic)
}

exports.handler = async (event, context, callback) => {
  const repo = await getRepo()
  const topics = await getTopics()

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      requested_at: new Date(),
      topic: hasTopic(topics),
      tag_prs: true, // todo: return true if it has any (THIS YEAR) `hacktoberfest` tagged PRs
      recent_prs: true, // todo: return true if it has any PRs approved/merged in the last X days
      repo_updated_at: repo.updated_at,
      language: repo.language,
      license: repo.license,
      forks: repo.forks,
      stargazers_count: repo.stargazers_count,
    }),
  })
}

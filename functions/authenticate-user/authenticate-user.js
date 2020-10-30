const axios = require('axios')
exports.handler = async (event, context, callback) => {
  try {
    const authCode = event.queryStringParameters.code
    const clientId = process.env.CLIENT_ID
    const clientSecret = process.env.CLIENT_SECRET
    const tokenUrl = process.env.GITHUB_TOKEN_URL
    const body = {
      client_id: clientId,
      client_secret: clientSecret,
      code: authCode,
    }
    const opts = { headers: { accept: 'application/json' } }
    const { access_token } = (await axios.post(tokenUrl, body, opts)).data
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ authToken: access_token }),
    })
  } catch (error) {
    callback(null, {
      statusCode: 500,
      body: JSON.stringify({ ...error, message: error.errorMessage }),
    })
  }
}

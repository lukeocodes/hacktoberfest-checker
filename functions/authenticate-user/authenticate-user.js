const axios = require('axios')
let token = null

exports.handler = async (event, context, callback) => {
  try {
    const authCode = event.queryStringParameters.code
    const clientId = '1234'
    const clientSecret = 'clientSecret'
    const body = {
      client_id: clientId,
      client_secret: clientSecret,
      code: authCode,
    }
    const opts = { headers: { accept: 'application/json' } }
    const authToken = await axios.post(
      `https://github.com/login/oauth/access_token`,
      body,
      opts
    )
    // .then(res => res.data['access_token'])
    // .then(_token => {
    //   console.log('My token:', token);
    //   token = _token;
    //   res.json({ ok: 1 });
    // })

    // callback(null, {
    //   statusCode: 200,
    //   body: JSON.stringify(body),
    // })
  } catch (error) {
    callback(null, {
      statusCode: 500,
      body: JSON.stringify({ ...error, message: error.errorMessage }),
    })
  }
}

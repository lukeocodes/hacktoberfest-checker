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

exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      url: 'https://github.com/lukeocodes/guys-bot',
      date: new Date(),
      topic: true,
      tag_prs: true,
      recent_prs: true,
    }),
  })
}

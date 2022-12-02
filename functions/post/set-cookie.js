'use strict';

module.exports.handler = async (event) => {
  if ('OPTIONS' === event.requestContext.http.method) {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGINS,
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Credentials": true,        
      }
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGINS,
      "Access-Control-Allow-Credentials": true,
      "Set-Cookie": "Authorization=123abc; SameSite=None; Secure"
    },
    body: JSON.stringify(
      {
        message: 'Success response from POST request'
      }
    )
  };
};

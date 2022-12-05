'use strict';

module.exports.handler = async (event) => {
  if ('OPTIONS' === event.requestContext.http.method) {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGINS,
        "Access-Control-Allow-Credentials": true, 
        "Access-Control-Allow-Methods": "PUT"       
      }
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGINS,
      "Access-Control-Allow-Credentials": true,
      "Set-Cookie": "AuthorizationPreflightedRequest=123abc; SameSite=None; Secure"
    },
    body: JSON.stringify(
      {
        message: 'Success response from PUT request'
      }
    )
  };
};

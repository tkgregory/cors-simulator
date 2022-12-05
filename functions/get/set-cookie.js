'use strict';

module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGINS,
      "Access-Control-Allow-Credentials": true,
      "Set-Cookie": "AuthorizationSimpleRequest=123abc; SameSite=None; Secure"
    },
    body: JSON.stringify(
      {
        message: 'Success response from POST request'
      }
    )
  };
};

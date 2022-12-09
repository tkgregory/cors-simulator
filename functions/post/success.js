'use strict';

module.exports.handler = async (event) => {
  if ('OPTIONS' === event.requestContext.http.method) {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN,
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN,
    },
    body: JSON.stringify(
      {
        message: 'Success response from POST request'
      }
    )
  };
};

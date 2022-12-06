'use strict';

module.exports.handler = async (event) => {
  const allowedOrigins = "*";

  if ('OPTIONS' === event.requestContext.http.method) {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigins,
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": allowedOrigins,
    },
    body: JSON.stringify(
      {
        message: 'Success response from POST request'
      }
    )
  };
};

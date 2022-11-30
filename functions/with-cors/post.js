'use strict';

module.exports.handler = async (event) => {
  const allowedOrigins = "*";
  const allowedHeaders = "*";


  if ('OPTIONS' === event.requestContext.http.method) {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigins,
        "Access-Control-Allow-Headers": allowedHeaders,
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

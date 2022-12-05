'use strict';

module.exports.handler = async (event) => {
  const allowedOrigins = "*";

  if ('OPTIONS' === event.requestContext.http.method) {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigins,
        "Access-Control-Allow-Methods": "PUT"
      }
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": allowedOrigins,
      "Access-Control-Expose-Headers": "Best-Header-Ever",
      "Best-Header-Ever": "If you're reading this, it worked!"
    },
    body: JSON.stringify(
      {
        message: 'Success response from PUT request'
      }
    )
  };
};

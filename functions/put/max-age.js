'use strict';

module.exports.handler = async (event) => {
  if ('OPTIONS' === event.requestContext.http.method) {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN,
        "Access-Control-Allow-Methods": "PUT",
        "Access-Control-Max-Age": "60"
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
        message: 'Success response from PUT request'
      }
    )
  };
};

'use strict';

module.exports.handler = async (event) => {
  const headerName = "cool-stuff";

  if ('OPTIONS' === event.requestContext.http.method) {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN,
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": headerName
      }
    };
  }

  const headerValue = event.headers["cool-stuff"];

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN,
    },
    body: JSON.stringify(
      {
        message: 'Success response from GET request. Thanks for "' + headerName + ": " + headerValue + '"'
      }
    )
  };
};

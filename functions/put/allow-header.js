'use strict';

module.exports.handler = async (event) => {
  const headerName = "cool-stuff";
  const allowedOrigins = "*";

  if ('OPTIONS' === event.requestContext.http.method) {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigins,
        "Access-Control-Allow-Methods": "PUT",
        "Access-Control-Allow-Headers": headerName
      }
    };
  }

  const headerValue = event.headers["cool-stuff"];

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": allowedOrigins,
    },
    body: JSON.stringify(
      {
        message: 'Success response from PUT request. Thanks for "' + headerName + ": " + headerValue + '"'
      }
    )
  };
};

'use strict';

module.exports.handler = async (event) => {
  if ('OPTIONS' === event.requestContext.http.method) {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN,
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Methods": "PUT"
      }
    };
  }

  const isAuthorized = event.cookies.includes("AuthorizationPreflightedRequest=123abc");

  return {
    statusCode: isAuthorized ? 200 : 401,
    headers: {
      "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN,
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(
      {
        message: isAuthorized ? "You are authorized!" : "You are unauthorized. Go away!",
      }
    )
  };
};

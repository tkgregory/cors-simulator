'use strict';

module.exports.handler = async (event) => {
  const isAuthorized = event.cookies.includes("AuthorizationSimpleRequest=123abc");

  return {
    statusCode: isAuthorized ? 200 : 401,
    headers: {
      "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGINS,
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(
      {
        message: isAuthorized ? "You are authorized!" : "You are unauthorized. Go away!",
      }
    )
  };
};

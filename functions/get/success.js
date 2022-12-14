'use strict';

module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Success response from GET request'
      }
    ),
    headers: {
      "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN,
    }
  };
};

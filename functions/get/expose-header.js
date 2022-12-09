'use strict';

module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN,
      "Access-Control-Expose-Headers": "Best-Header-Ever",
      "Best-Header-Ever": "If you're reading this, it worked!"
    },
    body: JSON.stringify(
      {
        message: 'Success response from GET request'
      }
    )
  };
};

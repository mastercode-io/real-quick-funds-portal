const { createRequestHandler } = require("@remix-run/netlify");

/**
 * A function that defines the Netlify request handler.
 * @type {import('@remix-run/netlify').RequestHandler}
 */
exports.handler = createRequestHandler({
  // When running in development, we'll use the build from the dev server.
  // Otherwise, use the build that was generated in the build step.
  build: process.env.NODE_ENV === "development" 
    ? require("@remix-run/dev/server-build") 
    : require("../../build"),
  mode: process.env.NODE_ENV,
});

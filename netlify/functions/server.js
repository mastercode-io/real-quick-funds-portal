// This is the standard Netlify function for Remix v1.19.3
const { createRequestHandler } = require("@remix-run/netlify");

// Import the server build from the build directory
const build = require("../../build");

/**
 * A function that defines the Netlify request handler.
 * @type {import('@remix-run/netlify').RequestHandler}
 */
exports.handler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});

// This is the standard Netlify function for Remix v1.19.3
const { createRequestHandler } = require("@remix-run/netlify");

// For local development, use the server-build from dev
// For production, use the build directory
const build = process.env.NODE_ENV === "development"
  ? require("@remix-run/dev/server-build")
  : require("./build");

/**
 * A function that defines the Netlify request handler.
 * @type {import('@remix-run/netlify').RequestHandler}
 */
exports.handler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});

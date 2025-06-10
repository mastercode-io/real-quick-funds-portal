const { createRequestHandler } = require("@remix-run/netlify");

/**
 * A function that defines the Netlify request handler.
 * @type {import('@remix-run/netlify').RequestHandler}
 */
exports.handler = createRequestHandler({
  // This is the standard path for the build output with Remix on Netlify
  build: require('@remix-run/dev/server-build'),
  mode: process.env.NODE_ENV,
});

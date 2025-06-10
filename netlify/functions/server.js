// This is the standard Netlify function for Remix v1.19.3
const { createRequestHandler } = require("@remix-run/netlify");

// In production on Netlify, this will be replaced during deployment
// We don't reference the build directly to avoid issues during build time
const build = undefined;

/**
 * A function that defines the Netlify request handler.
 * @type {import('@remix-run/netlify').RequestHandler}
 */
exports.handler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});

// This is the standard Netlify function for Remix v1.19.3
const { createRequestHandler } = require("@remix-run/netlify");

// Only use the dev server build in development
// In production, this will be replaced during the build process
const build = process.env.NODE_ENV === "development"
  ? require("@remix-run/dev/server-build")
  : undefined; // Don't try to require the build in production

exports.handler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});

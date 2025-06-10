/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  tailwind: true,
  postcss: true,
  serverBuildTarget: "netlify",
  server: "./server.js",
  serverModuleFormat: "cjs",
  publicPath: "/build/",
  assetsBuildDirectory: "public/build",
  serverBuildPath: "netlify/functions/server.js",
  future: {
    v2_meta: true,
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true
  }
};
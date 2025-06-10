/** @type {require('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  tailwind: true,
  postcss: true,
  serverBuildTarget: "netlify",
  publicPath: "/build/",
  assetsBuildDirectory: "public/build",
  future: {
    v2_meta: true,
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true
  }
};
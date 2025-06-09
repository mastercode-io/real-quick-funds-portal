/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  tailwind: true,
  postcss: true,
  serverBuildTarget: "netlify",
  publicPath: "/build/",
  assetsBuildDirectory: "public/build",
};
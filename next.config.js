const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
  pageExtensions: ["js", "mdx"],
  reactStrictMode: true,
  unstable_runtimeJS: false,
  target: "serverless",
});

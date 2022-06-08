const bundleAnalyzer = require("@next/bundle-analyzer");

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  async rewrites() {
    return [
      {
        source: "/graphql",
        destination: process.env.API_URL,
      },
    ];
  },
});

const bundleAnalyzer = require("@next/bundle-analyzer");
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");

const withVanillaExtract = createVanillaExtractPlugin();

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withVanillaExtract(
  withBundleAnalyzer({
    ignoreDuringBuilds: true,
    async rewrites() {
      return [
        {
          source: "/graphql",
          destination: process.env.API_URL,
        },
      ];
    },
  })
);

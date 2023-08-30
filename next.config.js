/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "x-frame-options",
            value: "DENY",
          },

          // x-content-type-options

          {
            key: "x-content-type-options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "x-frame-options",
            value: "DENY",
          },
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

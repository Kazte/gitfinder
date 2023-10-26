/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'avatars.githubusercontent.com'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/:username/repos',
        destination: '/:username/repos/1',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;

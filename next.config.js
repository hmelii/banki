/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    })

    return config
  },
  basePath: '/banki',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/companies',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig

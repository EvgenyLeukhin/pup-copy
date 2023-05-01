/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  sassOptions: {
    prependData: '@import "styles/custom/vars.scss";',
  },
}

module.exports = nextConfig

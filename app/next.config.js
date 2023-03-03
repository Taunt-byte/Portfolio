/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
images:{
  domains:["avatars.githubusercontent.com","github.com","media.licdn.com"]
}
}

module.exports = nextConfig

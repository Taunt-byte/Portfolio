/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
images:{
  domains:["avatars.githubusercontent.com","github.com","media.licdn.com","media.discordapp.net","miro.medium.com"]
}
}

module.exports = nextConfig

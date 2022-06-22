/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_CLIENT_ID: "265168769673-fc8nb005i6br75eap5fg3edihc9utc8n.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    NEXT_PUBLIC_API_URL: "http://localhost:3000/"
  }
}

module.exports = nextConfig

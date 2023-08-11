/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    APP_NAME: 'ECOMMERCE',
    API_DEVELOPMENT: process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:3001',
    PRODUCTION: false,
  },

  // api image url
  images: {
    domains: [
      process.env.API_DOMAIN, 
      'source.unsplash.com', 
      'images.unsplash.com',
      'loremflickr.com',
      'klbtheme.com',
      'freepngimg.com',
      'avatars.githubusercontent.com',
      
    ],
  }
}

module.exports = nextConfig

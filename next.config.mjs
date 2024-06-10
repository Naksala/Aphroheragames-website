/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
// next.config.js
const dotenv = require('dotenv');

dotenv.config();

  // next.config.js
module.exports = {
    output: 'export',  
    basePath: '/Aphroheragames-website',
    assetPrefix: '/Aphroheragames-website/',
  };

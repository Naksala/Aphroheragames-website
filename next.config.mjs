/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
// next.config.js
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
    RECEIVING_EMAIL: process.env.RECEIVING_EMAIL,
  },
  trailingSlash: true,
  images: {
    loader: 'akamai',
    path: '',
  },
};

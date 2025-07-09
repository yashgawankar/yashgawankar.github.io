// next.config.js
const isProd = process.env.NODE_ENV === 'production';

const repo = 'yashgawankar.github.io'; // Your GitHub repo name

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables `next export`
  basePath: isProd ? `/${repo}` : '',
  images: {
    unoptimized: true, // needed for static export
  },
};

module.exports = nextConfig;

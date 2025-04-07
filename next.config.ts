// next.config.ts
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '',
  assetPrefix: './', // 🔥 KEY for GitHub Pages to load CSS/JS from correct relative paths
}

export default nextConfig

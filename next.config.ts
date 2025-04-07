// next.config.ts
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/yashgawankar.github.io', // ✅ this line is crucial!
  assetPrefix: '/yashgawankar.github.io/', // ✅ needed for Tailwind + fonts + images
}

export default nextConfig

// next.config.ts
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '', // no subfolder!
  assetPrefix: '/', // ✅ must start with a slash for next/font to work
}

export default nextConfig

import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Export as static files for GitHub Pages
  images: {
    unoptimized: true, // Disable Next.js image optimization (GitHub Pages doesn't support it)
  },
  basePath: "/yashgawankar.github.io", // Set your repo name as basePath
  assetPrefix: "", // Ensure assets load correctly
};

export default nextConfig;

import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Export as static files for GitHub Pages
  images: {
    unoptimized: true, // Disable Next.js image optimization (GitHub Pages doesn't support it)
  },
  basePath: "/yashgawankar.github.io", // Set your repo name as the base path
  assetPrefix: "/yashgawankar.github.io/", // Ensure correct asset paths
};

export default nextConfig;

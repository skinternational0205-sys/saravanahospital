import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Unsplash placeholders are used for the gallery and page hero backgrounds.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
    ],
  },
};

export default nextConfig;

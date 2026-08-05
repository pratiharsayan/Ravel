import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/about-us/", destination: "/about", permanent: true },
      { source: "/blog", destination: "/blogs", permanent: true },
      { source: "/blog/", destination: "/blogs", permanent: true },
    ];
  },
};

export default nextConfig;

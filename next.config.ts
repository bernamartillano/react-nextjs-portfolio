import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: ['localhost:3333'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.fcrk2-4.fna.fbcdn.net",
      },
    ],
  },
};

export default nextConfig;

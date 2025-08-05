import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
          protocol: 'https',
          hostname:  "images.weserv.nl",
          pathname: '/**',
      },
      {
        protocol: 'http',
        hostname:  "103.204.81.220",
        pathname: '/**',
    },
    ]
    // domains: [
    //   "res.cloudinary.com"
    // ],
    // remotePatterns: [
    //   {
    //       protocol: 'https',
    //       hostname: 'storage-api.dev-polygontech.xyz',
    //       port: '',
    //       pathname: '/**',
    //   },
    // ]
  },
};

export default nextConfig;

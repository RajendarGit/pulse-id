/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ctlstg-cdn.pulseid.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
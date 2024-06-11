/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true, // remove it
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co", // remove it
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
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

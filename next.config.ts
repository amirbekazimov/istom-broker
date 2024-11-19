import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "213.139.211.234",
                port: "9095", // specify the port
                pathname: "/media/**", // Allow all images under `/media/`
            },
        ],
    },
    /* other config options here */
};

export default nextConfig;

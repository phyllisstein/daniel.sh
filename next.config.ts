import type { NextConfig } from "next";


const nextConfig: NextConfig = {
    allowedDevOrigins: ["*.here"],
    compiler: {
        styledComponents: {
            displayName: true,
            fileName: true,
            minify: false,
            ssr: true,
        },
    },
    serverRuntimeConfig: {
        host: "0.0.0.0",
        port: process.env.NEXT_PORT || 3000,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    webpack(config, { dev, isServer, webpack }) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
};

export default nextConfig;

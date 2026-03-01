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
    turbopack: {
        rules: {
            "*.svg": {
                as: "*.js",
                loaders: ["@svgr/webpack"],
            },
        },
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    webpack(config, { dev, isServer, webpack }) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        if (isServer) {
            config.module.rules.push({
                test: /@spectrum/,
                use: [
                    "sass-loader",
                ],
            });
        }

        return config;
    },
};

export default nextConfig;

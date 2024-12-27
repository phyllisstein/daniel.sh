/**
 * @type {import('next').NextConfig}
 */
export default {
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
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    webpack(config) {
        config.module.rules.push({
            issuer: /\.(js|ts)x?$/,
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
};

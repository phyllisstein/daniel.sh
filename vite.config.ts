import { defineConfig } from "vite";
import vinext from "vinext";
import optimizeLocales from "@react-aria/optimize-locales-plugin";
import svgr from "vite-plugin-svgr";
import { kvDataAdapter } from "@vinext/cloudflare/cache/kv-data-adapter";
import { imagesOptimizer } from "@vinext/cloudflare/images/images-optimizer";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
    envDir: import.meta.dirname,
    resolve: {
        tsconfigPaths: true,
    },
    server: {
        allowedHosts: true,
        host: "0.0.0.0",
        port: 3030,
        strictPort: true,
    },
    plugins: [
        vinext({
            cache: { data: kvDataAdapter() },
            images: { optimizer: imagesOptimizer() },
        }),
        {
            ...optimizeLocales.vite({
                locales: ["en-US"],
            }),
            enforce: "pre",
        },
        svgr(),

        cloudflare({
            viteEnvironment: {
                name: "rsc",
                childEnvironments: ["ssr"],
            },
        }),
    ],
    ssr: {
        noExternal: [/^@react-spectrum\//],
    },
    optimizeDeps: {
        exclude: ["@react-spectrum/s2/style"],
    },
    oxc: {
        plugins: {
            styledComponents: {
                transpileTemplateLiterals: false,
                minify: false,
            },
        },
    },
});

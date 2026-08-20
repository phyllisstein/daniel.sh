import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vinext from "vinext";
import optimizeLocales from "@react-aria/optimize-locales-plugin";
import svgr from "vite-plugin-svgr";

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
        vinext(),
        {
            ...optimizeLocales.vite({
                locales: ["en-US"],
            }),
            enforce: "pre",
        },
        svgr(),
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

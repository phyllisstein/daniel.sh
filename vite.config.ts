import viteReact from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import vinext from "vinext";
import optimizeLocales from "@react-aria/optimize-locales-plugin";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [
        vinext(),
        svgr(),
    ],
    server: {
        allowedHosts: true,
    },
});

/// <reference types="vite/client" />

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
        viteReact(),
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
    build: {
        target: ["es2022"],
        // Lightning CSS produces a much smaller CSS bundle than the default minifier.
        cssMinify: "lightningcss",
        rollupOptions: {
            output: {
                // Bundle all S2 and style-macro generated CSS into a single bundle instead of code splitting.
                // Because atomic CSS has so much overlap between components, loading all CSS up front results in
                // smaller bundles instead of producing duplication between pages.
                manualChunks(id) {
                    if (/macro-(.*)\.css$/.test(id) || /@react-spectrum\/s2\/.*\.css$/.test(id)) {
                        return "s2-styles";
                    }
                },
            },
        },
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

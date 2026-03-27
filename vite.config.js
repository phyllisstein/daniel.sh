import { defineConfig } from "vite";
import vinext from "vinext";
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

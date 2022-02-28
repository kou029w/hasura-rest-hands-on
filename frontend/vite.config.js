import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  ...(process.env.CODESANDBOX_SSE === "true" && {
    server: {
      hmr: {
        port: 443,
      },
    },
  }),
});

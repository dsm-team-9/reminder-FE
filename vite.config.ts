import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/museums": {
        target: "http://172.20.10.6:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/museums/, "/museums"),
      },
    },
  },
});

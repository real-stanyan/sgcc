import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      // 把所有 /api 开头的请求，转发到 3000
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        // 去掉 /api 前缀
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});

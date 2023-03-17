import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // proxy: {
    //   "/api": {
    //     development api : target: "http://127.0.0.1:5000",
    //     target: "https://lakbay-test-server.up.railway.app",
    //     changeOrigin: true,
    //     secure: false,
    //   },
    // },
    port: 3000,
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});

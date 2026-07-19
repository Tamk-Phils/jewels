import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("node_modules/react/") || id.includes("node_modules/react-dom/")) {
            return "vendor-react";
          }
          if (id.includes("@tanstack/react-router") || id.includes("@tanstack/react-start")) {
            return "vendor-router";
          }
          if (id.includes("@tanstack/react-query")) {
            return "vendor-query";
          }
          if (id.includes("@supabase/")) {
            return "vendor-supabase";
          }
          if (id.includes("@radix-ui/")) {
            return "vendor-radix";
          }
          if (id.includes("lucide-react") || id.includes("sonner") || id.includes("embla-carousel")) {
            return "vendor-ui";
          }
          if (id.includes("react-hook-form") || id.includes("@hookform/") || id.includes("node_modules/zod/")) {
            return "vendor-forms";
          }
        },
      },
    },
  },
});


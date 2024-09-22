import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    target: "esnext", // ou spécifie des navigateurs supportant top-level await
  },
  build: {
    outDir: "build", // Spécifie le répertoire de sortie
  },
});

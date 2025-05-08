import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// import { componentTagger } from "lovable-tagger"; ❌ Disable for now

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false, // Optional: hides HMR overlay
    },
    // Optional: fallback for direct routes
    fs: {
      strict: false,
    },
  },
  plugins: [
    react(),
    // mode === 'development' && componentTagger(), // ❌ Temporarily disabled
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

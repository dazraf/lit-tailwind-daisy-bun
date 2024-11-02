import { defineConfig } from "vite";
import compression from "vite-plugin-compression";
import { robots } from "vite-plugin-robots";
import Sitemap from "vite-plugin-sitemap";

export default defineConfig({
  build: {
    target: "esnext",
  },
  plugins: [
    compression({
      // Optional configuration options
      verbose: true, // Enable verbose logging
      filter: /\.js$|\.css$/, // Compress only JavaScript and CSS files
      disable: false, // Disable compression for specific files or directories
      threshold: 1024, // Compress files larger than this size (in bytes)
      algorithm: "gzip", // Choose the compression algorithm (gzip or brotli)
      ext: ".gz", // Output file extension for compressed files
      compressionOptions: {
        // Optional compression options for gzip or brotli
      },
    }),

    Sitemap(),
  ],
  optimizeDeps: {
    esbuildOptions: {
      target: "esnext",
      supported: {
        "top-level-await": true,
      },
    },
  },
});

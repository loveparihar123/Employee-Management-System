import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // Ye line jodein

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Ye line jodein
  ],
});

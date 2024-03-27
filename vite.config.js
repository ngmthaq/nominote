import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import { pwaPlugin } from "./sw.config";

const reactPlugin = react();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactPlugin, pwaPlugin],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});

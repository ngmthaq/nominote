import { VitePWA } from "vite-plugin-pwa";

export const pwaPlugin = VitePWA({
  registerType: "autoUpdate",
  injectRegister: "script",
  strategies: "generateSW",
  workbox: {
    cleanupOutdatedCaches: true,
    clientsClaim: true,
    skipWaiting: true,
    globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg,ttf}"],
    runtimeCaching: [],
  },
  devOptions: {
    enabled: false,
  },
  includeAssets: ["favicon.ico", "icon-192x192.png"],
  manifestFilename: "manifest.json",
  manifest: {
    theme_color: "#000000",
    background_color: "#000000",
    display: "standalone",
    scope: "/",
    start_url: "/",
    name: "Nominote DevTools",
    short_name: "Nominote",
    description: "All-in-one developers tools in one place",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-256x256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
});

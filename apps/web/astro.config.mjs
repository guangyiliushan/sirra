// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"

import starlight from "@astrojs/starlight"

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    starlight({
      title: {
        en: "Sirra",
        ja: "シッラ",
        "zh-CN": "Sirra",
      },
      defaultLocale: "zh-CN",
      locales: {
        "zh-CN": {
          label: "简体中文",
          lang: "zh-CN",
        },
        en: {
          label: "English",
          lang: "en",
        },
        ja: {
          label: "日本語",
          lang: "ja",
        },
      },
    }),
  ],
})
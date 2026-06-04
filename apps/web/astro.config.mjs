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
        zh_cn: "Sirra",
      },
      defaultLocale: "en",
      locales: {
        zh_cn: {
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
      customCss: [
        "./src/styles/starlight.css",
      ],
      components: {
        Header: "./src/components/starlight/Header.astro",
        Search: "./src/components/starlight/Search.astro",
        ThemeSelect: "./src/components/starlight/ThemeSelect.astro",
        LanguageSelect: "./src/components/starlight/LanguageSelect.astro",
      },
    }),
  ],
})
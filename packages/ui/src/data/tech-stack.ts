export interface TechStackItem {
  name: string
  url: string
  desc: string
}

export interface TechStackGroup {
  category: string
  items: TechStackItem[]
}

export const techStack: TechStackGroup[] = [
  {
    category: "Infrastructure",
    items: [
      {
        name: "Turborepo",
        url: "https://turbo.build",
        desc: "Build orchestration · キャッシュ · 並列処理",
      },
      {
        name: "pnpm",
        url: "https://pnpm.io",
        desc: "Efficient package manager · 高速なパッケージ管理",
      },
    ],
  },
  {
    category: "Framework",
    items: [
      {
        name: "Astro",
        url: "https://astro.build",
        desc: "Static site · Islands architecture · Zero JS by default",
      },
      {
        name: "React",
        url: "https://react.dev",
        desc: "Client-side interactivity · インタラクティブコンポーネント",
      },
    ],
  },
  {
    category: "Content & Docs",
    items: [
      {
        name: "Starlight",
        url: "https://starlight.astro.build",
        desc: "Documentation theme · Built-in i18n · MDX support",
      },
      {
        name: "MDX",
        url: "https://mdxjs.com",
        desc: "Markdown + JSX · Interactive notes · インタラクティブノート",
      },
    ],
  },
  {
    category: "UI & Styling",
    items: [
      {
        name: "shadcn/ui",
        url: "https://ui.shadcn.com",
        desc: "Customizable components · Tailwind CSS",
      },
      {
        name: "Tailwind CSS",
        url: "https://tailwindcss.com",
        desc: "Utility-first · Responsive design · レスポンシブ",
      },
      {
        name: "Lucide",
        url: "https://lucide.dev",
        desc: "Icon library · アイコンライブラリ",
      },
    ],
  },
  {
    category: "Typography",
    items: [
      {
        name: "Inter",
        url: "https://rsms.me/inter",
        desc: "Body text · Latin & European characters",
      },
      {
        name: "Noto Sans SC",
        url: "https://fonts.google.com/noto/specimen/Noto+Sans+SC",
        desc: "Simplified Chinese · 簡体字中国語",
      },
      {
        name: "Noto Sans JP",
        url: "https://fonts.google.com/noto/specimen/Noto+Sans+JP",
        desc: "Japanese · 日本語",
      },
    ],
  },
  {
    category: "Quality",
    items: [
      {
        name: "TypeScript",
        url: "https://www.typescriptlang.org",
        desc: "Type safety · 型安全性",
      },
      {
        name: "Prettier",
        url: "https://prettier.io",
        desc: "Code formatting · コードフォーマット",
      },
      {
        name: "ESLint",
        url: "https://eslint.org",
        desc: "Code linting · コード品質",
      },
    ],
  },
]

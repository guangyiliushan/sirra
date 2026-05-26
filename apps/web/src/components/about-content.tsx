"use client"

import {
  User,
  ExternalLink,
  Mail,
} from "lucide-react"
import { Hero } from "@workspace/ui/components/hero"
import { Section } from "@workspace/ui/components/section"
import { LinkCard } from "@workspace/ui/components/link-card"

const techStack = [
  {
    category: "Infrastructure",
    items: [
      { name: "Turborepo", url: "https://turbo.build", desc: "Build orchestration · キャッシュ · 並列処理" },
      { name: "pnpm", url: "https://pnpm.io", desc: "Efficient package manager · 高速なパッケージ管理" },
    ],
  },
  {
    category: "Framework",
    items: [
      { name: "Astro", url: "https://astro.build", desc: "Static site · Islands architecture · Zero JS by default" },
      { name: "React", url: "https://react.dev", desc: "Client-side interactivity · インタラクティブコンポーネント" },
    ],
  },
  {
    category: "Content & Docs",
    items: [
      { name: "Starlight", url: "https://starlight.astro.build", desc: "Documentation theme · Built-in i18n · MDX support" },
      { name: "MDX", url: "https://mdxjs.com", desc: "Markdown + JSX · Interactive notes · インタラクティブノート" },
    ],
  },
  {
    category: "UI & Styling",
    items: [
      { name: "shadcn/ui", url: "https://ui.shadcn.com", desc: "Customizable components · Tailwind CSS" },
      { name: "Tailwind CSS", url: "https://tailwindcss.com", desc: "Utility-first · Responsive design · レスポンシブ" },
      { name: "Lucide", url: "https://lucide.dev", desc: "Icon library · アイコンライブラリ" },
    ],
  },
  {
    category: "Typography",
    items: [
      { name: "Inter", url: "https://rsms.me/inter", desc: "Body text · Latin & European characters" },
      { name: "Noto Sans SC", url: "https://fonts.google.com/noto/specimen/Noto+Sans+SC", desc: "Simplified Chinese · 簡体字中国語" },
      { name: "Noto Sans JP", url: "https://fonts.google.com/noto/specimen/Noto+Sans+JP", desc: "Japanese · 日本語" },
    ],
  },
  {
    category: "Quality",
    items: [
      { name: "TypeScript", url: "https://www.typescriptlang.org", desc: "Type safety · 型安全性" },
      { name: "Prettier", url: "https://prettier.io", desc: "Code formatting · コードフォーマット" },
      { name: "ESLint", url: "https://eslint.org", desc: "Code linting · コード品質" },
    ],
  },
]


export default function AboutContent() {
  return (
    <>
      <Hero icon={<User className="size-9" />} title="About">
        <div className="mx-auto mt-6 flex max-w-3xl flex-col gap-6 leading-relaxed">
          {/* Tagline */}
          <div>
            <p className="text-lg font-medium text-foreground">
              A flash of insight outweighs a thousand memorizations.
            </p>
            <p className="text-sm text-muted-foreground/70">一瞬の理解は、千の暗記に勝る。</p>
          </div>


          {/* Bio */}
          <div className="space-y-1 text-muted-foreground">
            <p>Hi, I&apos;m guangyiliushan, a CS undergrad exploring frameworks, architectures, and grinding algorithms.</p>
            <p className="text-sm text-muted-foreground/70">こんにちは、guangyiliushanです。CS専攻の学生として、フレームワークやアーキテクチャを探求し、アルゴリズムを磨いています。</p>
            <p className="text-sm text-muted-foreground/70">我是 guangyiliushan，一名计科本科生。正在探索框架与架构，在 LeetCode 和洛谷中打磨算法。</p>
          </div>

          {/* Mission */}
          <div className="space-y-1 text-muted-foreground">
            <p>This is a personal knowledge hub fueled by curiosity — bridging the gap between &ldquo;knowing&rdquo; and &ldquo;understanding&rdquo;.</p>
            <p className="text-sm text-muted-foreground/70">ここは好奇心で動く個人のナレッジベースです。「知る」から「理解する」への架け橋を目指します。</p>
            <p className="text-sm text-muted-foreground/70">这是一个由好奇心驱动的个人笔记站。跨越「知道」与「懂得」的鸿沟。</p>
          </div>

          {/* CTA */}
          <p className="text-sm text-muted-foreground">
            Hope it sparks your epiphany too. Got ideas?{" "}
            <a href="/sponsor" className="underline underline-offset-2 hover:text-foreground transition-colors">
              Join me
            </a>
            .
          </p>
        </div>
      </Hero>

      <Section maxW="6xl">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Tech Stack</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            How this site is built · このサイトの構築方法 · 本站技术架构
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group) => (
            <div key={group.category} className="flex flex-col">
              <h3 className="mb-4 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                {group.category}
              </h3>
              <div className="flex flex-1 flex-col gap-3">
                {group.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-1 items-center gap-3 rounded-xl border border-border bg-card p-4 text-sm transition-all hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <span className="shrink-0 font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </span>
                    <span className="line-clamp-2 text-xs text-muted-foreground/70">
                      {item.desc}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section maxW="6xl">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Links</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Get in touch · 連絡先 · 联系方式
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <LinkCard
            icon={ExternalLink}
            title="GitHub"
            description="@guangyiliushan"
            href="https://github.com/guangyiliushan"
          />
          <LinkCard
            icon={Mail}
            title="Email"
            description="hello@example.com"
            href="mailto:hello@example.com"
            external={false}
          />
        </div>
      </Section>

      <footer className="border-t border-border px-4 py-12 text-center">
        <p className="text-sm text-muted-foreground">
          This site is powered by <a href="/sponsor" className="underline underline-offset-2 hover:text-foreground transition-colors">your support</a>.
        </p>
        <p className="mt-1 text-xs text-muted-foreground/60">
          このサイトは<a href="/sponsor" className="underline underline-offset-2 hover:text-foreground transition-colors">あなたのサポート</a>で運営されています。
        </p>
      </footer>
    </>
  )
}

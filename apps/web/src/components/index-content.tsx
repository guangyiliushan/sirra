"use client"

import { FileText, ChevronDown, Sigma, Atom, Globe } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { Section } from "@workspace/ui/components/section"
import { FeatureCard } from "@workspace/ui/components/feature-card"

const knowledgeAreas = [
  {
    icon: Sigma,
    title: "数学·統計 / Math & Stats",
    description: (
      <div className="flex flex-col gap-2">
        <p>
          <span className="font-medium text-foreground">
            高数·線形代数·確率論
          </span>
          <br />
          Calculus · Linear Algebra · Probability
        </p>
        <p>
          インタラクティブ可視化で理解を深める
          <br />
          Interactive visualizations for deeper understanding
        </p>
        <p className="text-xs italic">
          &ldquo;Breaking mathematical intuition, rebuilding rigorous
          proofs&rdquo;
        </p>
      </div>
    ),
    tags: ["Julia", "Python/Manim", "Observable"],
  },
  {
    icon: Atom,
    title: "自然科学 / Natural Sciences",
    description: (
      <div className="flex flex-col gap-2">
        <p>
          物理·化学·生物学論文研读
          <br />
          Physics · Chemistry · Biology Papers
        </p>
        <p>
          反応経路·知識構造の分析
          <br />
          Reaction pathway & knowledge structure analysis
        </p>
        <p>
          分子動力学·量子化学計算メモ
          <br />
          Molecular dynamics & quantum chemistry notes
        </p>
      </div>
    ),
    tags: ["QSAR", "RDKit", "Lit reviews"],
  },
  {
    icon: Globe,
    title: "言語·留学 / Language & Study Abroad",
    description: (
      <div className="flex flex-col gap-2">
        <p>
          英語学習: TOEFL·TOEIC · 学術英語
          <br />
          English Learning for graduate school
        </p>
        <p>
          日本語学習: JLPT (N1/N2) · J-TEST · 志望理由書
          <br />
          Japanese for daily life & research
        </p>
      </div>
    ),
    tags: ["TOEFL iBT", "JLPT/NAT", "研究計画書"],
  },
]

export default function IndexContent() {
  const scrollToAreas = () => {
    const el = document.getElementById("knowledge-areas")
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 pt-20 text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

        <p className="text-xs font-medium tracking-widest text-muted-foreground/50 uppercase">
          Notes · Labs · Thoughts | ノート·研究·思考 | 笔记 · 实验 · 思考
        </p>

        <h1 className="mt-6 text-6xl font-extrabold tracking-tight text-foreground sm:text-8xl">
          Sirra
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground/60 sm:text-base">
          <span className="italic">Named after Händel&apos;s Opera «Silla»</span>
          <br />
          <span className="italic">ヘンデルのオペラ『シッラ』に由来</span>
          <br />
          <span className="italic">取自亨德尔歌剧《西拉》</span>
        </p>

        <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          这是我的个人知识实验室 · 学习笔记与思考空间
          <br />
          ここは私の個人知識ラボ·学習ノートと思考の場所
          <br />
          This is my personal knowledge lab, study notes & thinking space
        </p>

        <p className="mt-10 max-w-md text-sm leading-relaxed text-muted-foreground/70">
          科学从不停止反叛。
          <br />
          科学は反逆を止めない。
          <br />
          Science never stops rebelling.
          <br />
          打破旧认知 · 重建新理解 | 旧知を打ち破り、新知を創造する
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href="/notes">
              <FileText data-icon="inline-start" />
              翻阅笔记 | View Notes | ノートを読む
            </a>
          </Button>
          <Button variant="outline" size="lg" onClick={scrollToAreas}>
            <ChevronDown data-icon="inline-start" />
            探索领域 | Explore Areas | 分野を探る
          </Button>
        </div>

        <div className="mt-16 flex items-center gap-5 text-xs text-muted-foreground/40">
          <span>中文 / 中国語</span>
          <span className="text-border">·</span>
          <span>English</span>
          <span className="text-border">·</span>
          <span>日本語</span>
        </div>
      </section>

      {/* Knowledge Areas */}
      <section id="knowledge-areas" className="relative pt-12">
        <Section maxW="7xl" centered>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            研究·学习领域
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Research & Study Areas | 研究·学習分野 | 研究及学习领域
          </p>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {knowledgeAreas.map((area) => (
              <FeatureCard
                key={area.title}
                icon={area.icon}
                title={area.title}
                description={area.description}
                tags={area.tags}
              />
            ))}
          </div>
        </Section>
      </section>

      {/* Recent Notes */}
      <section className="relative">
        <Section maxW="7xl">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              最近のノート · Recent Notes
            </h2>
            <a
              href="/notes"
              className="flex items-center gap-1 text-sm text-muted-foreground transition-all hover:text-primary"
            >
              全て見る → All notes
            </a>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" />
          <div className="mt-6 text-center text-xs text-muted-foreground/60 italic">
            日々更新中 · 随复习新增 MDX · Daily updates with interactive
            visualizations
          </div>
        </Section>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-12 text-center">
        <p className="text-sm text-muted-foreground">
          Sirra — 学习 · 研究 · 創作 | Study · Research · Create |
          学習·研究·創作
        </p>
        <p className="mt-1 text-xs text-muted-foreground/70">
          Built with Astro + React + shadcn/ui | 勉強·研究·創作用ポートフォリオ
        </p>
      </footer>
    </>
  )
}

"use client"

import {
  Coffee,
  Star,
  Link2,
  PenLine,
  AlertCircle,
  MessageSquare,
  Mail,
} from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { Hero, HeroIconTinted } from "@workspace/ui/components/hero"
import { Section } from "@workspace/ui/components/section"
import { LinkCard } from "@workspace/ui/components/link-card"
import { BuyMeCoffeeButton } from "@workspace/ui/components/buy-me-coffee"

const supportWays = [
  {
    icon: Star,
    title: "Star on GitHub",
    subtitle: "GitHub でスターを付ける · 给项目点星",
    desc: "Help others discover this project",
    action: "Star →",
    href: "https://github.com/guangyiliushan/sirra",
  },
  {
    icon: Link2,
    title: "Share",
    subtitle: "シェアする · 分享",
    desc: "Share with friends who might be interested",
    action: "Copy Link →",
    onClick: () => {
      navigator.clipboard.writeText(window.location.origin).then(() => alert("Link copied! · リンクをコピーしました · 链接已复制"))
    },
  },
  {
    icon: PenLine,
    title: "Contribute",
    subtitle: "貢献する · 贡献代码",
    desc: "Submit PRs to fix bugs or improve content",
    action: "Contribute →",
    href: "https://github.com/guangyiliushan/sirra",
  },
]

const contactLinks = [
  {
    icon: AlertCircle,
    iconTint: "bg-red-500/10 text-red-500",
    title: "Bug Report",
    subtitle: "バグ報告 · 错误报告",
    desc: "Report bugs with reproduction steps and expected behavior",
    cta: "Open Issue →",
    href: "https://github.com/guangyiliushan/sirra/issues/new?template=bug_report.md",
  },
  {
    icon: PenLine,
    iconTint: "bg-emerald-500/10 text-emerald-500",
    title: "Feature Request",
    subtitle: "機能提案 · 功能建议",
    desc: "Suggest new features or improvements",
    cta: "Request Feature →",
    href: "https://github.com/guangyiliushan/sirra/issues/new?template=feature_request.md",
  },
  {
    icon: MessageSquare,
    iconTint: "bg-blue-500/10 text-blue-500",
    title: "Content Suggestion",
    subtitle: "内容の提案 · 内容建议",
    desc: "Request notes on specific topics or report content errors",
    cta: "Suggest Content →",
    href: "https://github.com/guangyiliushan/sirra/issues/new?title=Content Suggestion:",
  },
  {
    icon: Mail,
    iconTint: "bg-purple-500/10 text-purple-500",
    title: "Email",
    subtitle: "メール · 邮件",
    desc: "Reach out directly via email",
    cta: "hello@example.com",
    href: "mailto:hello@example.com",
    external: false,
  },
]

export default function SponsorContent() {
  return (
    <>
      <Hero
        icon={<HeroIconTinted icon={Coffee} tint="bg-amber-500/10 text-amber-500" />}
        title="Sponsor"
        description="Support this project · このプロジェクトを支援する · 支持这个项目"
      />

      <Section maxW="3xl" className="!pt-0">
        <div className="overflow-hidden rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-500/5 to-amber-600/5 p-8 dark:border-amber-800">
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex-1">
              <h2 className="text-2xl font-bold tracking-tight">Buy Me a Coffee</h2>
              <p className="mt-2 text-xs text-muted-foreground/70">
                コーヒーを奢る · 请我喝杯咖啡
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                If my notes or projects have helped you, consider buying me a coffee.
                <br />
                <span className="text-muted-foreground/70">役に立ったら、コーヒーを一杯おごってください。</span>
                <br />
                <span className="text-muted-foreground/70">如果觉得有帮助，可以请我喝杯咖啡支持创作。</span>
              </p>
              <div className="mt-8 flex justify-center md:justify-start">
                <BuyMeCoffeeButton username="guangyiliushan" />
              </div>
              <p className="mt-4 text-xs text-muted-foreground/60">
                buymeacoffee.com/<strong className="text-foreground/60">guangyiliushan</strong>
              </p>
            </div>

            <div className="shrink-0">
              <div className="rounded-2xl border border-amber-200/60 bg-white p-3 shadow-sm transition-transform hover:scale-105 dark:border-amber-800/60">
                <img
                  src="/qr-code.png"
                  alt="Buy Me a Coffee QR Code"
                  className="size-32 rounded-xl object-contain md:size-40"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section maxW="6xl">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Other Ways</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Other ways to support · その他の支援方法 · 其他支持方式
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {supportWays.map((way) => (
            <div
              key={way.title}
              className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-0.5 hover:shadow-sm"
            >
              <way.icon className="mb-4 size-8 text-muted-foreground" />
              <h3 className="font-semibold">{way.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground/70">{way.subtitle}</p>
              <p className="mt-3 text-sm text-muted-foreground">{way.desc}</p>
              {way.href ? (
                <Button variant="outline" size="sm" className="mt-6" asChild>
                  <a href={way.href} target="_blank" rel="noopener noreferrer">
                    {way.action}
                  </a>
                </Button>
              ) : (
                <Button variant="outline" size="sm" className="mt-6" onClick={way.onClick}>
                  {way.action}
                </Button>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section maxW="6xl">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Feedback</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Report bugs or suggest features · バグ報告や機能提案 · 反馈与建议
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {contactLinks.map((link) => (
            <LinkCard
              key={link.title}
              icon={link.icon}
              iconTint={link.iconTint}
              title={link.title}
              description={
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-muted-foreground/70">{link.subtitle}</span>
                  <span>{link.desc}</span>
                </div>
              }
              cta={link.cta}
              href={link.href}
              external={link.external !== false}
            />
          ))}
        </div>
      </Section>

      <footer className="border-t border-border px-4 py-12 text-center">
        <p className="text-sm text-muted-foreground">
          Thank you for your support · ご支援ありがとうございます · 感谢你的支持
        </p>
        <p className="mt-2 text-xs text-muted-foreground/60">
          Every coffee, star, issue, and suggestion helps this project grow.
        </p>
      </footer>
    </>
  )
}

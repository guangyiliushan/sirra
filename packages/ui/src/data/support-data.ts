export interface SupportWay {
  icon: string
  title: string
  subtitle: string
  desc: string
  action: string
  href?: string
  isCopy?: boolean
}

export interface ContactLink {
  icon: string
  iconTint: string
  title: string
  subtitle: string
  desc: string
  cta: string
  href: string
  external: boolean
}

export const supportWays: SupportWay[] = [
  {
    icon: "star",
    title: "Star on GitHub",
    subtitle: "GitHub でスターを付ける · 给项目点星",
    desc: "Help others discover this project",
    action: "Star →",
    href: "https://github.com/guangyiliushan/sirra",
  },
  {
    icon: "link-2",
    title: "Share",
    subtitle: "シェアする · 分享",
    desc: "Share with friends who might be interested",
    action: "Copy Link →",
    isCopy: true,
  },
  {
    icon: "pen-line",
    title: "Contribute",
    subtitle: "貢献する · 贡献代码",
    desc: "Submit PRs to fix bugs or improve content",
    action: "Contribute →",
    href: "https://github.com/guangyiliushan/sirra",
  },
]

export const contactLinks: ContactLink[] = [
  {
    icon: "alert-circle",
    iconTint: "bg-red-500/10 text-red-500",
    title: "Bug Report",
    subtitle: "バグ報告 · 错误报告",
    desc: "Report bugs with reproduction steps and expected behavior",
    cta: "Open Issue →",
    href: "https://github.com/guangyiliushan/sirra/issues/new?template=bug_report.md",
    external: true,
  },
  {
    icon: "pen-line",
    iconTint: "bg-emerald-500/10 text-emerald-500",
    title: "Feature Request",
    subtitle: "機能提案 · 功能建议",
    desc: "Suggest new features or improvements",
    cta: "Request Feature →",
    href: "https://github.com/guangyiliushan/sirra/issues/new?template=feature_request.md",
    external: true,
  },
  {
    icon: "message-square",
    iconTint: "bg-blue-500/10 text-blue-500",
    title: "Content Suggestion",
    subtitle: "内容の提案 · 内容建议",
    desc: "Request notes on specific topics or report content errors",
    cta: "Suggest Content →",
    href: "https://github.com/guangyiliushan/sirra/issues/new?title=Content Suggestion:",
    external: true,
  },
  {
    icon: "mail",
    iconTint: "bg-purple-500/10 text-purple-500",
    title: "Email",
    subtitle: "メール · 邮件",
    desc: "Reach out directly via email",
    cta: "hello@example.com",
    href: "mailto:hello@example.com",
    external: false,
  },
]

export interface KnowledgeArea {
  icon: string
  title: string
  description: KnowledgeAreaDescription
  tags: string[]
}

export interface KnowledgeAreaDescription {
  title: string
  titleEn: string
  note: string
  noteEn: string
  quote?: string
}

export const knowledgeAreas: KnowledgeArea[] = [
  {
    icon: "sigma",
    title: "数学·統計 / Math & Stats",
    description: {
      title: "高数·線形代数·確率論",
      titleEn: "Calculus · Linear Algebra · Probability",
      note: "インタラクティブ可視化で理解を深める",
      noteEn: "Interactive visualizations for deeper understanding",
      quote: "Breaking mathematical intuition, rebuilding rigorous proofs",
    },
    tags: ["Julia", "Python/Manim", "Observable"],
  },
  {
    icon: "atom",
    title: "自然科学 / Natural Sciences",
    description: {
      title: "物理·化学·生物学論文研读",
      titleEn: "Physics · Chemistry · Biology Papers",
      note: "反応経路·知識構造の分析 · 分子動力学·量子化学計算メモ",
      noteEn:
        "Reaction pathway & knowledge structure analysis · Molecular dynamics & quantum chemistry notes",
    },
    tags: ["QSAR", "RDKit", "Lit reviews"],
  },
  {
    icon: "globe",
    title: "言語·留学 / Language & Study Abroad",
    description: {
      title: "英語学習 · 日本語学習",
      titleEn: "English Learning · Japanese Learning",
      note: "TOEFL·TOEIC · 学術英語  |  JLPT (N1/N2) · J-TEST · 志望理由書",
      noteEn:
        "English for graduate school | Japanese for daily life & research",
    },
    tags: ["TOEFL iBT", "JLPT/NAT", "研究計画書"],
  },
]

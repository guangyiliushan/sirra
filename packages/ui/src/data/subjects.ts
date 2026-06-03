export interface SubjectLink {
  label: string
  href: string
  description: string
}

export const subjectLinks: SubjectLink[] = [
  {
    label: "Mathematics",
    href: "/math",
    description: "Calculus, Linear Algebra, Statistics",
  },
  {
    label: "Computer Science",
    href: "/computer-science",
    description: "Algorithms, Data Structures, AI",
  },
  {
    label: "Physics",
    href: "/physics",
    description: "Classical Mechanics, Electromagnetism, Relativity",
  },
  {
    label: "Biology",
    href: "/biology",
    description: "Molecular Biology, Genetics, Ecology",
  },
  {
    label: "Chemistry",
    href: "/chemistry",
    description: "Organic, Inorganic, Physical Chemistry",
  },
  {
    label: "Language",
    href: "/language",
    description: "English, Japanese Learning Notes",
  },
]

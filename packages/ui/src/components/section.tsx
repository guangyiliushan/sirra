import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"

const maxWMap: Record<string, string> = {
  "3xl": "max-w-3xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
}

interface SectionProps extends React.ComponentProps<"section"> {
  title?: string
  subtitle?: string
  centered?: boolean
  maxW?: "3xl" | "5xl" | "6xl" | "7xl"
}

function Section({
  className,
  title,
  subtitle,
  centered = false,
  maxW,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      data-slot="section"
      className={cn(
        "mx-auto px-4 py-12",
        maxW ? maxWMap[maxW] : "max-w-5xl",
        className
      )}
      {...props}
    >
      {(title || subtitle) && (
        <div className={cn("mb-10", centered && "text-center")}>
          {title && (
            <h2
              className={cn(
                "text-2xl font-bold tracking-tight",
                centered && "text-3xl"
              )}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p
              className={cn(
                "text-sm text-muted-foreground",
                title && "mt-2"
              )}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  )
}

export { Section }
export type { SectionProps }

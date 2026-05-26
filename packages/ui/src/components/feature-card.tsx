import * as React from "react"
import type { LucideIcon } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"
import { Badge } from "@workspace/ui/components/badge"

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  iconTint?: string
  title: string
  description?: React.ReactNode
  tags?: string[]
  href?: string
}

function FeatureCard({
  className,
  icon: Icon,
  iconTint = "bg-primary/10 text-primary",
  title,
  description,
  tags,
  href,
  ...props
}: FeatureCardProps) {
  const content = (
    <>
      <div className="flex items-center gap-2">
        <div className={cn("rounded-full p-2", iconTint)}>
          <Icon className="size-6" strokeWidth={1.8} />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      {description && (
        <div className="mt-4 text-sm text-muted-foreground">{description}</div>
      )}
      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={cn(
          "group relative block overflow-hidden rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-xl",
          className
        )}
      >
        {content}
      </a>
    )
  }

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-xl",
        className
      )}
      {...props}
    >
      {content}
    </div>
  )
}

export { FeatureCard }
export type { FeatureCardProps }

import * as React from "react"
import type { LucideIcon } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

interface LinkCardProps extends React.ComponentProps<"a"> {
  icon: LucideIcon
  iconTint?: string
  title: string
  description?: React.ReactNode
  cta?: string
  external?: boolean
}

function LinkCard({
  className,
  icon: Icon,
  iconTint = "bg-muted text-muted-foreground",
  title,
  description,
  cta,
  external = true,
  ...props
}: LinkCardProps) {
  const extProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {}

  return (
    <a
      data-slot="link-card"
      className={cn(
        "flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-sm",
        className
      )}
      {...extProps}
      {...props}
    >
      <div
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
          iconTint
        )}
      >
        <Icon className="size-5" />
      </div>
      <div className="flex flex-col">
        <h3 className="font-semibold">{title}</h3>
        {description && (
          <div className="mt-1 text-sm text-muted-foreground">{description}</div>
        )}
        {cta && (
          <span className="mt-2 text-xs font-medium text-primary">{cta}</span>
        )}
      </div>
    </a>
  )
}

export { LinkCard }
export type { LinkCardProps }

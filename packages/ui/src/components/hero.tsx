import * as React from "react"
import type { LucideIcon } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

interface HeroProps extends React.ComponentProps<"section"> {
  icon?: React.ReactNode
  title: string
  description?: string
  actions?: React.ReactNode
}

function Hero({
  className,
  icon,
  title,
  description,
  actions,
  children,
  ...props
}: HeroProps) {
  return (
    <section
      data-slot="hero"
      className={cn(
        "mx-auto max-w-3xl px-4 pt-28 pb-12 text-center",
        className
      )}
      {...props}
    >
      {icon && (
        <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-muted text-muted-foreground">
          {icon}
        </div>
      )}
      <h1 className="text-4xl font-extrabold tracking-tight">{title}</h1>
      {description && (
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
      {actions && <div className="mt-8">{actions}</div>}
      {children}
    </section>
  )
}

function HeroIcon({ className, icon: Icon, ...props }: React.ComponentProps<"div"> & { icon?: LucideIcon }) {
  if (!Icon) return null
  return (
    <div
      data-slot="hero-icon"
      className={cn(
        "mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-muted text-muted-foreground",
        className
      )}
      {...props}
    >
      <Icon className="size-9" />
    </div>
  )
}

function HeroIconTinted({
  className,
  icon: Icon,
  tint = "bg-muted text-muted-foreground",
  ...props
}: React.ComponentProps<"div"> & { icon: LucideIcon; tint?: string }) {
  return (
    <div
      data-slot="hero-icon"
      className={cn(
        "mx-auto mb-6 flex size-20 items-center justify-center rounded-full",
        tint,
        className
      )}
      {...props}
    >
      <Icon className="size-9" />
    </div>
  )
}

export { Hero, HeroIcon, HeroIconTinted }
export type { HeroProps }

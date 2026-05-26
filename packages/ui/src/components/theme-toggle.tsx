"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { SunIcon, MoonIcon } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

function ThemeToggle({ className, ...props }: React.ComponentProps<"button">) {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
      className={cn(
        "group/theme-toggle inline-flex h-9 w-9 items-center justify-center rounded-3xl transition-colors hover:bg-muted",
        className
      )}
      aria-label="Toggle theme"
      suppressHydrationWarning
      {...props}
    >
      <SunIcon className="size-4 rotate-0 scale-100 transition-all duration-300 group-hover/theme-toggle:rotate-90 dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute size-4 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
    </button>
  )
}

export { ThemeToggle }

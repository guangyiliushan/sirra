"use client"

import * as React from "react"
import { GlobeIcon, CheckIcon } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

interface LocaleOption {
  code: string
  label: string
  href: string
}

interface LanguageToggleProps extends React.ComponentProps<"div"> {
  locales: LocaleOption[]
  currentLocale: string
}

function LanguageToggle({
  locales,
  currentLocale,
  className,
  ...props
}: LanguageToggleProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen])

  const handleLocaleChange = (href: string) => {
    window.location.assign(href)
  }

  const currentLocaleOption = locales.find((l) => l.code === currentLocale)

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      {...props}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group/language-toggle inline-flex h-9 items-center gap-1.5 rounded-3xl px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        aria-expanded={isOpen}
        aria-label="Select language"
      >
        <GlobeIcon className="size-4" />
        <span className="hidden sm:inline">{currentLocaleOption?.label || "Language"}</span>
      </button>

      <div
        className={cn(
          "absolute top-full right-0 z-50 mt-2 min-w-32 overflow-hidden rounded-2xl bg-popover p-1 shadow-lg ring-1 ring-foreground/5 transition-all duration-200 dark:ring-foreground/10",
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0"
        )}
      >
        {locales.map((locale) => (
          <button
            key={locale.code}
            type="button"
            onClick={() => handleLocaleChange(locale.href)}
            className={cn(
              "flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2 text-sm transition-colors hover:bg-muted",
              locale.code === currentLocale && "bg-muted/50"
            )}
          >
            <span>{locale.label}</span>
            {locale.code === currentLocale && (
              <CheckIcon className="size-4 text-primary" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export { LanguageToggle }
export type { LanguageToggleProps, LocaleOption }

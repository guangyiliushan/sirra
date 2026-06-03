"use client"

import * as React from "react"
import { SunIcon, MoonIcon } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

type Theme = "dark" | "light" | "auto"

const STORAGE_KEY = "starlight-theme"

function getSystemTheme(): "dark" | "light" {
  if (typeof window === "undefined") return "dark"
  return matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
}

function getEffectiveTheme(theme: Theme): "dark" | "light" {
  if (theme === "auto") return getSystemTheme()
  return theme
}

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback)
  observer.observe(document.documentElement, {
    attributeFilter: ["data-theme"],
  })
  // Also listen for system theme changes when in auto mode
  const mediaQuery = matchMedia("(prefers-color-scheme: light)")
  const handleChange = () => {
    const currentTheme = document.documentElement.dataset.theme as Theme | undefined
    if (currentTheme === "auto") callback()
  }
  mediaQuery.addEventListener("change", handleChange)
  return () => {
    observer.disconnect()
    mediaQuery.removeEventListener("change", handleChange)
  }
}

function getSnapshot() {
  const theme = (document.documentElement.dataset.theme as Theme | undefined) || "auto"
  const effective = getEffectiveTheme(theme)
  return effective === "dark"
}

function getServerSnapshot() {
  return false
}

function ThemeToggle({ className, ...props }: React.ComponentProps<"button">) {
  const isDark = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const toggleTheme = () => {
    const currentTheme = (document.documentElement.dataset.theme as Theme | undefined) || "auto"
    const effective = getEffectiveTheme(currentTheme)
    const newEffective: "dark" | "light" = effective === "dark" ? "light" : "dark"

    // Update data-theme (Starlight's system)
    document.documentElement.dataset.theme = newEffective
    // Update class (Tailwind's system)
    document.documentElement.classList.toggle("dark", newEffective === "dark")
    // Persist to localStorage
    localStorage.setItem(STORAGE_KEY, newEffective)
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "group/theme-toggle inline-flex h-9 w-9 items-center justify-center rounded-3xl transition-colors hover:bg-muted",
        className
      )}
      aria-label="Toggle theme"
      {...props}
    >
      <SunIcon className={cn(
        "size-4 transition-all duration-300 group-hover/theme-toggle:rotate-90",
        isDark ? "-rotate-90 scale-0" : "rotate-0 scale-100"
      )} />
      <MoonIcon className={cn(
        "absolute size-4 transition-all duration-300",
        isDark ? "rotate-0 scale-100" : "rotate-90 scale-0"
      )} />
    </button>
  )
}

export { ThemeToggle }

"use client"

import * as React from "react"
import { ThemeToggle } from "@workspace/ui/components/theme-toggle"
import { HeaderNav } from "@workspace/ui/components/header-nav"
import { Button } from "@workspace/ui/components/button"
import type { NavItem } from "@workspace/ui/components/header-nav"
import { subjectLinks } from "@workspace/ui/data/subjects"

function useActiveNavItems(): NavItem[] {
  const pathname = React.useSyncExternalStore(
    () => () => {},
    () => window.location.pathname,
    () => "/"
  )

  const localePrefix = pathname.startsWith("/zh-cn/")
    ? "/zh-cn"
    : pathname.startsWith("/ja/")
      ? "/ja"
      : pathname.startsWith("/en/")
        ? "/en"
        : "/en"

  const children = React.useMemo(
    () => {
      const prefix = localePrefix
      return subjectLinks.map((s) => ({
        ...s,
        href: `${prefix}${s.href}`,
      }))
    },
    [localePrefix]
  )

  return [
    { label: "Home", href: "/", active: pathname === "/" },
    {
      label: "Subjects",
      children,
    },
    {
      label: "About",
      href: "/about",
      active: pathname === "/about" || pathname.startsWith("/about/"),
    },
    {
      label: "Sponsor",
      href: "/sponsor",
      active: pathname === "/sponsor" || pathname.startsWith("/sponsor/"),
    },
  ]
}

export default function AppHeader() {
  const navItems = useActiveNavItems()

  return (
    <HeaderNav
      logo={
        <span className="text-lg font-bold tracking-tight">
          Sirra<span className="text-primary">.</span>
        </span>
      }
      items={navItems}
      searchPlaceholder="Search knowledge..."
      actions={
        <>
          <ThemeToggle />
          <Button size="sm">Start Learning</Button>
        </>
      }
    />
  )
}

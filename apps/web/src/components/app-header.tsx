"use client"

import * as React from "react"
import { ThemeToggle } from "@workspace/ui/components/theme-toggle"
import { HeaderNav } from "@workspace/ui/components/header-nav"
import { Button } from "@workspace/ui/components/button"
import type { NavItem } from "@workspace/ui/components/header-nav"

const navItemsBase: Omit<NavItem, "active">[] = [
  { label: "Home", href: "/" },
  {
    label: "Subjects",
    children: [
      {
        label: "Mathematics",
        href: "/subjects/math",
        description: "Calculus, Linear Algebra, Statistics",
      },
      {
        label: "Computer Science",
        href: "/subjects/cs",
        description: "Algorithms, Data Structures, AI",
      },
      {
        label: "More Subjects",
        href: "/subjects/",
        description: "",
      },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Sponsor", href: "/sponsor" },
]

function useActiveNavItems(): NavItem[] {
  const pathname = React.useSyncExternalStore(
    () => () => {}, // subscribe - no-op since we don't need updates
    () => window.location.pathname, // getSnapshot on client
    () => "/" // getServerSnapshot - fallback for SSR
  )

  return navItemsBase.map((item) => ({
    ...item,
    active: item.href === pathname || (item.href !== "/" && pathname.startsWith(item.href ?? "")),
  }))
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

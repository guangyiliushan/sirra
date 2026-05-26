"use client"

import * as React from "react"
import { Slot } from "radix-ui"
import {
  SearchIcon,
  MenuIcon,
  XIcon,
  ChevronDownIcon,
} from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"
import { useScroll } from "@workspace/ui/hooks/use-scroll"
import { useMobile } from "@workspace/ui/hooks/use-mobile"

interface NavSubItem {
  label: string
  href: string
  description?: string
  icon?: React.ReactNode
}

interface NavItem {
  label: string
  href?: string
  active?: boolean
  children?: NavSubItem[]
}

interface HeaderNavProps extends React.ComponentProps<"header"> {
  logo?: React.ReactNode
  logoHref?: string
  items?: NavItem[]
  children?: React.ReactNode
  actions?: React.ReactNode
  searchPlaceholder?: string
  onSearch?: (value: string) => void
}

function HeaderNav({
  className,
  logo,
  logoHref = "/",
  items = [],
  children,
  actions,
  searchPlaceholder = "Search...",
  onSearch,
  ...props
}: HeaderNavProps) {
  const scrolled = useScroll(10)
  const isMobile = useMobile()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [searchFocused, setSearchFocused] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState("")
  const [expandedSubmenus, setExpandedSubmenus] = React.useState<
    Set<string>
  >(new Set())

  const mobileActive = isMobile && mobileOpen

  React.useEffect(() => {
    if (mobileActive) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileActive])

  const toggleMobileSubmenu = (label: string) => {
    setExpandedSubmenus((prev) => {
      const next = new Set(prev)
      if (next.has(label)) {
        next.delete(label)
      } else {
        next.add(label)
      }
      return next
    })
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)
    onSearch?.(value)
  }

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <header
        data-slot="header-nav"
        className={cn(
          "fixed top-0 right-0 left-0 z-50 flex h-16 items-center border-b border-transparent px-4 transition-all duration-300",
          scrolled &&
            "border-border bg-background/80 shadow-sm backdrop-blur-xl",
          !scrolled && "bg-background/60 backdrop-blur-lg",
          className
        )}
        {...props}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={logoHref}
              className="flex shrink-0 items-center gap-2 font-semibold text-foreground transition-opacity hover:opacity-80"
            >
              {logo}
            </a>

            <nav className="hidden items-center gap-1 md:flex">
              {items.map((item) =>
                item.children && item.children.length > 0 ? (
                  <DesktopSubmenu key={item.label} item={item} />
                ) : (
                  <NavLink
                    key={item.label}
                    href={item.href ?? "#"}
                    active={item.active}
                  >
                    {item.label}
                  </NavLink>
                )
              )}
              {children}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <div
              className={cn(
                "relative hidden items-center transition-all duration-300 md:flex",
                searchFocused ? "w-48" : "w-10"
              )}
            >
              <button
                type="button"
                onClick={() => {
                  setSearchFocused(!searchFocused)
                  if (!searchFocused) {
                    setTimeout(
                      () =>
                        document
                          .getElementById("header-search-input")
                          ?.focus(),
                      50
                    )
                  }
                }}
                className={cn(
                  "absolute left-0 z-10 inline-flex h-9 w-9 items-center justify-center rounded-3xl transition-colors hover:bg-muted",
                  searchFocused && "pointer-events-none"
                )}
                aria-label="Toggle search"
              >
                <SearchIcon className="size-4 text-muted-foreground" />
              </button>
              <input
                id="header-search-input"
                type="search"
                placeholder={searchPlaceholder}
                value={searchValue}
                onChange={handleSearch}
                onFocus={() => setSearchFocused(true)}
                onBlur={(e) => {
                  if (!e.target.value) {
                    setSearchFocused(false)
                  }
                }}
                className={cn(
                  "h-9 w-full min-w-0 rounded-3xl border border-transparent bg-input/50 pl-9 pr-3 text-sm transition-all outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30",
                  searchFocused ? "opacity-100" : "w-0 opacity-0"
                )}
              />
            </div>

            {actions}

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-3xl transition-colors hover:bg-muted md:hidden"
              aria-label="Toggle menu"
            >
              {mobileActive ? (
                <XIcon className="size-4" />
              ) : (
                <MenuIcon className="size-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      {mobileActive && (
        <div
          className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm transition-opacity duration-300 md:hidden"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}

      <div
        data-slot="header-nav-mobile"
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-72 bg-background shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden",
          mobileActive ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b px-4">
          <span className="text-sm font-semibold">Menu</span>
          <button
            type="button"
            onClick={closeMobile}
            className="inline-flex h-9 w-9 items-center justify-center rounded-3xl transition-colors hover:bg-muted"
            aria-label="Close menu"
          >
            <XIcon className="size-4" />
          </button>
        </div>

        <div className="flex flex-col gap-1 overflow-y-auto p-4">
          <div className="relative mb-3 md:hidden">
            <SearchIcon className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={handleSearch}
              className="h-9 w-full min-w-0 rounded-3xl border border-transparent bg-input/50 py-1 pr-3 pl-9 text-sm transition-all outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
            />
          </div>

          {items.map((item) =>
            item.children && item.children.length > 0 ? (
              <div key={item.label} className="flex flex-col">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu(item.label)}
                  className="flex w-full items-center justify-between rounded-2xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
                >
                  {item.label}
                  <ChevronDownIcon
                    className={cn(
                      "size-4 text-muted-foreground transition-transform duration-200",
                      expandedSubmenus.has(item.label) && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "ml-3 flex flex-col gap-1 overflow-hidden border-l border-border pl-3 transition-all duration-200",
                    expandedSubmenus.has(item.label)
                      ? "mt-1 mb-1 max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      onClick={closeMobile}
                      className="flex items-start gap-2 rounded-2xl px-3 py-2 transition-colors hover:bg-muted"
                    >
                      {child.icon && (
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center text-muted-foreground">
                          {child.icon}
                        </span>
                      )}
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">
                          {child.label}
                        </span>
                        {child.description && (
                          <span className="line-clamp-1 text-xs text-muted-foreground">
                            {child.description}
                          </span>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href ?? "#"}
                onClick={closeMobile}
                className={cn(
                  "rounded-2xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted",
                  item.active && "bg-muted/50 text-foreground"
                )}
              >
                {item.label}
              </a>
            )
          )}
          {children}
        </div>
      </div>
    </>
  )
}

function NavLink({
  href,
  active,
  className,
  children,
  ...props
}: React.ComponentProps<"a"> & { active?: boolean }) {
  return (
    <a
      href={href}
      className={cn(
        "group/nav-link relative inline-flex h-9 items-center rounded-3xl px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
        active && "bg-muted/50 text-foreground",
        className
      )}
      {...props}
    >
      {children}
      <span
        className={cn(
          "absolute right-2.5 bottom-1 left-2.5 h-px origin-left scale-x-0 bg-foreground/30 transition-transform duration-300 group-hover/nav-link:scale-x-100",
          active && "scale-x-100"
        )}
      />
    </a>
  )
}

function DesktopSubmenu({ item }: { item: NavItem }) {
  const [open, setOpen] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout>>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150)
  }

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className={cn(
          "group/nav-submenu inline-flex h-9 items-center gap-1 rounded-3xl px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        )}
        aria-expanded={open}
      >
        {item.label}
        <ChevronDownIcon
          className={cn(
            "size-3 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "absolute top-full left-1/2 z-50 mt-2 min-w-52 -translate-x-1/2 overflow-hidden rounded-3xl bg-popover p-1.5 shadow-lg ring-1 ring-foreground/5 transition-all duration-200 dark:ring-foreground/10",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0"
        )}
      >
        {item.children?.map((child) => (
          <a
            key={child.label}
            href={child.href}
            className="flex items-start gap-3 rounded-2xl px-3 py-2.5 text-sm transition-colors hover:bg-muted"
          >
            {child.icon && (
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center text-muted-foreground">
                {child.icon}
              </span>
            )}
            <div className="flex flex-col">
              <span className="font-medium text-foreground">{child.label}</span>
              {child.description && (
                <span className="line-clamp-1 text-xs text-muted-foreground">
                  {child.description}
                </span>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

function HeaderNavLogo({
  className,
  asChild,
  ...props
}: React.ComponentProps<"a"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "a"

  return (
    <Comp
      data-slot="header-nav-logo"
      className={cn(
        "flex shrink-0 items-center gap-2 font-semibold text-foreground transition-opacity hover:opacity-80",
        className
      )}
      {...props}
    />
  )
}

function HeaderNavActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="header-nav-actions"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  )
}

export { HeaderNav, HeaderNavLogo, HeaderNavActions, NavLink }
export type { NavItem, NavSubItem }

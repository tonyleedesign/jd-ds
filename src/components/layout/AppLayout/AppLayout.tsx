import { useState } from 'react'
import type { ReactNode } from 'react'
import { GlobalHeader } from '../../navigation/GlobalHeader'
import { ActionBar } from '../../navigation/ActionBar'
import { SideNav } from '../../navigation/SideNav'
import type { BreadcrumbItem } from '../../navigation/Breadcrumb'
import { judiLogoSrc } from '../../ui/Icon/icons/judi-logo'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface AppLayoutProps {
  // ── Layout variant ──────────────────────────────────────────────────────────
  /** Which header to render — defaults to "minerva" */
  variant?: 'minerva' | 'evolution'

  // ── Shared header props ──────────────────────────────────────────────────────
  /** Full logo shown on sm+ screens — defaults to the Judi logo */
  logoSrc?: string
  /** Icon-only logo shown on mobile */
  logoIconSrc?: string
  /** Alt text for the logo — defaults to "Judi" */
  logoAlt?: string
  /** Where the logo links — defaults to "/" */
  logoHref?: string
  /** Module or app name shown next to the logo */
  appName?: string
  /** Optional content rendered before the bell icon — available in both variants */
  headerActions?: ReactNode
  /** Called when the notifications icon is clicked */
  onNotificationsClick?: () => void

  // ── Minerva-only header props ────────────────────────────────────────────────
  /** Called when the account button is clicked (Minerva only) */
  onAccountClick?: () => void
  /** Label for the account button (Minerva only) — defaults to "Account" */
  accountLabel?: string

  // ── Evolution-only header props ──────────────────────────────────────────────
  /** Called when the AI assistant icon is clicked (Evolution only) */
  onAiClick?: () => void
  /** Called when the keyboard shortcuts icon is clicked (Evolution only) */
  onKeyboardClick?: () => void

  // ── ActionBar ───────────────────────────────────────────────────────────────
  /** Breadcrumb trail */
  breadcrumbs?: BreadcrumbItem[]
  /** Page / module title */
  title?: string
  /** When provided, renders a ← Back button to the left of the title */
  onBackClick?: () => void
  /** Optional second row of content beneath the title row */
  secondaryContent?: ReactNode
  /** Action buttons for the far right of the ActionBar */
  actions?: ReactNode
  /** Optional content rendered inline to the right of the title (e.g. Tag, MetaItem) */
  titleMeta?: ReactNode
  /** When true, renders a green ✓ "Case Completed" indicator inline with the title */
  completed?: boolean

  // ── SideNav ─────────────────────────────────────────────────────────────────
  /** Nav items rendered inside the SideNav. Omit this prop entirely if the design has no side navigation — the SideNav will not render at all. */
  sideNavContent?: ReactNode
  /** Initial open state of the SideNav — defaults to true */
  defaultSideNavOpen?: boolean

  // ── Page content ────────────────────────────────────────────────────────────
  /**
   * Optional full-width component rendered between the ActionBar and the page body.
   * Renders flush to all edges — use for tab bars, filter strips, contextual toolbars.
   */
  subBar?: ReactNode
  /**
   * When true, removes the default 40px padding from the page body.
   * Use for full-bleed layouts (e.g. split views, tables that extend edge-to-edge).
   */
  noPadding?: boolean
  children?: ReactNode
  className?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export function AppLayout({
  variant            = 'minerva',
  // Shared header
  logoSrc            = judiLogoSrc,
  logoIconSrc,
  logoAlt,
  logoHref,
  appName,
  onNotificationsClick,
  onAccountClick,
  // Minerva-only
  headerActions,
  accountLabel,
  // Evolution-only
  onAiClick,
  onKeyboardClick,
  // ActionBar
  breadcrumbs,
  title,
  onBackClick,
  secondaryContent,
  actions,
  titleMeta,
  completed,
  // SideNav
  sideNavContent,
  defaultSideNavOpen = true,
  // Content
  subBar,
  noPadding          = false,
  children,
  className          = '',
}: AppLayoutProps) {
  const [sideNavOpen, setSideNavOpen] = useState(defaultSideNavOpen)

  const header = (
    <GlobalHeader
      variant={variant}
      logoSrc={logoSrc}
      logoIconSrc={logoIconSrc}
      logoAlt={logoAlt}
      logoHref={logoHref}
      appName={appName}
      onMenuClick={() => setSideNavOpen(prev => !prev)}
      onNotificationsClick={onNotificationsClick}
      onAccountClick={onAccountClick}
      headerActions={headerActions}
      accountLabel={accountLabel}
      onAiClick={onAiClick}
      onKeyboardClick={onKeyboardClick}
    />
  )

  const actionBar = (
    <ActionBar
      breadcrumbs={breadcrumbs}
      title={title}
      onBackClick={onBackClick}
      secondaryContent={secondaryContent}
      actions={actions}
      titleMeta={titleMeta}
      completed={completed}
    />
  )

  const sideNav = sideNavContent ? (
    <SideNav
      isOpen={sideNavOpen}
      onToggle={() => setSideNavOpen(prev => !prev)}
    >
      {sideNavContent}
    </SideNav>
  ) : null

  return (
    <div className={`flex flex-col h-screen overflow-hidden bg-(--bg-surface-base) ${className}`}>

      {variant === 'evolution' ? (

        // ── Evolution — SideNav spans full height alongside ActionBar + content ──
        <>
          <div className="sticky top-0 z-50">{header}</div>
          <div className="flex flex-1 overflow-hidden">
            {sideNavOpen && sideNav}
            <div className="flex flex-col flex-1 overflow-hidden">
              {actionBar}
              {subBar && <div className="shrink-0">{subBar}</div>}
              <main aria-label="Page content" className={`flex-1 overflow-auto bg-(--bg-surface-subtle) ${noPadding ? '' : 'p-(--layout-4)'}`}>
                {children}
              </main>
            </div>
          </div>
        </>

      ) : (

        // ── Minerva — SideNav sits below ActionBar ────────────────────────────────
        <>
          <div className="sticky top-0 z-50">
            {header}
            {actionBar}
            {subBar && <div className="shrink-0">{subBar}</div>}
          </div>
          <div className="flex flex-1 overflow-hidden">
            {sideNav}
            <main aria-label="Page content" className={`flex-1 overflow-auto bg-(--bg-surface-subtle) ${noPadding ? '' : 'p-(--layout-4)'}`}>
              {children}
            </main>
          </div>
        </>

      )}

    </div>
  )
}

import type { ReactNode } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SideNavItemProps {
  label: string
  /** Provide href for anchor-based navigation. Omit to use onClick state-based navigation. */
  href?: string
  /** Used when href is omitted — switches the active section without routing */
  onClick?: () => void
  /** Highlights the item as active */
  active?: boolean
  /** Optional lozenge rendered on the far right */
  lozenge?: ReactNode
  className?: string
}

// ─── Shared styles ────────────────────────────────────────────────────────────

const itemTypography = {
  fontSize:   'var(--menu-item-lg-size)',
  lineHeight: 'var(--menu-item-lg-line-height)',
  fontWeight: 'var(--menu-item-lg-weight)',
}

// ─── Component ────────────────────────────────────────────────────────────────

export function SideNavItem({
  label,
  href,
  onClick,
  active = false,
  lozenge,
  className = '',
}: SideNavItemProps) {
  const stateClasses = active
    ? 'bg-(--bg-navigation-item-primary-active) text-(--text-navigation-item-primary-active)'
    : 'bg-(--bg-navigation-item-primary-idle) hover:bg-(--bg-navigation-item-primary-hover) text-(--text-navigation-item-primary-idle) hover:text-(--text-navigation-item-primary-hover)'

  const sharedClass = `flex items-center justify-between w-full py-(--inset-3) px-(--inset-2) no-underline rounded-(--radius-sm) cursor-pointer border-0 bg-transparent text-left ${stateClasses} ${className}`

  const content = (
    <>
      <span>{label}</span>
      {lozenge && <span className="shrink-0">{lozenge}</span>}
    </>
  )

  if (href) {
    return (
      <a href={href} className={sharedClass} style={itemTypography}>
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={sharedClass} style={itemTypography}>
      {content}
    </button>
  )
}

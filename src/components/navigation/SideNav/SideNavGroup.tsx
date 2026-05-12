// ─── Types ────────────────────────────────────────────────────────────────────

export interface SideNavGroupProps {
  label: string
  className?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export function SideNavGroup({ label, className = '' }: SideNavGroupProps) {
  return (
    <span
      className={`text-(--text-surface-base) uppercase ${className}`}
      style={{
        fontSize:      'var(--label-lg-size)',
        lineHeight:    'var(--space-18)',
        fontWeight:    'var(--label-lg-weight)',
        letterSpacing: 'var(--space-1)',
      }}
    >
      {label}
    </span>
  )
}

import type { ReactNode } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface TabSetProps {
  children: ReactNode
}

// ─── Component ────────────────────────────────────────────────────────────────

export function TabSet({ children }: TabSetProps) {
  return (
    <div
      role="tablist"
      className="flex overflow-hidden px-(--inset-5) bg-(--bg-navigation-item-secondary-idle) w-full"
      style={{ boxShadow: 'inset 0 -2px 0 var(--border-surface-base)' }}
    >
      {children}
    </div>
  )
}

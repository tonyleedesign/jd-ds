import type { ReactNode } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ButtonGroupProps {
  /**
   * Pass buttons in left-to-right visual order.
   *
   * Right-aligned group (e.g. action bar, dialog footer):
   *   tertiary → secondary → primary  (primary is rightmost / most prominent)
   *
   * Left-aligned group (e.g. toolbar, inline actions):
   *   primary → secondary → tertiary  (primary is leftmost / most prominent)
   *
   * The group itself is layout-neutral — use className or a parent flex
   * container with justify-end / justify-start to control alignment.
   */
  children: ReactNode
  className?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ButtonGroup({ children, className = '' }: ButtonGroupProps) {
  return (
    <div
      className={`flex items-center gap-(--inline-2) ${className}`}
    >
      {children}
    </div>
  )
}

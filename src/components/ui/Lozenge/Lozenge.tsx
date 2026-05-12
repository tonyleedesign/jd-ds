// ─── Types ────────────────────────────────────────────────────────────────────

export type LozengeVariant = 'light' | 'dark'

export interface LozengeProps {
  count?: number
  variant?: LozengeVariant
  className?: string
}

// ─── Variant classes ──────────────────────────────────────────────────────────

const VARIANT_CLASSES: Record<LozengeVariant, string> = {
  light: 'bg-(--bg-surface-muted) text-(--text-surface-subtle)',
  dark:  'bg-(--bg-surface-inverse) text-(--text-surface-inverse)',
}

// ─── Component ────────────────────────────────────────────────────────────────

export function Lozenge({ count = 0, variant = 'light', className = '' }: LozengeProps) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-(--radius-full) px-(--inset-2) py-(--space-2) ${VARIANT_CLASSES[variant]} ${className}`}
      style={{
        fontSize:   'var(--label-md-size)',
        lineHeight: 'var(--label-md-line-height)',
        fontWeight: 'var(--label-md-weight)',
      }}
    >
      {count}
    </span>
  )
}

import { Text } from '../Text'

// ─── Types ────────────────────────────────────────────────────────────────────

export type TagVariant =
  | 'info'
  | 'info-high-contrast'
  | 'success'
  | 'warning'
  | 'error'
  | 'system'
  | 'system-alt'

export interface TagProps {
  /** Visual style — defaults to "info" */
  variant?: TagVariant
  children: string
  className?: string
}

// ─── Variant styles ───────────────────────────────────────────────────────────

type VariantStyle = {
  /** Tailwind colour classes */
  className: string
  /** Optional border — only info variant has one */
  border?: string
}

const VARIANT_STYLES: Record<TagVariant, VariantStyle> = {
  'info': {
    className: 'bg-(--bg-surface-subtle) text-(--text-surface-subtle)',
    border:    '1px solid var(--border-surface-base)',
  },
  'info-high-contrast': {
    className: 'bg-(--bg-surface-accent-secondary) text-(--text-surface-inverse)',
  },
  'success': {
    className: 'bg-(--bg-feedback-success-base) text-(--text-feedback-success-inverse)',
  },
  'warning': {
    className: 'bg-(--bg-feedback-warning-base) text-(--text-feedback-warning-strong)',
  },
  'error': {
    className: 'bg-(--bg-feedback-error-base) text-(--text-feedback-error-inverse)',
  },
  'system': {
    className: 'bg-(--bg-feedback-informational-base) text-(--text-feedback-informational-inverse)',
  },
  'system-alt': {
    className: 'bg-(--bg-surface-accent-primary) text-(--text-surface-inverse)',
  },
}

// ─── Component ────────────────────────────────────────────────────────────────

export function Tag({ variant = 'info', children, className = '' }: TagProps) {
  const { className: variantClass, border } = VARIANT_STYLES[variant]

  return (
    <Text
      as="span"
      variant="tag-label"
      className={`inline-flex items-center rounded-(--radius-sm) py-(--inset-1) px-(--inset-3) ${variantClass} ${className}`}
      style={border ? { border } : undefined}
    >
      {children}
    </Text>
  )
}

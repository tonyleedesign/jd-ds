import { Icon } from '../Icon'
import { XCloseIcon } from '../Icon'
import { Text } from '../Text'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BadgeProps {
  /** Badge text */
  children: string
  /**
   * When provided, renders an × dismiss button to the right of the text.
   * Called when the user clicks the dismiss button.
   */
  onClose?: () => void
  className?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export function Badge({ children, onClose, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-(--inline-1) rounded-(--radius-sm) py-(--inset-2) px-(--inset-3) bg-(--bg-surface-subtle) ${className}`}
      style={{ border: '1px solid var(--border-surface-base)' }}
    >
      <Text as="span" variant="tag-label" className="text-(--text-surface-subtle)">
        {children}
      </Text>

      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Remove"
          className="inline-flex items-center justify-center cursor-pointer border-0 bg-transparent p-0 shrink-0"
        >
          <Icon icon={XCloseIcon} size="small" className="text-(--icon-action-dismiss-idle)" />
        </button>
      )}
    </span>
  )
}

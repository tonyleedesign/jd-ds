import type { ComponentType, SVGProps } from 'react'
import { Icon, LinkOutIcon } from '../Icon'
import { Text } from '../Text'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface MetaItemProps {
  /** Optional icon rendered to the left of the label */
  icon?: ComponentType<SVGProps<SVGSVGElement>>
  /** Bold label text — colon is added automatically */
  label: string
  /** Regular value text */
  value: string
  /**
   * When provided, renders the value as a clickable underlined link with a
   * LinkOut icon. Leave routing/navigation to the consumer.
   */
  onClick?: () => void
  className?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export function MetaItem({ icon, label, value, onClick, className = '' }: MetaItemProps) {
  return (
    <div className={`inline-flex items-center gap-(--inline-1) ${className}`}>
      {icon && (
        <Icon icon={icon} size="small" className="text-(--icon-surface-base) shrink-0" />
      )}
      <Text variant="body-md" weight="semibold" className="text-(--text-surface-base)">
        {label}:
      </Text>
      {onClick ? (
        <button
          type="button"
          onClick={onClick}
          className="inline-flex items-center gap-(--inline-1) cursor-pointer bg-transparent p-0"
          style={{ border: 'none' }}
        >
          <Text variant="body-md" className="text-(--text-action-hyperlink) underline">
            {value}
          </Text>
          <Icon icon={LinkOutIcon} size="small" className="text-(--icon-action-hyperlink) shrink-0" />
        </button>
      ) : (
        <Text variant="body-md" className="text-(--text-surface-base)">
          {value}
        </Text>
      )}
    </div>
  )
}

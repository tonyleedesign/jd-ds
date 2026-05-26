import type { ComponentType, SVGProps } from 'react'
import { Icon } from '../Icon'
import { Text } from '../Text'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface MetaItemProps {
  /** Optional icon rendered to the left of the label */
  icon?: ComponentType<SVGProps<SVGSVGElement>>
  /** Bold label text — colon is added automatically */
  label: string
  /** Regular value text */
  value: string
  className?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export function MetaItem({ icon, label, value, className = '' }: MetaItemProps) {
  return (
    <div className={`inline-flex items-center gap-(--inline-1) ${className}`}>
      {icon && (
        <Icon icon={icon} size="small" className="text-(--icon-surface-base) shrink-0" />
      )}
      <Text variant="body-md" weight="semibold" className="text-(--text-surface-base)">
        {label}:
      </Text>
      <Text variant="body-md" className="text-(--text-surface-base)">
        {value}
      </Text>
    </div>
  )
}

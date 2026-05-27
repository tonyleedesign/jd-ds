import { Fragment } from 'react'
import { Button } from '../Button'
import { Icon, ChevronRightIcon } from '../Icon'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Step {
  /** Step label rendered inside the button */
  label: string
  /**
   * Whether this step is active (current or already visited).
   * Active steps are clickable. Inactive steps are dimmed and non-interactive.
   * Defaults to false.
   */
  active?: boolean
  /** Called when an active step is clicked — wire up navigation here */
  onClick?: () => void
}

export interface StepsProps {
  steps: Step[]
  className?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export function Steps({ steps, className = '' }: StepsProps) {
  return (
    <div
      className={`flex items-center gap-(--inline-2) px-(--inset-7) py-(--inset-3) bg-(--bg-surface-subtle) ${className}`}
    >
      {steps.map((step, index) => (
        <Fragment key={step.label}>

          {index > 0 && (
            <Icon
              icon={ChevronRightIcon}
              size="small"
              className="text-(--icon-surface-base) shrink-0"
            />
          )}

          {step.active ? (
            <Button variant="tertiary" onClick={step.onClick}>
              {step.label}
            </Button>
          ) : (
            <div className="opacity-30 pointer-events-none">
              <Button variant="tertiary">{step.label}</Button>
            </div>
          )}

        </Fragment>
      ))}
    </div>
  )
}

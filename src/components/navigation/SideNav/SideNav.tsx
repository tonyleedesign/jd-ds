import type { ReactNode } from 'react'
import { Button } from '../../ui/Button'
import { Icon } from '../../ui/Icon'
import { MenuBarsIcon } from '../../ui/Icon/icons/menu-bars'
import { XCloseIcon } from '../../ui/Icon/icons/x-close'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SideNavProps {
  /** Whether the nav is expanded or collapsed */
  isOpen: boolean
  /** Called when the toggle icon is clicked — owner manages state */
  onToggle: () => void
  /** Nav items — rendered when expanded */
  children?: ReactNode
  className?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export function SideNav({ isOpen, onToggle, children, className = '' }: SideNavProps) {
  return (
    <aside
      className={`flex flex-col shrink-0 h-full bg-(--bg-surface-base) ${className}`}
      style={{
        width:       isOpen ? 'var(--sidenav-width-expanded)' : undefined,
        borderRight: 'var(--space-1) solid var(--border-surface-base)',
        transition:  'width 0.2s ease',
      }}
    >
      {isOpen ? (
        // ── Expanded ──────────────────────────────────────────────────────────
        <>
          {/* X close — fixed at top, never scrolls */}
          <div className="flex justify-end shrink-0 px-(--inset-7) pt-(--inset-7)">
            <Button
              variant="tertiary"
              iconOnly
              onClick={onToggle}
              aria-label="Close navigation"
            >
              <Icon icon={XCloseIcon} size="regular" />
            </Button>
          </div>

          {/* Nav items — scrollable */}
          {children && (
            <div className="flex flex-col overflow-y-auto px-(--inset-7) pb-(--inset-7)">
              {children}
            </div>
          )}
        </>
      ) : (
        // ── Collapsed ─────────────────────────────────────────────────────────
        <div className="flex justify-center pt-(--inset-7) px-(--inset-3)">
          <Button
            variant="tertiary"
            iconOnly
            onClick={onToggle}
            aria-label="Open navigation"
          >
            <Icon
              icon={MenuBarsIcon}
              size="regular"
              className="text-(--icon-action-secondary-idle)"
            />
          </Button>
        </div>
      )}
    </aside>
  )
}

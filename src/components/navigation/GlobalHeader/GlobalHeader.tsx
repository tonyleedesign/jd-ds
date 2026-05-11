import type { ReactNode } from 'react'
import { Button } from '../../ui/Button'
import { Icon } from '../../ui/Icon'
import { MenuGridIcon } from '../../ui/Icon/icons/menu-grid'
import { MenuBarsIcon } from '../../ui/Icon/icons/menu-bars'
import { BellIcon } from '../../ui/Icon/icons/bell'
import { ChevronDownIcon } from '../../ui/Icon/icons/chevron-down'
import { MessageDotsIcon } from '../../ui/Icon/icons/message-dots'
import { SettingsIcon } from '../../ui/Icon/icons/settings'
import { judiLogoSrc } from '../../ui/Icon/icons/judi-logo'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface GlobalHeaderProps {
  /** Which header layout to render — defaults to "minerva" */
  variant?: 'minerva' | 'evolution'

  // ── Shared ──────────────────────────────────────────────────────────────────
  /** Full logo shown on sm+ screens — defaults to the Judi logo */
  logoSrc?: string
  /** Icon-only logo shown on mobile */
  logoIconSrc?: string
  /** Alt text for the logo — defaults to "Judi" */
  logoAlt?: string
  /** Where the logo links — defaults to "/" */
  logoHref?: string
  /** Module or app name */
  appName?: string
  /** Called when the menu icon is clicked */
  onMenuClick?: () => void
  /** Called when the bell notification icon is clicked */
  onNotificationsClick?: () => void
  /** Optional content rendered before the bell icon — available in both variants */
  headerActions?: ReactNode

  // ── Minerva only ────────────────────────────────────────────────────────────
  /** Called when the account button is clicked (Minerva only) */
  onAccountClick?: () => void
  /** Label for the account button (Minerva only) — defaults to "Account" */
  accountLabel?: string

  // ── Evolution only ──────────────────────────────────────────────────────────
  /** Called when the AI assistant icon is clicked (Evolution only) */
  onAiClick?: () => void
  /** Called when the keyboard shortcuts icon is clicked (Evolution only) */
  onKeyboardClick?: () => void

  className?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export function GlobalHeader({
  variant          = 'minerva',
  logoSrc          = judiLogoSrc,
  logoIconSrc,
  logoAlt          = 'Judi',
  logoHref         = '/',
  appName,
  onMenuClick,
  onNotificationsClick,
  headerActions,
  onAccountClick,
  accountLabel     = 'Account',
  onAiClick,
  onKeyboardClick,
  className        = '',
}: GlobalHeaderProps) {

  const logo = (
    <a href={logoHref} className="flex items-center h-(--space-24)">
      <img
        src={logoSrc}
        alt={logoAlt}
        className={`h-full w-auto ${logoIconSrc ? 'hidden sm:block' : ''}`}
      />
      {logoIconSrc && (
        <img
          src={logoIconSrc}
          alt={logoAlt}
          className="h-full w-auto block sm:hidden"
        />
      )}
    </a>
  )

  return (
    <header
      className={`flex items-center px-(--inset-6) py-(--inset-4) ${className}`}
      style={{
        background:   'var(--bg-navigation-bar)',
        borderBottom: 'var(--space-1) solid var(--border-surface-base)',
      }}
    >
      {variant === 'evolution' ? (

        // ── Evolution — [menu+name] [logo] [actions+bell+ai+settings] ──────────
        <>
          <div className="flex flex-1 items-center gap-(--inline-3)">
            <Button variant="inverse" iconOnly onClick={onMenuClick} aria-label="Open menu">
              <Icon icon={MenuBarsIcon} size="regular" />
            </Button>
            {appName && (
              <span
                className="text-(--text-surface-inverse)"
                style={{
                  fontSize:   'var(--global-header-module-title-size)',
                  lineHeight: 'var(--global-header-module-title-line-height)',
                  fontWeight: 'var(--global-header-module-title-weight)',
                }}
              >
                {appName}
              </span>
            )}
          </div>

          {logo}

          <div className="flex flex-1 items-center justify-end gap-(--inline-3)">
            {headerActions}
            <Button variant="inverse" iconOnly onClick={onNotificationsClick} aria-label="Notifications">
              <Icon icon={BellIcon} size="regular" />
            </Button>
            <Button variant="inverse" iconOnly onClick={onAiClick} aria-label="AI assistant">
              <Icon icon={MessageDotsIcon} size="regular" />
            </Button>
            <Button variant="inverse" iconOnly onClick={onKeyboardClick} aria-label="Keyboard shortcuts">
              <Icon icon={SettingsIcon} size="regular" />
            </Button>
          </div>
        </>

      ) : (

        // ── Minerva — [menu+logo+name] [actions+bell+account] ─────────────────
        <>
          <div className="flex flex-1 items-center gap-(--inline-4)">
            <Button variant="inverse" iconOnly onClick={onMenuClick} aria-label="Open menu">
              <Icon icon={MenuGridIcon} size="regular" />
            </Button>
            {logo}
            {appName && (
              <span
                className="text-(--text-surface-inverse)"
                style={{
                  fontSize:   'var(--global-header-module-title-size)',
                  lineHeight: 'var(--global-header-module-title-line-height)',
                  fontWeight: 'var(--global-header-module-title-weight)',
                }}
              >
                {appName}
              </span>
            )}
          </div>

          <div className="flex items-center gap-(--inline-4)">
            {headerActions}
            <Button variant="inverse" iconOnly onClick={onNotificationsClick} aria-label="Notifications">
              <Icon icon={BellIcon} size="regular" />
            </Button>
            <Button variant="inverse" rightIcon={ChevronDownIcon} onClick={onAccountClick}>
              {accountLabel}
            </Button>
          </div>
        </>

      )}
    </header>
  )
}

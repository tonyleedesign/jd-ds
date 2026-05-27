import { minerva, evolution, global } from '../primitive/colors.js'

function alpha(hex: string, opacity: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`
}

const minervaTokens = {

  // ─── Background — Action ──────────────────────────────────────────────────
  'bg-action-primary-idle':                    minerva['turquoise']['500'],
  'bg-action-primary-hover':                   minerva['turquoise']['lighten-4'],
  'bg-action-primary-pressed':                 minerva['turquoise']['darken-6'],

  'bg-action-primary-critical-idle':           minerva['red']['600'],
  'bg-action-primary-critical-hover':          minerva['red']['lighten-4'],
  'bg-action-primary-critical-pressed':        minerva['red']['darken-6'],

  'bg-action-secondary-idle':                  'transparent',
  'bg-action-secondary-hover':                 alpha(minerva['turquoise']['500'], 10),
  'bg-action-secondary-pressed':               'transparent',

  'bg-action-secondary-critical-idle':         'transparent',
  'bg-action-secondary-critical-hover':        alpha(minerva['red']['600'], 10),
  'bg-action-secondary-critical-pressed':      'transparent',

  'bg-action-inverse-idle':                    'transparent',
  'bg-action-inverse-hover':                   alpha(global['white'], 15),
  'bg-action-inverse-pressed':                 alpha(global['white'], 25),

  'bg-action-neutral-idle':                    global['white'],
  'bg-action-neutral-hover':                   minerva['neutral']['100'],
  'bg-action-neutral-press':                   minerva['neutral']['200'],
  'bg-action-neutral-active':                  minerva['neutral']['050'],
  'bg-action-neutral-disabled':                minerva['neutral']['200'],

  // ─── Background — Control ─────────────────────────────────────────────────
  'bg-control-default-idle':                   global['white'],
  'bg-control-default-hover':                  global['white'],
  'bg-control-default-focus':                  global['white'],
  'bg-control-default-readonly':               minerva['neutral']['100'],
  'bg-control-default-disabled':               minerva['neutral']['200'],
  'bg-control-default-invalid':                global['white'],
  'bg-control-default-dragging':               global['white'],

  'bg-control-selected-idle':                  minerva['turquoise']['500'],
  'bg-control-selected-hover':                 minerva['turquoise']['400'],
  'bg-control-selected-readonly':              minerva['neutral']['100'],

  'bg-control-subtle-idle':                    global['white'],
  'bg-control-subtle-hover':                   minerva['turquoise']['050'],

  'bg-control-subtle-destructive-idle':        global['white'],
  'bg-control-subtle-destructive-hover':       minerva['red']['050'],

  'bg-control-inverse-idle':                   minerva['neutral']['800'],
  'bg-control-inverse-hover':                  minerva['neutral']['900'],
  'bg-control-inverse-focus':                  minerva['neutral']['900'],
  'bg-control-inverse-invalid':                minerva['neutral']['800'],

  // ─── Background — Feedback ────────────────────────────────────────────────
  'bg-feedback-success-base':                  minerva['green']['700'],
  'bg-feedback-success-muted':                 alpha(minerva['green']['600'], 85),
  'bg-feedback-success-inverse':               minerva['green']['050'],

  'bg-feedback-warning-base':                  minerva['yellow']['400'],
  'bg-feedback-warning-muted':                 alpha(minerva['orange']['600'], 85),
  'bg-feedback-warning-inverse':               minerva['yellow']['050'],

  'bg-feedback-error-base':                    minerva['red']['600'],
  'bg-feedback-error-muted':                   alpha(minerva['red']['600'], 85),
  'bg-feedback-error-inverse':                 minerva['red']['050'],

  'bg-feedback-informational-base':            minerva['turquoise']['600'],
  'bg-feedback-informational-muted':           alpha(minerva['turquoise']['600'], 85),
  'bg-feedback-informational-inverse':         minerva['turquoise']['050'],

  // ─── Background — Navigation ──────────────────────────────────────────────
  'bg-navigation-bar':                         'linear-gradient(to right, #254591 0%, #0059B3 100%)',

  'bg-navigation-item-secondary-idle':         global['white'],
  'bg-navigation-item-secondary-hover':        minerva['turquoise']['050'],
  'bg-navigation-item-secondary-active':       global['white'],

  'bg-navigation-item-primary-idle':           global['white'],
  'bg-navigation-item-primary-hover':          minerva['neutral']['050'],
  'bg-navigation-item-primary-active':         minerva['turquoise']['050'],

  // ─── Background — Surface ─────────────────────────────────────────────────
  'bg-surface-base':                           global['white'],
  'bg-surface-subtle':                         minerva['neutral']['050'],
  'bg-surface-muted':                          minerva['neutral']['100'],
  'bg-surface-inverse':                        minerva['neutral']['800'],

  'bg-surface-accent-primary':                 minerva['purple']['600'],
  'bg-surface-accent-secondary':               minerva['neutral']['700'],
  'bg-surface-accent-tertiary':                minerva['neutral']['300'],
  'bg-surface-brand':                          minerva['turquoise']['700'],

  // ─── Border — Action ──────────────────────────────────────────────────────
  'border-action-secondary-idle':              minerva['turquoise']['500'],
  'border-action-secondary-hover':             minerva['turquoise']['lighten-6'],
  'border-action-secondary-pressed':           minerva['turquoise']['darken-6'],

  'border-action-secondary-critical-idle':     minerva['red']['600'],
  'border-action-secondary-critical-hover':    minerva['red']['lighten-6'],
  'border-action-secondary-critical-pressed':  minerva['red']['darken-6'],

  // ─── Border — Control ─────────────────────────────────────────────────────
  'border-control-default-idle':               minerva['neutral']['300'],
  'border-control-default-hover':              minerva['neutral']['700'],
  'border-control-default-focus':              minerva['turquoise']['400'],
  'border-control-default-dragging':           minerva['turquoise']['300'],
  'border-control-default-readonly':           minerva['neutral']['200'],

  'border-control-default-critical-idle':      minerva['red']['600'],

  'border-control-subtle-idle':                minerva['neutral']['300'],
  'border-control-subtle-hover':               minerva['turquoise']['500'],

  // ─── Border — Navigation ──────────────────────────────────────────────────
  'border-navigation-primary-active':          minerva['turquoise']['darken-6'],

  // ─── Border — Surface ─────────────────────────────────────────────────────
  'border-surface-base':                       minerva['neutral']['200'],
  'border-surface-subtle':                     minerva['neutral']['050'],
  'border-surface-inverse':                    minerva['neutral']['300'],

  // ─── Border — Feedback ────────────────────────────────────────────────────
  'border-feedback-success-muted':             minerva['green']['200'],
  'border-feedback-error-base':                minerva['red']['600'],
  'border-feedback-error-muted':               minerva['red']['200'],
  'border-feedback-warning-muted':             minerva['yellow']['300'],
  'border-feedback-informational-muted':       minerva['turquoise']['200'],

  // ─── Text — Action ────────────────────────────────────────────────────────
  'text-action-hyperlink':                     minerva['turquoise']['500'],

  'text-action-base-idle':                     minerva['neutral']['800'],
  'text-action-base-hover':                    minerva['turquoise']['lighten-4'],
  'text-action-base-disabled':                 minerva['neutral']['500'],

  'text-action-primary-idle':                  global['white'],
  'text-action-primary-hover':                 global['white'],
  'text-action-primary-pressed':               global['white'],

  'text-action-primary-critical-idle':         global['white'],
  'text-action-primary-critical-hover':        global['white'],
  'text-action-primary-critical-pressed':      global['white'],

  'text-action-inverse-idle':                  global['white'],
  'text-action-inverse-hover':                 global['white'],
  'text-action-inverse-pressed':               global['white'],

  'text-action-secondary-idle':                minerva['turquoise']['500'],
  'text-action-secondary-hover':               minerva['turquoise']['lighten-6'],
  'text-action-secondary-pressed':             minerva['turquoise']['darken-6'],

  'text-action-secondary-critical-idle':       minerva['red']['600'],
  'text-action-secondary-critical-hover':      minerva['red']['lighten-6'],
  'text-action-secondary-critical-pressed':    minerva['red']['darken-6'],

  // ─── Text — Control ───────────────────────────────────────────────────────
  'text-control-affix':                        minerva['neutral']['500'],
  'text-control-instructions':                 minerva['neutral']['700'],
  'text-control-placeholder':                  minerva['neutral']['400'],
  'text-control-value':                        minerva['neutral']['800'],

  'text-control-label-idle':                   minerva['neutral']['800'],
  'text-control-label-disabled':               minerva['neutral']['500'],

  'text-control-destructive-idle':             minerva['red']['600'],
  'text-control-destructive-hover':            minerva['red']['lighten-4'],

  'text-control-subtle-idle':                  minerva['neutral']['800'],
  'text-control-subtle-hover':                 minerva['turquoise']['600'],

  // ─── Text — Feedback ──────────────────────────────────────────────────────
  'text-feedback-success-base':                minerva['green']['600'],
  'text-feedback-success-inverse':             global['white'],

  'text-feedback-error-base':                  minerva['red']['600'],
  'text-feedback-error-inverse':               global['white'],

  'text-feedback-warning-base':                minerva['yellow']['700'],
  'text-feedback-warning-inverse':             global['white'],
  'text-feedback-warning-strong':              minerva['neutral']['800'],

  'text-feedback-informational-base':          minerva['turquoise']['500'],
  'text-feedback-informational-inverse':       global['white'],

  // ─── Text — Navigation ────────────────────────────────────────────────────
  'text-navigation-link':                      minerva['neutral']['600'],

  'text-navigation-item-primary-idle':         minerva['neutral']['600'],
  'text-navigation-item-primary-hover':        minerva['turquoise']['600'],
  'text-navigation-item-primary-active':       minerva['turquoise']['500'],

  'text-navigation-item-secondary-idle':       minerva['neutral']['800'],

  // ─── Text — Surface ───────────────────────────────────────────────────────
  'text-surface-base':                         minerva['neutral']['800'],
  'text-surface-subtle':                       minerva['neutral']['700'],
  'text-surface-inverse':                      global['white'],

  // ─── Icon — Action ────────────────────────────────────────────────────────
  'icon-action-hyperlink':                     minerva['turquoise']['500'],

  'icon-action-base-idle':                     minerva['neutral']['800'],
  'icon-action-base-hover':                    minerva['turquoise']['lighten-4'],
  'icon-action-base-disabled':                 minerva['neutral']['500'],

  'icon-action-dismiss-idle':                  minerva['neutral']['800'],
  'icon-action-dismiss-hover':                 minerva['neutral']['600'],
  'icon-action-dismiss-pressed':               minerva['neutral']['900'],

  'icon-action-dismiss-inverse-idle':          global['white'],
  'icon-action-dismiss-inverse-hover':         global['white'],
  'icon-action-dismiss-inverse-pressed':       global['white'],

  'icon-action-primary-idle':                  global['white'],
  'icon-action-primary-hover':                 global['white'],
  'icon-action-primary-pressed':               global['white'],

  'icon-action-primary-critical-idle':         global['white'],
  'icon-action-primary-critical-hover':        global['white'],
  'icon-action-primary-critical-pressed':      global['white'],

  'icon-action-inverse-idle':                  global['white'],
  'icon-action-inverse-hover':                 global['white'],
  'icon-action-inverse-pressed':               global['white'],

  'icon-action-secondary-idle':                minerva['turquoise']['500'],
  'icon-action-secondary-hover':               minerva['turquoise']['lighten-6'],
  'icon-action-secondary-pressed':             minerva['turquoise']['darken-6'],

  'icon-action-secondary-critical-idle':       minerva['red']['600'],
  'icon-action-secondary-critical-hover':      minerva['red']['lighten-6'],
  'icon-action-secondary-critical-pressed':    minerva['red']['darken-6'],

  'icon-action-neutral-idle':                  minerva['neutral']['800'],
  'icon-action-neutral-hover':                 minerva['neutral']['800'],
  'icon-action-neutral-press':                 minerva['neutral']['800'],
  'icon-action-neutral-active':                minerva['neutral']['800'],
  'icon-action-neutral-disabled':              minerva['neutral']['500'],

  // ─── Icon — Control ───────────────────────────────────────────────────────
  'icon-control-default':                      minerva['neutral']['500'],
  'icon-control-strong':                       minerva['neutral']['800'],

  'icon-control-selected-idle':                global['white'],
  'icon-control-selected-hover':               global['white'],
  'icon-control-selected-readonly':            minerva['neutral']['700'],

  // ─── Icon — Feedback ──────────────────────────────────────────────────────
  'icon-feedback-success-base':                minerva['green']['600'],
  'icon-feedback-success-inverse':             global['white'],

  'icon-feedback-error-base':                  minerva['red']['600'],
  'icon-feedback-error-inverse':               global['white'],

  'icon-feedback-warning-base':                minerva['yellow']['700'],
  'icon-feedback-warning-inverse':             global['white'],

  'icon-feedback-informational-base':          minerva['turquoise']['500'],
  'icon-feedback-informational-inverse':       global['white'],

  // ─── Icon — Surface ───────────────────────────────────────────────────────
  'icon-surface-base':                         minerva['neutral']['800'],
  'icon-surface-strong':                       minerva['neutral']['900'],
  'icon-surface-subtle':                       minerva['neutral']['400'],

  // ─── Utility ──────────────────────────────────────────────────────────────
  'utility-placeholder-bg':                    minerva['purple']['100'],
  'utility-placeholder-border':               minerva['purple']['500'],
  'utility-placeholder-text':                  minerva['purple']['500'],

  // ─── Gradients (minerva only — evolution TBD) ────────────────────────────
  'gradient-050': 'linear-gradient(to right, #254591 0%, #0059B3 100%)',
  'gradient-100': 'linear-gradient(to right, #5E6EB4 0%, #0059B3 100%)',
  'gradient-200': 'linear-gradient(to right, #1C4587 25%, #0076B9 100%)',

  // ─── Shadows ──────────────────────────────────────────────────────────────
  'shadow-input-engaged':      `0 0 4px 0 ${alpha(minerva['turquoise']['400'], 65)}`,
  'shadow-table-outer-right':  '4px 0 8px 0 rgba(0,0,0,0.16)',
  'shadow-table-outer-left':   '-4px 0 8px 0 rgba(0,0,0,0.16)',
  'shadow-table-inner-right':  'inset -4px 0 4px 0 rgba(0,0,0,0.16)',
  'shadow-table-inner-left':   'inset 4px 0 4px 0 rgba(0,0,0,0.16)',
  'shadow-surface-sm':         '0 0 4px 0 rgba(0,0,0,0.08)',
  'shadow-surface-md':         '0 4px 16px 0 rgba(0,0,0,0.16)',
  'shadow-surface-lg':         '0 8px 16px 0 rgba(0,0,0,0.16)',
}

const evolutionTokens = {
  ...minervaTokens,

  // ─── Background — Action ──────────────────────────────────────────────────
  'bg-action-primary-idle':                    evolution['turquoise']['500'],
  'bg-action-primary-hover':                   evolution['turquoise']['lighten-4'],
  'bg-action-primary-pressed':                 evolution['turquoise']['darken-6'],

  'bg-action-primary-critical-idle':           evolution['red']['600'],
  'bg-action-primary-critical-hover':          evolution['red']['lighten-4'],
  'bg-action-primary-critical-pressed':        evolution['red']['darken-6'],

  'bg-action-secondary-hover':                 alpha(evolution['turquoise']['500'], 10),
  'bg-action-secondary-critical-hover':        alpha(evolution['red']['600'], 10),

  'bg-action-neutral-hover':                   evolution['neutral']['100'],
  'bg-action-neutral-press':                   evolution['neutral']['200'],
  'bg-action-neutral-active':                  evolution['neutral']['050'],
  'bg-action-neutral-disabled':                evolution['neutral']['200'],

  // ─── Background — Control ─────────────────────────────────────────────────
  'bg-control-default-readonly':               evolution['neutral']['100'],
  'bg-control-default-disabled':               evolution['neutral']['200'],

  'bg-control-selected-idle':                  evolution['turquoise']['500'],
  'bg-control-selected-hover':                 evolution['turquoise']['400'],
  'bg-control-selected-readonly':              evolution['neutral']['100'],

  'bg-control-subtle-hover':                   evolution['turquoise']['050'],
  'bg-control-subtle-destructive-hover':       evolution['red']['050'],

  'bg-control-inverse-idle':                   evolution['neutral']['800'],
  'bg-control-inverse-hover':                  evolution['neutral']['900'],
  'bg-control-inverse-focus':                  evolution['neutral']['900'],
  'bg-control-inverse-invalid':                evolution['neutral']['800'],

  // ─── Background — Feedback ────────────────────────────────────────────────
  'bg-feedback-success-base':                  evolution['green']['700'],
  'bg-feedback-success-muted':                 alpha(evolution['green']['600'], 85),
  'bg-feedback-success-inverse':               evolution['green']['050'],

  'bg-feedback-warning-muted':                 alpha(evolution['orange']['600'], 85),
  'bg-feedback-error-base':                    evolution['red']['600'],
  'bg-feedback-error-muted':                   alpha(evolution['red']['600'], 85),
  'bg-feedback-error-inverse':                 evolution['red']['050'],

  'bg-feedback-informational-base':            evolution['turquoise']['600'],
  'bg-feedback-informational-muted':           alpha(evolution['turquoise']['600'], 85),
  'bg-feedback-informational-inverse':         evolution['turquoise']['050'],

  // ─── Background — Navigation ──────────────────────────────────────────────
  'bg-navigation-bar':                         `linear-gradient(to right, ${evolution['branding']['gradient-start']} 0%, ${evolution['branding']['gradient-end']} 100%)`,

  'bg-navigation-item-secondary-hover':        evolution['turquoise']['050'],
  'bg-navigation-item-primary-hover':          evolution['neutral']['050'],
  'bg-navigation-item-primary-active':         evolution['turquoise']['050'],

  // ─── Background — Surface ─────────────────────────────────────────────────
  'bg-surface-subtle':                         evolution['neutral']['050'],
  'bg-surface-muted':                          evolution['neutral']['100'],
  'bg-surface-inverse':                        evolution['neutral']['800'],

  'bg-surface-accent-primary':                 evolution['purple']['600'],
  'bg-surface-accent-secondary':               evolution['neutral']['700'],
  'bg-surface-accent-tertiary':                evolution['neutral']['300'],
  'bg-surface-brand':                          evolution['turquoise']['700'],

  // ─── Border — Action ──────────────────────────────────────────────────────
  'border-action-secondary-idle':              evolution['turquoise']['500'],
  'border-action-secondary-hover':             evolution['turquoise']['lighten-6'],
  'border-action-secondary-pressed':           evolution['turquoise']['darken-6'],

  'border-action-secondary-critical-idle':     evolution['red']['600'],
  'border-action-secondary-critical-hover':    evolution['red']['lighten-6'],
  'border-action-secondary-critical-pressed':  evolution['red']['darken-6'],

  // ─── Border — Control ─────────────────────────────────────────────────────
  'border-control-default-idle':               evolution['neutral']['300'],
  'border-control-default-hover':              evolution['neutral']['700'],
  'border-control-default-focus':              evolution['turquoise']['400'],
  'border-control-default-dragging':           evolution['turquoise']['300'],
  'border-control-default-readonly':           evolution['neutral']['200'],
  'border-control-default-critical-idle':      evolution['red']['600'],
  'border-control-subtle-hover':               evolution['turquoise']['500'],

  // ─── Border — Navigation ──────────────────────────────────────────────────
  'border-navigation-primary-active':          evolution['turquoise']['darken-6'],

  // ─── Border — Surface ─────────────────────────────────────────────────────
  'border-surface-base':                       evolution['neutral']['200'],
  'border-surface-subtle':                     evolution['neutral']['050'],
  'border-surface-inverse':                    evolution['neutral']['300'],

  // ─── Border — Feedback ────────────────────────────────────────────────────
  'border-feedback-success-muted':             evolution['green']['200'],
  'border-feedback-error-base':                evolution['red']['600'],
  'border-feedback-error-muted':               evolution['red']['200'],
  'border-feedback-warning-muted':             evolution['yellow']['300'],
  'border-feedback-informational-muted':       evolution['turquoise']['200'],

  // ─── Text — Action ────────────────────────────────────────────────────────
  'text-action-hyperlink':                     evolution['turquoise']['500'],
  'text-action-base-hover':                    evolution['turquoise']['lighten-4'],

  'text-action-secondary-idle':                evolution['turquoise']['500'],
  'text-action-secondary-hover':               evolution['turquoise']['lighten-6'],
  'text-action-secondary-pressed':             evolution['turquoise']['darken-6'],

  'text-action-secondary-critical-idle':       evolution['red']['600'],
  'text-action-secondary-critical-hover':      evolution['red']['lighten-6'],
  'text-action-secondary-critical-pressed':    evolution['red']['darken-6'],

  // ─── Text — Control ───────────────────────────────────────────────────────
  'text-control-destructive-idle':             evolution['red']['600'],
  'text-control-destructive-hover':            evolution['red']['lighten-4'],
  'text-control-subtle-hover':                 evolution['turquoise']['600'],

  // ─── Text — Feedback ──────────────────────────────────────────────────────
  'text-feedback-success-base':                evolution['green']['600'],
  'text-feedback-error-base':                  evolution['red']['600'],
  'text-feedback-informational-base':          evolution['turquoise']['500'],

  // ─── Text — Navigation ────────────────────────────────────────────────────
  'text-navigation-item-primary-hover':        evolution['turquoise']['600'],
  'text-navigation-item-primary-active':       evolution['turquoise']['500'],

  // ─── Icon — Action ────────────────────────────────────────────────────────
  'icon-action-hyperlink':                     evolution['turquoise']['500'],
  'icon-action-base-hover':                    evolution['turquoise']['lighten-4'],

  'icon-action-secondary-idle':                evolution['turquoise']['500'],
  'icon-action-secondary-hover':               evolution['turquoise']['lighten-6'],
  'icon-action-secondary-pressed':             evolution['turquoise']['darken-6'],

  'icon-action-secondary-critical-idle':       evolution['red']['600'],
  'icon-action-secondary-critical-hover':      evolution['red']['lighten-6'],
  'icon-action-secondary-critical-pressed':    evolution['red']['darken-6'],

  // ─── Icon — Feedback ──────────────────────────────────────────────────────
  'icon-feedback-success-base':                evolution['green']['600'],
  'icon-feedback-error-base':                  evolution['red']['600'],
  'icon-feedback-informational-base':          evolution['turquoise']['500'],

  // ─── Shadows (theme-aware) ────────────────────────────────────────────────
  'shadow-input-engaged': `0 0 4px 0 ${alpha(evolution['turquoise']['400'], 65)}`,
}

export const themes = {
  minerva:   minervaTokens,
  evolution: evolutionTokens,
}

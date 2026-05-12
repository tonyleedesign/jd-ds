import { Icon } from '../../ui/Icon'
import { ChevronRightIcon } from '../../ui/Icon'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const LABEL_STYLE = {
  fontSize:   'var(--breadcrumb-label-size)',
  lineHeight: 'var(--breadcrumb-label-line-height)',
  fontWeight: 'var(--breadcrumb-label-weight)',
}

// ─── Component ────────────────────────────────────────────────────────────────

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center gap-(--inline-2)">
        {items.map((item, i) => {
          const isLast = i === items.length - 1

          return (
            <li key={i} className="flex items-center gap-(--inline-2)">

              {/* Chevron separator — not before the first item */}
              {i > 0 && (
                <Icon
                  icon={ChevronRightIcon}
                  size="small"
                  className="text-(--text-navigation-link) shrink-0"
                />
              )}

              {isLast ? (
                // Current page — no hover, no link
                <span
                  aria-current="page"
                  className="text-(--text-navigation-link) cursor-default"
                  style={LABEL_STYLE}
                >
                  {item.label}
                </span>
              ) : (
                // Ancestor — hoverable with underline, focus ring for keyboard nav
                <a
                  href={item.href ?? '/'}
                  className="text-(--text-navigation-link) no-underline hover:underline focus-visible:underline outline-none"
                  style={LABEL_STYLE}
                >
                  {item.label}
                </a>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

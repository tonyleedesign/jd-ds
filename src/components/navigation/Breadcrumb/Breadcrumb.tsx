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

// ─── Component ────────────────────────────────────────────────────────────────

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center gap-(--space-8)">
        {items.map((item, i) => {
          const isLast = i === items.length - 1

          return (
            <li key={i} className="flex items-center gap-(--space-8)">

              {/* Chevron separator — not before the first item */}
              {i > 0 && (
                <Icon
                  icon={ChevronRightIcon}
                  size="small"
                  style={{ color: 'var(--text-navigation-link)', flexShrink: 0 }}
                />
              )}

              {isLast ? (
                // Current page — no hover, no link
                <span
                  aria-current="page"
                  style={{
                    fontSize:   'var(--breadcrumb-label-size)',
                    lineHeight: 'var(--breadcrumb-label-line-height)',
                    fontWeight: 'var(--breadcrumb-label-weight)',
                    color:      'var(--text-navigation-link)',
                    cursor:     'default',
                  }}
                >
                  {item.label}
                </span>
              ) : (
                // Ancestor — hoverable with underline
                <a
                  href={item.href ?? '/'}
                  style={{
                    fontSize:        'var(--breadcrumb-label-size)',
                    lineHeight:      'var(--breadcrumb-label-line-height)',
                    fontWeight:      'var(--breadcrumb-label-weight)',
                    color:           'var(--text-navigation-link)',
                    textDecoration:  'none',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
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

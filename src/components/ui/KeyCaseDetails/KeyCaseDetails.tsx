import { Fragment, useState } from 'react'
import { Icon, ChevronRightIcon, LinkOutIcon } from '../Icon'
import { Text } from '../Text'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface KeyCaseDetailsField {
  /** Label text — colon added automatically */
  label: string
  /** Value text */
  value: string
  /** When provided, renders value as an underlined link with a LinkOut icon */
  onClick?: () => void
  /**
   * When true, renders this sub-field at the same visual level as fields[0]
   * (semibold label in col 1, value in col 2). Use for related primary fields
   * like Formulary beneath Plan Benefit.
   */
  primary?: boolean
  /**
   * Additional fields rendered inline to the right of this one, separated by
   * a 16px gap. Useful for compact adjacent values like MONY next to Qty/Days.
   */
  siblings?: Array<{ label: string; value: string; onClick?: () => void }>
}

export interface KeyCaseDetailsSection {
  /**
   * Ordered list of fields for this column.
   * fields[0] is shown in the collapsed state; all fields shown when expanded.
   */
  fields: KeyCaseDetailsField[]
}

export interface KeyCaseDetailsProps {
  /** Columns rendered side by side. Each section expands vertically on toggle. */
  sections?: KeyCaseDetailsSection[]
  className?: string
}

// ─── Default sections ─────────────────────────────────────────────────────────

const DEFAULT_SECTIONS: KeyCaseDetailsSection[] = [
  {
    fields: [
      { label: 'Member',        value: 'Walter White' },
      { label: 'Member ID',     value: '1234567' },
      { label: 'Person Code',   value: '01' },
      { label: 'Date of Birth', value: '01/01/2000' },
    ],
  },
  {
    fields: [
      { label: 'Prescriber', value: 'Taylor Sweezy, MD' },
      { label: 'Phone',      value: '(123) 456-7890' },
      { label: 'Fax',        value: '(123) 456-7890' },
    ],
  },
  {
    fields: [
      { label: 'Drug',                 value: 'Humira Pediatric Crohns Start 80MG/0.4ML Prefilled Syringe Kit' },
      { label: 'NDC',                  value: '12345678901' },
      { label: 'GPI',                  value: '12345678901234' },
      { label: 'Quantity/Days Supply', value: '30/30', siblings: [{ label: 'MONY', value: 'Y' }] },
    ],
  },
  {
    fields: [
      { label: 'Origin', value: 'Fax' },
    ],
  },
  {
    fields: [
      { label: 'Plan Benefit', value: 'J.P. Wynne High School', onClick: () => {} },
      { label: 'Formulary',    value: 'Liberty',                onClick: () => {}, primary: true },
    ],
  },
]

// ─── Value renderer (plain text or underlined link) ───────────────────────────

function FieldValue({ value, onClick }: Pick<KeyCaseDetailsField, 'value' | 'onClick'>) {
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="inline-flex items-center gap-(--inline-1) cursor-pointer bg-transparent p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--text-surface-inverse)"
        style={{ border: 'none' }}
      >
        <Text as="span" variant="body-md" className="text-(--text-surface-inverse) underline">
          {value}
        </Text>
        <Icon icon={LinkOutIcon} size="small" className="text-(--text-surface-inverse) shrink-0" />
      </button>
    )
  }
  return (
    <Text as="span" variant="body-md" className="text-(--text-surface-inverse)">
      {value}
    </Text>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export function KeyCaseDetails({ sections = DEFAULT_SECTIONS, className = '' }: KeyCaseDetailsProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`flex items-start gap-(--inline-4) px-(--inset-7) py-(--inset-3) bg-(--bg-surface-brand) w-full ${className}`}
    >
      {/* Toggle — wrapped in a line-height box so it aligns with the first text row */}
      <div
        className="inline-flex items-center shrink-0"
        style={{ height: 'var(--body-md-line-height)' }}
      >
        <button
          type="button"
          onClick={() => setExpanded(prev => !prev)}
          aria-label={expanded ? 'Collapse case details' : 'Expand case details'}
          aria-expanded={expanded}
          className="inline-flex items-center justify-center cursor-pointer bg-transparent p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--text-surface-inverse)"
          style={{ border: 'none' }}
        >
          <Icon
            icon={ChevronRightIcon}
            size="regular"
            className="text-(--text-surface-inverse)"
            style={{
              transform:  expanded ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform 200ms ease',
            }}
          />
        </button>
      </div>

      {/* Sections */}
      {sections.map((section) => {
        const primaryField = section.fields[0]
        const subFields    = section.fields.slice(1)

        return (
          <div
            key={primaryField.label}
            className="grid grid-cols-[auto_auto] gap-x-(--inline-1) gap-y-(--stack-1)"
          >
            {/* Primary field — label in col 1, value in col 2 */}
            <Text as="span" variant="body-md" weight="semibold" className="text-(--text-surface-inverse)">
              {primaryField.label}:
            </Text>
            <FieldValue value={primaryField.value} onClick={primaryField.onClick} />

            {/* Sub-fields */}
            {expanded && subFields.map((field) => field.primary ? (
              // Primary-level sub-field — full grid row (semibold label in col 1)
              <Fragment key={field.label}>
                <Text as="span" variant="body-md" weight="semibold" className="text-(--text-surface-inverse)">
                  {field.label}:
                </Text>
                <FieldValue value={field.value} onClick={field.onClick} />
              </Fragment>
            ) : (
              // Secondary sub-field — indented to col 2, regular weight.
              // Empty spacer in col 1 prevents CSS grid from backfilling
              // col 1 with a subsequent primary sub-field's label.
              <Fragment key={field.label}>
                <span aria-hidden="true" />
                <div className="col-start-2 inline-flex items-center gap-(--inline-4)">
                  <div className="inline-flex items-center gap-(--inline-1)">
                    {/* Sub-field label intentionally regular weight — not semibold */}
                    <Text as="span" variant="body-md" className="text-(--text-surface-inverse)">
                      {field.label}:
                    </Text>
                    <FieldValue value={field.value} onClick={field.onClick} />
                  </div>
                  {field.siblings?.map((sibling) => (
                    <div key={sibling.label} className="inline-flex items-center gap-(--inline-1)">
                      <Text as="span" variant="body-md" className="text-(--text-surface-inverse)">
                        {sibling.label}:
                      </Text>
                      <FieldValue value={sibling.value} onClick={sibling.onClick} />
                    </div>
                  ))}
                </div>
              </Fragment>
            ))}
          </div>
        )
      })}
    </div>
  )
}

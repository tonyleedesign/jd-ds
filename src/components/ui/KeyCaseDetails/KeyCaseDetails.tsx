import { Fragment, useState } from 'react'
import { Icon, ChevronRightIcon, LinkOutIcon } from '../Icon'
import { Text } from '../Text'

// ─── Types ────────────────────────────────────────────────────────────────────

type SubField = {
  label: string
  value: string
  onClick?: () => void
  primary?: boolean
  siblings?: { label: string; value: string }[]
}

type Section = {
  primary: { label: string; value: string; onClick?: () => void }
  sub: SubField[]
}

// ─── Static data ──────────────────────────────────────────────────────────────

const SECTIONS: Section[] = [
  {
    primary: { label: 'Member', value: 'Walter White' },
    sub: [
      { label: 'Member ID',     value: '1234567' },
      { label: 'Person Code',   value: '01' },
      { label: 'Date of Birth', value: '01/01/2000' },
    ],
  },
  {
    primary: { label: 'Prescriber', value: 'Taylor Sweezy, MD' },
    sub: [
      { label: 'Phone', value: '(123) 456-7890' },
      { label: 'Fax',   value: '(123) 456-7890' },
    ],
  },
  {
    primary: { label: 'Drug', value: 'Humira Pediatric Crohns Start 80MG/0.4ML Prefilled Syringe Kit' },
    sub: [
      { label: 'NDC',                  value: '12345678901' },
      { label: 'GPI',                  value: '12345678901234' },
      { label: 'Quantity/Days Supply', value: '30/30', siblings: [{ label: 'MONY', value: 'Y' }] },
    ],
  },
  {
    primary: { label: 'Origin', value: 'Fax' },
    sub: [],
  },
  {
    primary: { label: 'Plan Benefit', value: 'J.P. Wynne High School', onClick: () => {} },
    sub: [
      { label: 'Formulary', value: 'Liberty', onClick: () => {}, primary: true },
    ],
  },
]

// ─── Value renderer (plain text or underlined link) ───────────────────────────

function FieldValue({ value, onClick }: { value: string; onClick?: () => void }) {
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="inline-flex items-center gap-(--inline-1) cursor-pointer bg-transparent p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--text-surface-inverse)"
      >
        <Text as="span" variant="body-md" underline className="text-(--text-surface-inverse)">
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

// ─── Section grid ─────────────────────────────────────────────────────────────

function SectionGrid({ section, expanded }: { section: Section; expanded: boolean }) {
  return (
    <div className="grid grid-cols-[auto_auto] gap-x-(--inline-1) gap-y-(--stack-1) shrink-0">
      <Text as="span" variant="body-md" weight="semibold" className="text-(--text-surface-inverse)">
        {section.primary.label}:
      </Text>
      <FieldValue value={section.primary.value} onClick={section.primary.onClick} />

      {expanded && section.sub.map((field) => field.primary ? (
        <Fragment key={field.label}>
          <Text as="span" variant="body-md" weight="semibold" className="text-(--text-surface-inverse)">
            {field.label}:
          </Text>
          <FieldValue value={field.value} onClick={field.onClick} />
        </Fragment>
      ) : (
        <Fragment key={field.label}>
          <span aria-hidden="true" />
          <div className="col-start-2 flex items-center gap-(--inline-4)">
            <div className="flex items-center gap-(--inline-1)">
              <Text as="span" variant="body-md" className="text-(--text-surface-inverse)">
                {field.label}:
              </Text>
              <FieldValue value={field.value} onClick={field.onClick} />
            </div>
            {field.siblings?.map((sibling) => (
              <div key={sibling.label} className="flex items-center gap-(--inline-1)">
                <Text as="span" variant="body-md" className="text-(--text-surface-inverse)">
                  {sibling.label}:
                </Text>
                <FieldValue value={sibling.value} />
              </div>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export function KeyCaseDetails() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="flex items-start gap-(--inline-4) px-(--inset-7) py-(--inset-3) bg-(--bg-surface-brand) w-full"
    >
      {/* Chevron — sits outside the wrapping content area so wrapped rows
          align with the section content, not the chevron */}
      <div
        className="flex items-center shrink-0"
        style={{ height: 'var(--body-md-line-height)' }}
      >
        <button
          type="button"
          onClick={() => setExpanded(prev => !prev)}
          aria-label={expanded ? 'Collapse case details' : 'Expand case details'}
          aria-expanded={expanded}
          className="inline-flex items-center justify-center cursor-pointer bg-transparent p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--text-surface-inverse)"
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

      {/* Content — wraps independently of the chevron so wrapped rows
          align with Member, not the chevron */}
      <div className="flex flex-wrap items-start gap-(--inline-4) flex-1 min-w-0 overflow-hidden">
        {SECTIONS.map((section) => (
          <SectionGrid key={section.primary.label} section={section} expanded={expanded} />
        ))}
      </div>
    </div>
  )
}

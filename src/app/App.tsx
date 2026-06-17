import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { AddIcon, ArrowRightIcon, DeleteIcon, StarFilledIcon, ChevronDownIcon } from '../components/ui/Icon'
import { AppLayout } from '../components/layout/AppLayout'
import { SideNavItem, SideNavGroup } from '../components/navigation/SideNav'
import { ButtonGroup } from '../components/ui/ButtonGroup'
import { Lozenge } from '../components/ui/Lozenge'
import { MetaItem } from '../components/ui/MetaItem'
import { Steps } from '../components/ui/Steps'
import { KeyCaseDetails } from '../components/ui/KeyCaseDetails'
import { Tag } from '../components/ui/Tag'
import type { TagVariant } from '../components/ui/Tag'
import { Badge } from '../components/ui/Badge'
import { Text } from '../components/ui/Text'
import type { TextVariant } from '../components/ui/Text'
import { ClockIcon } from '../components/ui/Icon'
import { Tab } from '../components/ui/Tab'
import { TabSet } from '../components/ui/TabSet'

document.documentElement.setAttribute('data-theme', 'minerva')

type Theme = 'minerva' | 'evolution'
type Section = 'Typography' | 'Colors' | 'Spacing' | 'Radius' | 'Button' | 'Tag & Badge' | 'Tabs' | 'Shell'

const SECTIONS: Section[] = ['Typography', 'Colors', 'Spacing', 'Radius', 'Button', 'Tag & Badge', 'Tabs', 'Shell']

const PLACEHOLDER_ITEMS = [
  'Dashboard', 'Analytics', 'Reports', 'Transactions', 'Payments',
  'Customers', 'Invoices', 'Products', 'Orders', 'Inventory',
  'Settings', 'Team', 'Billing', 'Integrations', 'Audit Log',
  'Notifications', 'Support',
]

// ─── Typography ───────────────────────────────────────────────────────────────

function TypographySection() {
  const styles: { label: string; variant: TextVariant }[] = [
    { label: 'Heading XL', variant: 'heading-xl' },
    { label: 'Heading LG', variant: 'heading-lg' },
    { label: 'Heading MD', variant: 'heading-md' },
    { label: 'Heading SM', variant: 'heading-sm' },
    { label: 'Heading XS', variant: 'heading-xs' },
    { label: 'Body LG',    variant: 'body-lg' },
    { label: 'Body MD',    variant: 'body-md' },
    { label: 'Body SM',    variant: 'body-sm' },
    { label: 'Label LG',   variant: 'label-lg' },
    { label: 'Label MD',   variant: 'label-md' },
    { label: 'Label SM',   variant: 'label-sm' },
  ]

  return (
    <div className="min-h-full">
      <Text as="h2" variant="heading-md" className="mb-(--space-24) text-(--text-surface-base)">
        Typography
      </Text>
      <div className="flex flex-col gap-(--space-12)">
        {styles.map(({ label, variant }) => (
          <div key={label} className="flex items-baseline gap-(--space-24)">
            <Text
              variant="label-md"
              className="shrink-0 w-24 text-(--text-surface-subtle)"
            >
              {label}
            </Text>
            <Text
              as="p"
              variant={variant}
              className="text-(--text-surface-base)"
            >
              The quick brown fox jumps over the lazy dog
            </Text>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Colors ───────────────────────────────────────────────────────────────────

function ColorsSection() {
  const groups: {
    label: string
    swatches: { label: string; token: string; border?: boolean }[]
  }[] = [
    {
      label: 'Background — Action',
      swatches: [
        { label: 'primary-idle',    token: '--bg-action-primary-idle' },
        { label: 'primary-hover',   token: '--bg-action-primary-hover' },
        { label: 'primary-pressed', token: '--bg-action-primary-pressed' },
        { label: 'primary-critical-idle',    token: '--bg-action-primary-critical-idle' },
        { label: 'primary-critical-hover',   token: '--bg-action-primary-critical-hover' },
        { label: 'secondary-idle',  token: '--bg-action-secondary-idle', border: true },
        { label: 'inverse-idle',    token: '--bg-action-inverse-idle', border: true },
        { label: 'neutral-idle',    token: '--bg-action-neutral-idle', border: true },
      ],
    },
    {
      label: 'Background — Feedback',
      swatches: [
        { label: 'success-base',          token: '--bg-feedback-success-base' },
        { label: 'success-muted',         token: '--bg-feedback-success-muted' },
        { label: 'success-inverse',       token: '--bg-feedback-success-inverse', border: true },
        { label: 'warning-base',          token: '--bg-feedback-warning-base' },
        { label: 'warning-inverse',       token: '--bg-feedback-warning-inverse', border: true },
        { label: 'error-base',            token: '--bg-feedback-error-base' },
        { label: 'error-muted',           token: '--bg-feedback-error-muted' },
        { label: 'error-inverse',         token: '--bg-feedback-error-inverse', border: true },
        { label: 'info-base',             token: '--bg-feedback-informational-base' },
        { label: 'info-inverse',          token: '--bg-feedback-informational-inverse', border: true },
      ],
    },
    {
      label: 'Background — Surface',
      swatches: [
        { label: 'surface-base',    token: '--bg-surface-base', border: true },
        { label: 'surface-subtle',  token: '--bg-surface-subtle', border: true },
        { label: 'surface-muted',   token: '--bg-surface-muted', border: true },
        { label: 'surface-inverse', token: '--bg-surface-inverse' },
        { label: 'accent-primary',  token: '--bg-surface-accent-primary' },
        { label: 'accent-secondary', token: '--bg-surface-accent-secondary' },
        { label: 'accent-tertiary', token: '--bg-surface-accent-tertiary' },
      ],
    },
    {
      label: 'Border — Action',
      swatches: [
        { label: 'secondary-idle',    token: '--border-action-secondary-idle', border: true },
        { label: 'secondary-hover',   token: '--border-action-secondary-hover', border: true },
        { label: 'secondary-pressed', token: '--border-action-secondary-pressed', border: true },
        { label: 'critical-idle',     token: '--border-action-secondary-critical-idle', border: true },
      ],
    },
    {
      label: 'Border — Surface',
      swatches: [
        { label: 'surface-base',    token: '--border-surface-base', border: true },
        { label: 'surface-subtle',  token: '--border-surface-subtle', border: true },
        { label: 'surface-inverse', token: '--border-surface-inverse' },
      ],
    },
    {
      label: 'Text — Action',
      swatches: [
        { label: 'primary-idle',          token: '--text-action-primary-idle', border: true },
        { label: 'secondary-idle',        token: '--text-action-secondary-idle', border: true },
        { label: 'inverse-idle',          token: '--text-action-inverse-idle', border: true },
        { label: 'hyperlink',             token: '--text-action-hyperlink', border: true },
        { label: 'base-idle',             token: '--text-action-base-idle', border: true },
        { label: 'base-disabled',         token: '--text-action-base-disabled', border: true },
      ],
    },
    {
      label: 'Text — Surface',
      swatches: [
        { label: 'surface-base',    token: '--text-surface-base', border: true },
        { label: 'surface-subtle',  token: '--text-surface-subtle', border: true },
        { label: 'surface-inverse', token: '--text-surface-inverse', border: true },
      ],
    },
  ]

  return (
    <div className="min-h-full">
      <Text as="h2" variant="heading-md" className="mb-(--space-24) text-(--text-surface-base)">
        Colors
      </Text>
      <div className="flex flex-col gap-(--space-32)">
        {groups.map(({ label, swatches }) => (
          <div key={label}>
            <Text as="h3" variant="label-lg" className="mb-(--space-16) text-(--text-surface-subtle)">
              {label}
            </Text>
            <div className="flex flex-wrap gap-(--space-12)">
              {swatches.map(({ label: swatchLabel, token, border }) => (
                <div key={swatchLabel} className="flex flex-col items-center gap-(--space-6)">
                  <div
                    className="w-12 h-12 rounded-(--radius-sm)"
                    style={{
                      background: `var(${token})`,
                      border:     border ? '1px solid var(--border-surface-base)' : undefined,
                    }}
                  />
                  <Text
                    variant="label-sm"
                    className="text-(--text-surface-subtle) text-center max-w-16"
                  >
                    {swatchLabel}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Spacing ──────────────────────────────────────────────────────────────────

function SpacingSection() {
  const tokens: { label: string; token: string }[] = [
    { label: 'space-1',  token: '--space-1' },
    { label: 'space-2',  token: '--space-2' },
    { label: 'space-4',  token: '--space-4' },
    { label: 'space-6',  token: '--space-6' },
    { label: 'space-8',  token: '--space-8' },
    { label: 'space-9',  token: '--space-9' },
    { label: 'space-10', token: '--space-10' },
    { label: 'space-11', token: '--space-11' },
    { label: 'space-12', token: '--space-12' },
    { label: 'space-16', token: '--space-16' },
    { label: 'space-20', token: '--space-20' },
    { label: 'space-24', token: '--space-24' },
    { label: 'space-30', token: '--space-30' },
    { label: 'space-32', token: '--space-32' },
    { label: 'space-36', token: '--space-36' },
    { label: 'space-40', token: '--space-40' },
  ]

  return (
    <div className="min-h-full">
      <Text as="h2" variant="heading-md" className="mb-(--space-24) text-(--text-surface-base)">
        Spacing
      </Text>
      <div className="flex flex-col gap-(--space-8)">
        {tokens.map(({ label, token }) => (
          <div key={token} className="flex items-center gap-(--space-16)">
            <Text
              variant="label-md"
              className="shrink-0 w-[72px] text-(--text-surface-subtle)"
            >
              {label}
            </Text>
            <div
              className="bg-(--bg-action-primary-idle) h-4 min-w-[2px] rounded-(--radius-xs)"
              style={{ width: `var(${token})` }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Button ───────────────────────────────────────────────────────────────────

function DemoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-(--space-8)">
      <Text variant="label-md" className="text-(--text-surface-subtle)">
        {label}
      </Text>
      <div className="flex flex-wrap items-center gap-(--space-8)">
        {children}
      </div>
    </div>
  )
}

function ButtonSection() {
  return (
    <div className="min-h-full">
      <Text as="h2" variant="heading-md" className="mb-(--space-24) text-(--text-surface-base)">
        Button
      </Text>

      {/* Primary */}
      <div className="mb-(--space-32) flex flex-col gap-(--space-16)">
        <Text as="h3" variant="label-lg" className="text-(--text-surface-subtle)">
          Primary
        </Text>
        <DemoRow label="Default">
          <Button variant="primary">Label</Button>
          <Button variant="primary" leftIcon={AddIcon}>Left icon</Button>
          <Button variant="primary" rightIcon={ArrowRightIcon}>Right icon</Button>
          <Button variant="primary" leftIcon={AddIcon} rightIcon={ArrowRightIcon}>Both icons</Button>
          <Button variant="primary" loading>Loading</Button>
          <Button variant="primary" loading rightIcon={ArrowRightIcon}>Loading</Button>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="primary" iconOnly><AddIcon /></Button>
          <Button variant="primary" iconOnly loading><StarFilledIcon /></Button>
        </DemoRow>
        <DemoRow label="Destructive">
          <Button variant="primary" destructive>Delete</Button>
          <Button variant="primary" destructive leftIcon={DeleteIcon}>Delete item</Button>
          <Button variant="primary" destructive loading>Deleting</Button>
          <Button variant="primary" destructive disabled>Disabled</Button>
          <Button variant="primary" destructive iconOnly><DeleteIcon /></Button>
        </DemoRow>
      </div>

      {/* Secondary */}
      <div className="mb-(--space-32) flex flex-col gap-(--space-16)">
        <Text as="h3" variant="label-lg" className="text-(--text-surface-subtle)">
          Secondary
        </Text>
        <DemoRow label="Default">
          <Button variant="secondary">Label</Button>
          <Button variant="secondary" leftIcon={AddIcon}>Left icon</Button>
          <Button variant="secondary" rightIcon={ArrowRightIcon}>Right icon</Button>
          <Button variant="secondary" loading>Loading</Button>
          <Button variant="secondary" disabled>Disabled</Button>
          <Button variant="secondary" iconOnly><StarFilledIcon /></Button>
        </DemoRow>
        <DemoRow label="Destructive">
          <Button variant="secondary" destructive>Delete</Button>
          <Button variant="secondary" destructive leftIcon={DeleteIcon}>Delete item</Button>
          <Button variant="secondary" destructive loading>Deleting</Button>
          <Button variant="secondary" destructive disabled>Disabled</Button>
          <Button variant="secondary" destructive iconOnly><DeleteIcon /></Button>
        </DemoRow>
      </div>

      {/* Tertiary */}
      <div className="mb-(--space-32) flex flex-col gap-(--space-16)">
        <Text as="h3" variant="label-lg" className="text-(--text-surface-subtle)">
          Tertiary
        </Text>
        <DemoRow label="Default">
          <Button variant="tertiary">Label</Button>
          <Button variant="tertiary" leftIcon={AddIcon}>Left icon</Button>
          <Button variant="tertiary" rightIcon={ArrowRightIcon}>Right icon</Button>
          <Button variant="tertiary" loading>Loading</Button>
          <Button variant="tertiary" disabled>Disabled</Button>
          <Button variant="tertiary" iconOnly><StarFilledIcon /></Button>
        </DemoRow>
        <DemoRow label="Destructive">
          <Button variant="tertiary" destructive>Delete</Button>
          <Button variant="tertiary" destructive leftIcon={DeleteIcon}>Delete item</Button>
          <Button variant="tertiary" destructive loading>Deleting</Button>
          <Button variant="tertiary" destructive disabled>Disabled</Button>
          <Button variant="tertiary" destructive iconOnly><DeleteIcon /></Button>
        </DemoRow>
      </div>

      {/* Inverse */}
      <div className="flex flex-col gap-(--space-16)">
        <Text as="h3" variant="label-lg" className="text-(--text-surface-subtle)">
          Inverse
        </Text>
        <div className="p-(--space-24) bg-(--bg-surface-inverse) rounded-(--radius-md)">
          <DemoRow label="Default">
            <Button variant="inverse">Label</Button>
            <Button variant="inverse" leftIcon={AddIcon}>Left icon</Button>
            <Button variant="inverse" rightIcon={ArrowRightIcon}>Right icon</Button>
            <Button variant="inverse" loading>Loading</Button>
            <Button variant="inverse" disabled>Disabled</Button>
            <Button variant="inverse" iconOnly><StarFilledIcon /></Button>
          </DemoRow>
        </div>
      </div>
    </div>
  )
}

// ─── Radius ───────────────────────────────────────────────────────────────────

function RadiusSection() {
  const tokens: { label: string; token: string }[] = [
    { label: 'none', token: '--radius-none' },
    { label: 'soft', token: '--radius-soft' },
    { label: 'xs',   token: '--radius-xs' },
    { label: 'sm',   token: '--radius-sm' },
    { label: 'md',   token: '--radius-md' },
    { label: 'lg',   token: '--radius-lg' },
    { label: 'xl',   token: '--radius-xl' },
    { label: '2xl',  token: '--radius-2xl' },
    { label: 'full', token: '--radius-full' },
  ]

  return (
    <div className="min-h-full">
      <Text as="h2" variant="heading-md" className="mb-(--space-24) text-(--text-surface-base)">
        Border Radius
      </Text>
      <div className="flex flex-wrap gap-(--space-24)">
        {tokens.map(({ label, token }) => (
          <div key={token} className="flex flex-col items-center gap-(--space-12)">
            <div
              className="bg-(--bg-action-primary-idle) w-16 h-16"
              style={{ borderRadius: `var(${token})` }}
            />
            <div className="flex flex-col items-center gap-(--space-4)">
              <Text variant="label-lg" className="text-(--text-surface-base)">
                {label}
              </Text>
              <Text variant="label-md" className="text-(--text-surface-subtle)">
                {token}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Tag & Badge ──────────────────────────────────────────────────────────────

function TagBadgeSection() {
  const TAG_VARIANTS: { label: string; variant: TagVariant; description: string }[] = [
    { label: 'Info',               variant: 'info',               description: 'Default neutral state' },
    { label: 'Info High Contrast', variant: 'info-high-contrast', description: 'Emphasized neutral' },
    { label: 'Success',            variant: 'success',            description: 'Approved / active / complete' },
    { label: 'Warning',            variant: 'warning',            description: 'Needs attention' },
    { label: 'Error',              variant: 'error',              description: 'Failed / rejected / blocked' },
    { label: 'System',             variant: 'system',             description: 'System-generated status' },
    { label: 'System Alt',         variant: 'system-alt',         description: 'System alt emphasis' },
  ]

  return (
    <div className="min-h-full flex flex-col gap-(--stack-5)">

      {/* ── Tag ── */}
      <div>
        <Text as="h2" variant="heading-md" className="mb-(--space-4) text-(--text-surface-base)">
          Tag
        </Text>
        <Text as="p" variant="body-md" className="mb-(--space-24) text-(--text-surface-subtle)">
          Read-only labels. Text only — no interactive elements. Use to communicate status or category.
        </Text>

        {/* All variants */}
        <Text as="h3" variant="label-lg" className="mb-(--space-16) text-(--text-surface-subtle)">
          Variants
        </Text>
        <div className="flex flex-col gap-(--stack-3)">
          {TAG_VARIANTS.map(({ label, variant, description }) => (
            <div key={variant} className="flex items-center gap-(--inline-4)">
              <div className="shrink-0 w-[160px]">
                <Tag variant={variant}>{label}</Tag>
              </div>
              <Text variant="label-md" className="shrink-0 w-[180px] text-(--text-surface-subtle)">
                {variant}
              </Text>
              <Text variant="body-md" className="text-(--text-surface-subtle)">
                {description}
              </Text>
            </div>
          ))}
        </div>

        {/* In context */}
        <Text as="h3" variant="label-lg" className="mt-(--space-32) mb-(--space-16) text-(--text-surface-subtle)">
          In context
        </Text>
        <div className="flex flex-wrap gap-(--inline-2)">
          <Tag variant="success">Approved</Tag>
          <Tag variant="warning">Pending Review</Tag>
          <Tag variant="error">Rejected</Tag>
          <Tag variant="info">Draft</Tag>
          <Tag variant="system">Auto-assigned</Tag>
          <Tag variant="info-high-contrast">Priority</Tag>
          <Tag variant="system-alt">Escalated</Tag>
        </div>
      </div>

      {/* ── Badge ── */}
      <div>
        <Text as="h2" variant="heading-md" className="mb-(--space-4) text-(--text-surface-base)">
          Badge
        </Text>
        <Text as="p" variant="body-md" className="mb-(--space-24) text-(--text-surface-subtle)">
          Interactive labels. Identical to the Info tag in colour but supports an optional dismiss (×) button. Use for user-applied filters or removable selections.
        </Text>

        <Text as="h3" variant="label-lg" className="mb-(--space-16) text-(--text-surface-subtle)">
          Variants
        </Text>
        <div className="flex flex-col gap-(--stack-3)">
          <div className="flex items-center gap-(--inline-4)">
            <div className="shrink-0 w-[160px]">
              <Badge>Label</Badge>
            </div>
            <Text variant="label-md" className="shrink-0 w-[180px] text-(--text-surface-subtle)">
              without onClose
            </Text>
            <Text variant="body-md" className="text-(--text-surface-subtle)">
              Static — no dismiss button rendered
            </Text>
          </div>
          <div className="flex items-center gap-(--inline-4)">
            <div className="shrink-0 w-[160px]">
              <Badge onClose={() => {}}>Label</Badge>
            </div>
            <Text variant="label-md" className="shrink-0 w-[180px] text-(--text-surface-subtle)">
              with onClose
            </Text>
            <Text variant="body-md" className="text-(--text-surface-subtle)">
              Renders × dismiss button, calls onClose on click
            </Text>
          </div>
        </div>

        {/* In context */}
        <Text as="h3" variant="label-lg" className="mt-(--space-32) mb-(--space-16) text-(--text-surface-subtle)">
          In context — active filters
        </Text>
        <div className="flex flex-wrap gap-(--inline-2)">
          <Badge onClose={() => {}}>Status: Active</Badge>
          <Badge onClose={() => {}}>Assigned: Chad Ontario</Badge>
          <Badge onClose={() => {}}>Due: This week</Badge>
          <Badge onClose={() => {}}>Type: Claim</Badge>
        </div>
      </div>

    </div>
  )
}

// ─── Tabs ─────────────────────────────────────────────────────────────────────

function TabsSection() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="flex flex-col gap-(--stack-5) p-(--inset-7)">
      <DemoRow label="TabSet">
        <TabSet>
          <Tab label="Overview"  selected={activeTab === 'overview'}  onClick={() => setActiveTab('overview')}  rightSlot={<Lozenge count={3} />} />
          <Tab label="Details"   selected={activeTab === 'details'}   onClick={() => setActiveTab('details')}   rightSlot={<Lozenge count={12} />} />
          <Tab label="History"   selected={activeTab === 'history'}   onClick={() => setActiveTab('history')} />
          <Tab label="Documents" selected={activeTab === 'documents'} onClick={() => setActiveTab('documents')} />
        </TabSet>
      </DemoRow>
    </div>
  )
}

// ─── Shell ────────────────────────────────────────────────────────────────────

function ShellSection() {
  return (
    <div className="min-h-full" />
  )
}

// ─── Doc app ──────────────────────────────────────────────────────────────────

function DocContent() {
  const [activeSection, setActiveSection] = useState<Section>('Typography')
  const [theme, setTheme] = useState<Theme>('minerva')

  const switchTheme = (t: Theme) => {
    setTheme(t)
    document.documentElement.setAttribute('data-theme', t)
  }

  const headerActions = (
    <ButtonGroup>
      {(['minerva', 'evolution'] as Theme[]).map((t) => (
        <Button
          key={t}
          variant="inverse"
          onClick={() => switchTheme(t)}
          style={theme === t ? { borderColor: 'var(--text-action-inverse-idle)' } : undefined}
        >
          {t}
        </Button>
      ))}
    </ButtonGroup>
  )

  const sideNavContent = (
    <div className="flex flex-col gap-(--stack-4)">
      <div className="flex flex-col gap-(--space-4)">
        <SideNavGroup label="Queues" />
        {SECTIONS.map((section) => (
          <SideNavItem
            key={section}
            label={section}
            onClick={() => setActiveSection(section)}
            active={activeSection === section}
            lozenge={<Lozenge count={0} />}
          />
        ))}
      </div>
      <div className="flex flex-col gap-(--space-4)">
        <SideNavGroup label="Admin" />
        {PLACEHOLDER_ITEMS.map((item) => (
          <SideNavItem key={item} label={item} lozenge={<Lozenge count={0} />} />
        ))}
      </div>
    </div>
  )

  return (
    <AppLayout
      variant={theme}
      appName="Documentation"
      headerActions={headerActions}
      breadcrumbs={[{ label: 'Home', }, { label: 'Documentation Module', href: '/' }, { label: activeSection }]}
      sideNavContent={sideNavContent}
      title='Documentation Module'
      onBackClick={() => {}}
      actions={
        <ButtonGroup>
          <Button variant="tertiary" rightIcon={ChevronDownIcon}>Case Actions</Button>
          <Button variant="secondary">Exit Case</Button>
        </ButtonGroup>
      }
      completed
      titleMeta={
        <>
          <Tag variant="system">RPh Review</Tag>
          <Tag variant="warning">TDI</Tag>
        </>
      }
      secondaryContent={
        <>
          <MetaItem label="Review Level" value="Initial" />
          <MetaItem icon={ClockIcon} label="Elapses" value="05/26/2026 12:00PM EST" />
        </>
      }
      subBar={
        <>
          <Steps
            steps={[
              { label: 'Intake',    active: true,  onClick: () => {} },
              { label: 'Review',    active: true,  onClick: () => {} },
              { label: 'Decision',  active: false },
              { label: 'Close',     active: false },
            ]}
          />
          <KeyCaseDetails />
        </>
      }
    >
      {activeSection === 'Typography' && <TypographySection />}
      {activeSection === 'Colors'     && <ColorsSection />}
      {activeSection === 'Spacing'    && <SpacingSection />}
      {activeSection === 'Radius'     && <RadiusSection />}
      {activeSection === 'Button'     && <ButtonSection />}
      {activeSection === 'Tag & Badge' && <TagBadgeSection />}
      {activeSection === 'Tabs'       && <TabsSection />}
      {activeSection === 'Shell'      && <ShellSection />}
    </AppLayout>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

function App() {
  return <DocContent />
}

export default App

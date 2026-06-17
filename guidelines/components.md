# Components

This kit provides a complete set of components. Always use them — never build custom components or layouts from scratch.

**Setup required first:** copy components from `node_modules/@make-kits/jh-ds/dist/components/` into `src/components/` before writing any code. All import paths below are relative from `src/app/`.

---

## Available components

| Component                | Import path                              |
| ------------------------ | ---------------------------------------- |
| `AppLayout`              | `../components/layout/AppLayout`         |
| `GlobalHeader`           | `../components/navigation/GlobalHeader`  |
| `ActionBar`              | `../components/navigation/ActionBar`     |
| `Breadcrumb`             | `../components/navigation/Breadcrumb`    |
| `SideNav`, `SideNavItem`, `SideNavGroup` | `../components/navigation/SideNav` |
| `Button`                 | `../components/ui/Button`                |
| `ButtonGroup`            | `../components/ui/ButtonGroup`           |
| `Text`                   | `../components/ui/Text`                  |
| `Tag`                    | `../components/ui/Tag`                   |
| `Badge`                  | `../components/ui/Badge`                 |
| `MetaItem`               | `../components/ui/MetaItem`              |
| `Lozenge`                | `../components/ui/Lozenge`               |
| `Steps`                  | `../components/ui/Steps`                 |
| `KeyCaseDetails`         | `../components/ui/KeyCaseDetails`        |
| `Icon` + all icons       | `../components/ui/Icon`                  |
| `Spinner`                | `../components/ui/Spinner`               |
| `Tab`                    | `../components/ui/Tab`                   |
| `TabSet`                 | `../components/ui/TabSet`                |

---

## AppLayout

Every page must start with AppLayout. No exceptions — not for simple pages, not for single components. Never build a custom layout or render content outside of AppLayout.

```tsx
import { AppLayout } from '../components/layout/AppLayout'
import { SideNavItem } from '../components/navigation/SideNav'

export default function MyPage() {
  return (
    <AppLayout
      variant="minerva"
      appName="Module Name"
      breadcrumbs={[{ label: "Home" }, { label: "Page Name" }]}
      title="Page Title"
      sideNavContent={
        <>
          <SideNavItem label="Item One" active />
          <SideNavItem label="Item Two" />
        </>
      }
    >
      {/* page content */}
    </AppLayout>
  );
}
```

### With page actions

Always wrap actions in `ButtonGroup`. Order left to right: `tertiary | secondary | primary`. Omit variants that aren't needed — the rightmost button is always the most prominent one present.

```tsx
<AppLayout
  ...
  actions={
    <ButtonGroup>
      <Button variant="tertiary" rightIcon={ChevronDownIcon}>Case Actions</Button>
      <Button variant="secondary">Exit Case</Button>
      <Button variant="primary" leftIcon={AddIcon}>New Item</Button>
    </ButtonGroup>
  }
>
```

### With status tag and metadata

```tsx
<AppLayout
  ...
  titleMeta={<Tag variant="success">Approved</Tag>}
  secondaryContent={
    <>
      <MetaItem label="Review Level" value="Initial" />
      <MetaItem icon={ClockIcon} label="Elapses" value="05/26/2026 12:00PM EST" />
    </>
  }
>
```

### Completed case

Use the `completed` prop to show the green ✓ "Case Completed" indicator inline with the title. Pass any additional status tags via `titleMeta`.

```tsx
<AppLayout
  ...
  completed
  titleMeta={
    <>
      <Tag variant="system">RPh Review</Tag>
      <Tag variant="warning">TDI</Tag>
    </>
  }
>
```

### With sub-bar (tab bar, filter strip)

```tsx
<AppLayout
  ...
  subBar={<MyTabBar />}
>
```

### Full-bleed content (no padding)

```tsx
<AppLayout noPadding ...>
  {/* content manages its own layout and padding */}
</AppLayout>
```

### Detail page with back button

```tsx
<AppLayout
  ...
  breadcrumbs={[{ label: 'Home' }, { label: 'Cases', href: '/cases' }, { label: 'Case #1234' }]}
  title="Case #1234"
  onBackClick={() => navigate(-1)}
>
```

---

## Text

Always use `Text` for typography — never Tailwind text classes or raw inline styles.

```tsx
import { Text } from '../components/ui/Text'

<Text as="h1" variant="heading-xl" className="text-(--text-surface-base)">Page Title</Text>
<Text variant="body-md" className="text-(--text-surface-base)">Body copy</Text>
<Text variant="body-md" weight="semibold">Semibold</Text>
```

Variants: `heading-xl/lg/md/sm/xs` | `body-lg/md/sm` | `label-lg/md/sm` | `tag-label`

Use `as` to set the HTML element (`h1`–`h3`, `p`, `span` — defaults to `span`). Use `weight="semibold"` to override a variant's default weight.

---

## Tag

Read-only status labels. Text only — no interactive elements.

```tsx
import { Tag } from '../components/ui/Tag'

<Tag variant="success">Approved</Tag>
<Tag variant="warning">Pending Review</Tag>
<Tag variant="error">Rejected</Tag>
```

Variants: `info` | `info-high-contrast` | `success` | `warning` | `error` | `system` | `system-alt`

---

## Badge

Same visual as the `info` Tag but supports an optional dismiss button. Use for removable filters or selections.

```tsx
import { Badge } from '../components/ui/Badge'

<Badge>Label</Badge>
<Badge onClose={() => removeFilter()}>Status: Active</Badge>
```

---

## MetaItem

Inline key/value pair with an optional leading icon. Use in ActionBar `secondaryContent` or anywhere metadata is displayed.

```tsx
import { MetaItem } from '../components/ui/MetaItem'
import { ClockIcon } from '../components/ui/Icon'

<MetaItem label="Assigned" value="Chad Ontario" />
<MetaItem icon={ClockIcon} label="Elapses" value="05/26/2026 12:00PM EST" />

// Clickable link value — renders underlined text + LinkOut icon
<MetaItem label="Plan" value="J.P. Wynne High School" onClick={() => navigate('/plan')} />
```

---

## Steps

Full-width breadcrumb-style progress bar. Active steps are clickable; inactive steps are visible but non-interactive (30% opacity). Place in AppLayout's `subBar` prop.

```tsx
import { Steps } from '../components/ui/Steps'

<AppLayout
  subBar={
    <Steps
      steps={[
        { label: 'Intake',   active: true,  onClick: () => navigate('/intake') },
        { label: 'Review',   active: true,  onClick: () => navigate('/review') },
        { label: 'Decision', active: false },
        { label: 'Close',    active: false },
      ]}
    />
  }
>
```

A step is `active` if the user can navigate to it (current or previously completed). Inactive steps cannot be clicked — do not pass `onClick` on them.

---

## KeyCaseDetails

Collapsible full-width bar showing case-level metadata in columns. Clicking the chevron expands each column to reveal sub-fields. Place in AppLayout's `subBar` prop, below `<Steps>` if both are present.

**Always use this component whenever a KeyCaseDetails bar appears in a design.** Do not build a custom version, inline the markup, or skip it because the data is hardcoded. The hardcoded data is intentional — this is a display component for the design system and accepts no props.

```tsx
import { KeyCaseDetails } from '../components/ui/KeyCaseDetails'

<AppLayout subBar={<KeyCaseDetails />}>
```

---

## Button

```tsx
import { Button } from '../components/ui/Button'
import { AddIcon, DeleteIcon, ArrowRightIcon } from '../components/ui/Icon'
```

| Variant     | Use                                |
| ----------- | ---------------------------------- |
| `primary`   | Main action — one per section      |
| `secondary` | Supporting actions                 |
| `tertiary`  | Low-emphasis actions               |
| `inverse`   | Use on dark/navigation backgrounds |

```tsx
// Basic
<Button variant="primary">Save</Button>
<Button variant="secondary">Cancel</Button>

// With icons
<Button variant="primary" leftIcon={AddIcon}>Add Item</Button>
<Button variant="secondary" rightIcon={ArrowRightIcon}>Next</Button>
<Button variant="secondary" iconOnly><DeleteIcon /></Button>

// States
<Button variant="primary" loading>Saving</Button>
<Button variant="primary" disabled>Save</Button>
<Button variant="primary" destructive leftIcon={DeleteIcon}>Delete</Button>
```

---

## ButtonGroup

Always wrap related buttons in ButtonGroup. Primary action goes rightmost.

```tsx
import { ButtonGroup } from '../components/ui/ButtonGroup'
import { Button } from '../components/ui/Button'

<ButtonGroup>
  <Button variant="secondary">Cancel</Button>
  <Button variant="primary">Save</Button>
</ButtonGroup>
```

---

## Icon

```tsx
import { Icon, AddIcon, SearchIcon, DeleteIcon } from '../components/ui/Icon'

// Standalone icon
<Icon icon={SearchIcon} size="regular" />

// Pass directly to Button — never wrap in Icon when used inside Button
<Button variant="primary" leftIcon={AddIcon}>Add</Button>
```

Sizes: `small` | `regular` | `large`

### All available icons

```
AddIcon, AddCircleIcon, AlarmClockIcon, ArrowDownIcon, ArrowDownLeftIcon,
ArrowDownRightIcon, ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon, ArrowUpRightIcon,
AttachmentIcon, BankIcon, BellIcon, BoltIcon, BranchIcon, CheckCircleIcon,
CheckMarkIcon, ChevronDownIcon, ChevronEndIcon, ChevronLeftIcon, ChevronRightIcon,
ChevronStartIcon, ChevronUpIcon, ClockIcon, CloseIcon, CopyIcon, CreditCardIcon,
CustomerServiceIcon, DeleteIcon, DocumentIcon, DocumentPageFoldIcon, DollarIcon,
DollarCircleIcon, DownloadIcon, EditIcon, EllipsisCircleIcon, EllipsisVerticalIcon,
EnvelopeIcon, EyeIcon, EyeSlashIcon, FaceIdIcon, FilterIcon, GlobeIcon, GrabberIcon,
GridIcon, HistoryIcon, HomeIcon, InfoCircleIcon, LinkOutIcon, ListTreeIcon,
LocationIcon, LockIcon, LockOpenIcon, LogOutIcon, MedicalIcon, MenuBarsIcon,
MenuGridIcon, MessageDotsIcon, PhoneIcon, PillBottleIcon, PlaceholderIcon, PrintIcon,
QuestionCircleIcon, RedoIcon, RefreshIcon, RemoveIcon, ScaleIcon, SearchIcon,
SeriesIcon, SettingsIcon, ShieldCheckIcon, ShippingIcon, StarEmptyIcon, StarFilledIcon,
ThumbsDownIcon, ThumbsUpIcon, UndoIcon, UploadIcon, UserIcon, WarningCircleIcon,
XCircleIcon, XCloseIcon, XIcon
```

---

## SideNavItem

Only used inside AppLayout's `sideNavContent` prop — never rendered standalone.

```tsx
import { SideNavItem } from '../components/navigation/SideNav'

// href renders a plain anchor tag — no router needed
<SideNavItem label="Dashboard" active />
<SideNavItem label="Cases" href="/cases" />
<SideNavItem label="Clients" onClick={() => setSection('clients')} />
```

---

## Spinner

Used automatically inside Button when `loading` is set. Only use standalone for page or section loading states.

```tsx
import { Spinner } from '../components/ui/Spinner'

<Spinner />
```

---

## Tab / TabSet

`TabSet` is the container — it holds the bottom border and left/right padding. `Tab` is each individual tab. Manage selected state externally.

```tsx
import { Tab } from '../components/ui/Tab'
import { TabSet } from '../components/ui/TabSet'

<TabSet>
  <Tab label="Overview" selected={active === 'overview'} onClick={() => setActive('overview')} />
  <Tab label="Details"  selected={active === 'details'}  onClick={() => setActive('details')} />
  <Tab label="History"  selected={active === 'history'}  onClick={() => setActive('history')} />
</TabSet>
```

Use `rightSlot` to render an icon or lozenge to the right of the label:

```tsx
<Tab label="Overview" rightSlot={<Lozenge count={3} />} />
<Tab label="Alerts"   rightSlot={<Icon icon={WarningIcon} size="small" />} />
```

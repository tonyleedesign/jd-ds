# Components

This kit provides a complete set of components. Always use them — never build custom components or layouts from scratch.

## Available components

All components are imported from the kit package:

```tsx
import { ComponentName } from "../components/...";
```

| Component                | Import path                        |
| ------------------------ | ---------------------------------- |
| `AppLayout`              | `../components/layout/AppLayout`   |
| `Button`                 | `../components/ui/Button`          |
| `ButtonGroup`            | `../components/ui/ButtonGroup`     |
| `Icon` + all icons       | `../components/ui/Icon`            |
| `Spinner`                | `../components/ui/Spinner`         |
| `SideNav`, `SideNavItem` | `../components/navigation/SideNav` |

---

## AppLayout

Every page must start with AppLayout. No exceptions — not for simple pages, not for single components. Never build a custom layout or render content outside of AppLayout.

```tsx
import { AppLayout } from "../components/layout/AppLayout";
import { SideNavItem } from "../components/navigation/SideNav";

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

```tsx
import { Button } from '../components/ui/Button'
import { ButtonGroup } from '../components/ui/ButtonGroup'
import { AddIcon } from '../components/ui/Icon'

<AppLayout
  ...
  actions={
    <ButtonGroup>
      <Button variant="secondary">Export</Button>
      <Button variant="primary" leftIcon={AddIcon}>New Item</Button>
    </ButtonGroup>
  }
>
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

## Button

```tsx
import { Button } from "../components/ui/Button";
import {
  AddIcon,
  DeleteIcon,
  ArrowRightIcon,
} from "../components/ui/Icon";
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
import { ButtonGroup } from "../components/ui/ButtonGroup";

<ButtonGroup>
  <Button variant="secondary">Cancel</Button>
  <Button variant="primary">Save</Button>
</ButtonGroup>;
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
import { Spinner } from "../components/ui/Spinner";

<Spinner />;
```
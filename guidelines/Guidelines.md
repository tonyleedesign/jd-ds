# Judi Design System Guidelines

## Workflow

### Starting a new project?
Read `setup.md` completely and follow every step before writing any code.

### Given a design?
1. Analyze the design and identify all components present
2. **Start with the Shell** — set up AppLayout before touching any page content
3. Once the shell is complete, move to body content

### No design given?
Start with the Shell — set up AppLayout with the correct props, then build page content.

---

## Shell — AppLayout

Every page must use AppLayout. Never build a custom layout or render content outside AppLayout.

```tsx
import { AppLayout } from '../components/layout/AppLayout'
import { SideNavItem, SideNavGroup } from '../components/navigation/SideNav'
import { Lozenge } from '../components/ui/Lozenge'
```

Work through each section of AppLayout in order:

### 1. Variant
- `"minerva"` — 16px base, Source Sans 3
- `"evolution"` — 14px base, Inter

### 2. GlobalHeader
Always visible. Determine which props apply from the design:

| Prop | When to include |
|------|-----------------|
| `appName` | Design shows a module/app name next to the logo |
| `headerActions` | Design shows custom content before the bell icon |
| `onNotificationsClick` | Bell icon is interactive |
| `onAccountClick` | Minerva only — account button is interactive |
| `accountLabel` | Minerva only — defaults to "Account" |
| `onAiClick` | Evolution only |
| `onKeyboardClick` | Evolution only |

### 3. ActionBar
Always visible. Determine which props apply from the design:

| Prop | When to include |
|------|-----------------|
| `breadcrumbs` | Design shows a breadcrumb trail |
| `title` | Design shows a page title |
| `onBackClick` | Detail/nested page with a back button |
| `titleMeta` | Design shows a status tag or inline metadata beside the title — use `<Tag>` or `<MetaItem>` |
| `secondaryContent` | Second row of content below the title — use `<MetaItem>` for key/value pairs |
| `actions` | Action buttons in the top right |

```tsx
// titleMeta — status tag beside the title
titleMeta={<Tag variant="success">Approved</Tag>}

// secondaryContent — metadata row below the title
secondaryContent={<MetaItem icon={ClockIcon} label="Elapses" value="05/26/2026 12:00PM EST" />}
```

### 4. Content area

| Prop | When to include |
|------|-----------------|
| `subBar` | Design shows a full-width tab bar, filter strip, or toolbar directly below the ActionBar |
| `noPadding` | Design has full-bleed content (tables, split views) — removes the default 40px body padding |

### 5. SideNav
**Only include `sideNavContent` if the design explicitly shows a sidebar.** If there is no sidebar, omit this prop entirely — do not pass null, undefined, or an empty fragment.

If the design has a sidebar:

```tsx
sideNavContent={
  <div className="flex flex-col gap-(--stack-4)">
    <div className="flex flex-col gap-(--space-4)">
      <SideNavGroup label="Section Name" />
      <SideNavItem label="Item One" active />
      <SideNavItem label="Item Two" lozenge={<Lozenge count={3} />} />
    </div>
  </div>
}
```

---

## Body Content

Once the shell is set up, work through the rest of the design:

1. **Check `components.md` first** — always use a kit component if one exists before building custom
2. **Build custom components as needed** — new component files go in `src/components/`, never inlined inside a page file
3. **Custom components must follow token standards** — see the Token Rules section below, and `tokens.md` / `styles.md` for the full reference

---

## Token Rules

### Spacing
Never use Tailwind's built-in scale (`p-4`, `gap-2`, `mt-6`). Always use our tokens with this syntax:

```tsx
// ✓ correct
<div className="p-(--inset-6) gap-(--inline-3) mt-(--stack-4)">
// ✗ wrong
<div className="p-4 gap-3 mt-6">
```

### Typography
Always use the `Text` component — never Tailwind typography classes or raw inline styles:

```tsx
import { Text } from '../components/ui/Text'

// ✓ correct
<Text as="h1" variant="heading-xl" className="text-(--text-surface-base)">Page Title</Text>
<Text variant="body-md" className="text-(--text-surface-base)">Body copy</Text>
<Text variant="body-md" weight="semibold">Semibold label</Text>
<Text variant="label-md" italic>Italic label</Text>

// ✗ wrong
<h1 className="text-2xl font-bold">
<p style={{ fontSize: 'var(--body-md-size)', lineHeight: 'var(--body-md-line-height)', fontWeight: 'var(--body-md-weight)' }}>
```

Available variants: `body-sm` | `body-md` | `body-lg` | `heading-xs` | `heading-sm` | `heading-md` | `heading-lg` | `heading-xl` | `label-sm` | `label-md` | `label-lg`

Use `as` to set the HTML element (`h1`, `h2`, `h3`, `p`, `span` — defaults to `span`). Use `className` for color tokens.

### Colors
Never hardcode hex values or Tailwind color names — always our token syntax:

```tsx
// ✓ correct
<div className="bg-(--bg-surface-base) text-(--text-surface-base)">
// ✗ wrong
<div className="bg-white text-gray-900">
```

---

## General Rules

- Never build a custom layout — always use AppLayout
- Never use Tailwind's built-in spacing scale
- Never hardcode hex values, pixel values, or arbitrary colors
- Never write custom CSS classes
- Typography always uses inline styles, never Tailwind classes
- One component per file

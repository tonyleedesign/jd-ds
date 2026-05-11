# Judi Design System Guidelines

## REQUIRED: Theme attribute

There is no `index.html` in this environment. Add this line at the top of `src/app/App.tsx`, outside and above the component function. Without it, all CSS variables are undefined and components will have no styling:

```tsx
document.documentElement.setAttribute("data-theme", "minerva");
```

- `'minerva'` — 16px base, Source Sans 3
- `'evolution'` — 14px base, Inter

---

## Required imports

Import `@make-kits/jh-ds/style.css` once in your global CSS entry point (`src/styles/index.css`):

```css
@import "@make-kits/jh-ds/style.css";
```

In component files, only import the components you actually use — always via relative paths:

```tsx
import { AppLayout } from "../components/layout/AppLayout";
import { SideNavItem } from "../components/navigation/SideNav";
import { Button } from "../components/ui/Button";
import { ButtonGroup } from "../components/ui/ButtonGroup";
import { AddIcon } from "../components/ui/Icon";
```

---

## General Rules

- **Always use `AppLayout` as the page shell. No exceptions — not for simple pages, not for single components, not for prototypes. Every screen must be wrapped in AppLayout.**
- Never build a custom layout or page shell
- Never use Tailwind's built-in spacing scale (`p-4`, `gap-2`, `mt-6`) — these bypass our token system
- Never hardcode hex values, pixel values, or arbitrary colors
- Never write custom CSS classes
- Typography always uses inline styles, never Tailwind classes
- Keep components small — put each in its own file

---

## Building from designs

When a designer shares a screenshot or design to recreate:

1. **Use existing components first** — refer to `components.md` for the full list of available components and their usage. Always use a kit component if it covers the UI before writing anything custom.
2. **If a component doesn't exist in the kit, build it** — create a new file in `src/components/` following the same patterns as existing components. Never inline a one-off component inside a page file.
3. **Custom components must use the token system** — same rules apply as everywhere else: spacing tokens for padding/gap, semantic color tokens for backgrounds/text/borders, inline styles for typography. Never hardcode values.

---

## Themes

Pass `variant` to AppLayout to match the `data-theme` set on `<html>`:

```tsx
<AppLayout variant="minerva" ... />
<AppLayout variant="evolution" ... />
```

---

## Spacing Tokens

Always use semantic spacing tokens as Tailwind classes using this syntax: `p-(--inset-6)`, `gap-(--inline-3)`.

| Intent | Tokens                      | Use for                         |
| ------ | --------------------------- | ------------------------------- |
| Inset  | `--inset-1` → `--inset-7`   | Padding inside containers       |
| Stack  | `--stack-1` → `--stack-5`   | Vertical gap between elements   |
| Inline | `--inline-1` → `--inline-5` | Horizontal gap between elements |
| Layout | `--layout-1` → `--layout-4` | Page-level structure            |

**Decision tree**

- Padding inside a component? → `--inset-*`
- Gap between items in a row? → `--inline-*`
- Gap between items in a column? → `--stack-*`
- Page-level padding? → `--layout-*`

```tsx
// ✓ correct
<div className="p-(--inset-6) gap-(--inline-3) mt-(--stack-4)">

// ✗ wrong
<div className="p-4 gap-3 mt-6">
```

---

## Typography

Always use inline styles — never Tailwind classes:

```tsx
// ✓ correct
<h1 style={{
  fontSize:   'var(--heading-xl-size)',
  lineHeight: 'var(--heading-xl-line-height)',
  fontWeight: 'var(--heading-xl-weight)',
}} />

// ✗ wrong
<h1 className="text-2xl font-bold">
```

**Decision tree**

- Page title? → `--heading-xl`
- Section heading? → `--heading-lg` or `--heading-md`
- Body copy? → `--body-md` (default), `--body-sm` (dense), `--body-lg` (comfortable)
- Form label or metadata? → `--label-md` (default), `--label-sm` (compact)

---

## Color Tokens

Always use semantic color tokens as Tailwind classes:

```tsx
// ✓ correct
<div className="bg-(--bg-surface-base) text-(--text-surface-base)">

// ✗ wrong
<div className="bg-white text-gray-900">
```

**Decision tree**

- Default page or card background? → `--bg-surface-base`
- Page content area? → `--bg-surface-subtle`
- Dark/inverse surface? → `--bg-surface-inverse`
- Default body text? → `--text-surface-base`
- Secondary/muted text? → `--text-surface-subtle`
- Text on dark backgrounds? → `--text-surface-inverse`
- Default border? → `--border-surface-base`

---

## Border Radius

```tsx
className = "rounded-(--radius-sm)"; // 4px — inputs, nav items, badges
className = "rounded-(--radius-md)"; // 8px — cards, modals, dropdowns
className = "rounded-(--radius-lg)"; // 12px — large surfaces
className = "rounded-(--radius-full)"; // pill shapes
```

---

## AppLayout

Every page must use AppLayout — never build a custom layout:

```tsx
import { AppLayout } from "../components/layout/AppLayout";
import { SideNavItem } from "../components/navigation/SideNav";
import { Button } from "../components/ui/Button";
import { ButtonGroup } from "../components/ui/ButtonGroup";
import { AddIcon } from "../components/ui/Icon";

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
  actions={
    <ButtonGroup>
      <Button variant="secondary">Cancel</Button>
      <Button variant="primary" leftIcon={AddIcon}>
        Add Item
      </Button>
    </ButtonGroup>
  }
>
  {/* page content */}
</AppLayout>;
```

Use `onBackClick` to render a Back button — use this on detail or nested pages:

```tsx
<AppLayout
  ...
  onBackClick={() => navigate(-1)}
  title="Case #1234"
>
```

---

## Button

```tsx
import { Button } from '../components/ui/Button'
import { AddIcon, DeleteIcon } from '../components/ui/Icon'

// Variants
<Button variant="primary">Save</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="tertiary">View details</Button>

// With icons
<Button variant="primary" leftIcon={AddIcon}>Add Item</Button>
<Button variant="secondary" iconOnly><DeleteIcon /></Button>

// States
<Button variant="primary" loading>Saving</Button>
<Button variant="primary" disabled>Save</Button>
<Button variant="primary" destructive leftIcon={DeleteIcon}>Delete</Button>
```

---

## ButtonGroup

Wraps related buttons — primary action always rightmost:

```tsx
import { ButtonGroup } from "../components/ui/ButtonGroup";

<ButtonGroup>
  <Button variant="secondary">Cancel</Button>
  <Button variant="primary">Save</Button>
</ButtonGroup>;
```

---

## Icons

```tsx
import { Icon, AddIcon, SearchIcon } from '../components/ui/Icon'

// Standalone
<Icon icon={AddIcon} size="regular" />

// Inside Button — pass as prop, not as JSX
<Button variant="primary" leftIcon={AddIcon}>Add</Button>
```

Available sizes: `small` | `regular` | `large`

---

## SideNavItem

Used inside AppLayout's `sideNavContent` prop:

```tsx
import { SideNavItem } from '../components/navigation/SideNav'

<SideNavItem label="Dashboard" active />
<SideNavItem label="Cases" onClick={() => navigate('/cases')} />
<SideNavItem label="Clients" href="/clients" />
```
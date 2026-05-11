# Tokens

Always use `var(--token-name)` over hardcoded color, spacing, or typography values.

---

## Spacing

### Naming pattern

```
--{intent}-{scale}
```

- `inset` — padding inside a container
- `stack` — vertical gap between elements
- `inline` — horizontal gap between elements
- `layout` — page-level structural spacing

Scale runs 1–7 for inset, 1–5 for stack/inline, 1–4 for layout.

### Values

| Token        | Value | Use                                       |
| ------------ | ----- | ----------------------------------------- |
| `--inset-3`  | 8px   | Button padding, nav items, compact inputs |
| `--inset-4`  | 10px  | Table cells, list items                   |
| `--inset-5`  | 12px  | Default inputs                            |
| `--inset-6`  | 16px  | Cards, panels, header padding             |
| `--inset-7`  | 24px  | Dialogs, page sections, sidenav           |
| `--inline-2` | 8px   | Icon + label gap                          |
| `--inline-3` | 12px  | Between grouped items                     |
| `--inline-4` | 16px  | Between distinct groups                   |
| `--stack-2`  | 8px   | Tightly related items                     |
| `--stack-3`  | 12px  | Related items                             |
| `--stack-4`  | 16px  | Distinct groups                           |
| `--layout-4` | 40px  | Page content padding                      |

### Decision tree

- Padding inside a component? → `--inset-*`
- Gap between items in a row? → `--inline-*`
- Gap between items in a column? → `--stack-*`
- Page-level padding or margin? → `--layout-*`

### Usage in Tailwind

```tsx
// ✓ correct
<div className="p-(--inset-6) gap-(--inline-3) mt-(--stack-4)">

// ✗ wrong — never use Tailwind's built-in scale
<div className="p-4 gap-3 mt-6">
```

---

## Typography

### Naming pattern

```
--{style}-{size}-{property}
```

- Style: `heading`, `body`, `label`
- Size: `xl`, `lg`, `md`, `sm`, `xs`
- Property: `size`, `line-height`, `weight`

### Usage

Always use inline styles — never Tailwind classes for typography:

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

### Decision tree

- Page title? → `--heading-xl`
- Section heading? → `--heading-lg` or `--heading-md`
- Body copy? → `--body-md` (default), `--body-sm` (dense), `--body-lg` (comfortable)
- Form label or metadata? → `--label-md` (default), `--label-sm` (compact)

---

## Color

### Naming pattern

```
--{type}-{surface}-{variant}-{state}
```

- Type: `bg`, `text`, `border`
- Surface: `surface`, `action`, `feedback`, `navigation`
- Variant: `base`, `subtle`, `inverse`, `primary`, `secondary`
- State (optional): `idle`, `hover`, `pressed`, `disabled`

### Decision tree

**Backgrounds**

- Default page or card background? → `--bg-surface-base`
- Page content area (subtle grey)? → `--bg-surface-subtle`
- Primary button? → `--bg-action-primary-idle`
- Global header? → `--bg-navigation-bar`
- Dark/inverse surface? → `--bg-surface-inverse`

**Text**

- Default body text? → `--text-surface-base`
- Secondary or muted text? → `--text-surface-subtle`
- Text on dark backgrounds? → `--text-surface-inverse`

**Borders**

- Default border? → `--border-surface-base`
- Subtle border? → `--border-surface-subtle`

### Usage

```tsx
// ✓ correct
<div className="bg-(--bg-surface-base) text-(--text-surface-base) border-(--border-surface-base)">

// ✗ wrong
<div className="bg-white text-gray-900" style={{ borderColor: '#e5e7eb' }}>
```

---

## Border Radius

### Naming pattern

```
--radius-{size}
```

### Decision tree

- Input fields, nav items, badges? → `--radius-sm` (4px)
- Cards, modals, dropdowns? → `--radius-md` (8px)
- Large surfaces? → `--radius-lg` (12px)
- Pill / fully rounded? → `--radius-full`

```tsx
className = "rounded-(--radius-sm)";
className = "rounded-(--radius-md)";
className = "rounded-(--radius-full)";
```
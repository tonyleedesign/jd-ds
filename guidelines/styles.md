# Styles

## Layout Principles

- Always use `flexbox` or `grid` for layout — never absolute positioning unless unavoidable
- Page content is padded using `p-(--layout-4)` (40px) on all sides
- The page shell is always `AppLayout` — it handles the header, sidebar, and content area automatically
- Never set a fixed height on containers — let content drive height

---

## Spacing Scale

Base unit is 4px. Always reference via semantic tokens — never raw pixel or Tailwind values.

| Token        | Value | Typical use             |
| ------------ | ----- | ----------------------- |
| `--inset-1`  | 4px   | Badges, tight chips     |
| `--inset-2`  | 6px   | Dense table cells       |
| `--inset-3`  | 8px   | Buttons, nav items      |
| `--inset-4`  | 10px  | Table cells, list items |
| `--inset-5`  | 12px  | Inputs                  |
| `--inset-6`  | 16px  | Cards, panels           |
| `--inset-7`  | 24px  | Dialogs, page sections  |
| `--inline-2` | 8px   | Icon + label            |
| `--inline-3` | 12px  | Between grouped items   |
| `--inline-4` | 16px  | Between distinct groups |
| `--stack-2`  | 8px   | Tightly related items   |
| `--stack-3`  | 12px  | Related items           |
| `--stack-4`  | 16px  | Distinct groups         |
| `--stack-5`  | 24px  | Major sections          |
| `--layout-4` | 40px  | Page content padding    |

---

## Typography Hierarchy

All typography uses inline styles. Never use Tailwind for font size, weight, or line height.

| Level           | Token          | Use                          |
| --------------- | -------------- | ---------------------------- |
| Page title      | `--heading-xl` | Main page title in ActionBar |
| Section heading | `--heading-lg` | Major content sections       |
| Card heading    | `--heading-md` | Card or panel titles         |
| Sub-heading     | `--heading-sm` | Sub-sections                 |
| Body default    | `--body-md`    | Standard paragraph text      |
| Body dense      | `--body-sm`    | Tables, metadata, captions   |
| Body large      | `--body-lg`    | Intro or featured text       |
| Form label      | `--label-md`   | Input labels, table headers  |
| Small label     | `--label-sm`   | Compact metadata, badges     |

```tsx
// Page title
<h1 style={{ fontSize: 'var(--heading-xl-size)', lineHeight: 'var(--heading-xl-line-height)', fontWeight: 'var(--heading-xl-weight)' }}>

// Body text
<p style={{ fontSize: 'var(--body-md-size)', lineHeight: 'var(--body-md-line-height)', fontWeight: 'var(--body-md-weight)' }}>

// Label
<span style={{ fontSize: 'var(--label-sm-size)', lineHeight: 'var(--label-sm-line-height)', fontWeight: 'var(--label-sm-weight)' }}>
```

---

## Border Radius

| Token           | Value  | Use                                |
| --------------- | ------ | ---------------------------------- |
| `--radius-sm`   | 4px    | Buttons, inputs, nav items, badges |
| `--radius-md`   | 8px    | Cards, modals, dropdowns, panels   |
| `--radius-lg`   | 12px   | Large cards, sheets                |
| `--radius-xl`   | 16px   | Feature cards                      |
| `--radius-full` | 9999px | Pills, avatars, circular buttons   |

---

## Color Usage

| Context                  | Token                      |
| ------------------------ | -------------------------- |
| Page background          | `--bg-surface-base`        |
| Content area background  | `--bg-surface-subtle`      |
| Card or panel background | `--bg-surface-base`        |
| Primary button           | `--bg-action-primary-idle` |
| Global header            | `--bg-navigation-bar`      |
| Default text             | `--text-surface-base`      |
| Muted / secondary text   | `--text-surface-subtle`    |
| Text on dark backgrounds | `--text-surface-inverse`   |
| Default border           | `--border-surface-base`    |
| Subtle border            | `--border-surface-subtle`  |

---

## Responsive Behaviour

- Stack horizontally on desktop, vertically on mobile using `flex-col sm:flex-row`
- The sidebar collapses automatically — never override its width or visibility
- Content area fills remaining width automatically via `flex-1`
- Avoid fixed widths on content containers — use `max-w-*` with `w-full` if you need to constrain width
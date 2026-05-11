import { spacing } from '../primitive/spacing.js'

// ─── Minerva ──────────────────────────────────────────────────────────────────

const minervaSpacing = {

  // ─── Base scale (pass-through from primitive) ────────────────────────────
  'space-0':  spacing['space-0'],
  'space-1':  spacing['space-1'],
  'space-2':  spacing['space-2'],
  'space-4':  spacing['space-4'],
  'space-6':  spacing['space-6'],
  'space-8':  spacing['space-8'],
  'space-9':  spacing['space-9'],
  'space-10': spacing['space-10'],
  'space-11': spacing['space-11'],
  'space-12': spacing['space-12'],
  'space-16': spacing['space-16'],
  'space-20': spacing['space-20'],
  'space-24': spacing['space-24'],
  'space-30': spacing['space-30'],
  'space-32': spacing['space-32'],
  'space-36': spacing['space-36'],
  'space-40': spacing['space-40'],

  // ─── Inset — padding inside containers ───────────────────────────────────
  'inset-1': spacing['space-4'],   //  4px — badges, tight chips
  'inset-2': spacing['space-6'],   //  6px — dense table cells
  'inset-3': spacing['space-8'],   //  8px — compact inputs, nav items
  'inset-4': spacing['space-10'],  // 10px — default table cells, list items
  'inset-5': spacing['space-12'],  // 12px — comfortable inputs
  'inset-6': spacing['space-16'],  // 16px — cards, panels
  'inset-7': spacing['space-24'],  // 24px — dialogs, page sections

  // ─── Stack — vertical gap between elements ────────────────────────────────
  'stack-1': spacing['space-4'],   //  4px — icon + label, tightly related
  'stack-2': spacing['space-8'],   //  8px — between related items
  'stack-3': spacing['space-12'],  // 12px — between grouped items
  'stack-4': spacing['space-16'],  // 16px — between distinct groups
  'stack-5': spacing['space-24'],  // 24px — between major sections

  // ─── Inline — horizontal gap between elements ─────────────────────────────
  'inline-1': spacing['space-4'],  //  4px — icon + label, tight pairs
  'inline-2': spacing['space-8'],  //  8px — button groups, tags
  'inline-3': spacing['space-12'], // 12px — form fields side by side
  'inline-4': spacing['space-16'], // 16px — card grid columns
  'inline-5': spacing['space-24'], // 24px — wide column gaps

  // ─── Layout — page-level structure ───────────────────────────────────────
  'layout-1': spacing['space-16'], // 16px — TBC
  'layout-2': spacing['space-24'], // 24px
  'layout-3': spacing['space-32'], // 32px
  'layout-4': spacing['space-40'], // 40px

  // ─── Component ────────────────────────────────────────────────────────────
  'sidenav-width-expanded': '256px',

} as const

// ─── Evolution (placeholder — values to be confirmed in Figma) ───────────────

const evolutionSpacing = {
  ...minervaSpacing,

  // ─── Inset ────────────────────────────────────────────────────────────────
  // TODO: fill in tightened Evolution values
  // 'inset-1': spacing['space-2'],
  // 'inset-2': spacing['space-4'],
  // ...

  // ─── Stack ────────────────────────────────────────────────────────────────
  // TODO: fill in tightened Evolution values

  // ─── Inline ───────────────────────────────────────────────────────────────
  // TODO: fill in tightened Evolution values

  // ─── Layout ───────────────────────────────────────────────────────────────
  // TODO: fill in tightened Evolution values

} as const

export const spacingThemes = {
  minerva:   minervaSpacing,
  evolution: evolutionSpacing,
}

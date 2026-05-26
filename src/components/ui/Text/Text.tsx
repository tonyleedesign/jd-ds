import type { ReactNode, ElementType, CSSProperties, HTMLAttributes } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

export type TextVariant =
  | 'body-sm' | 'body-md' | 'body-lg'
  | 'heading-xs' | 'heading-sm' | 'heading-md' | 'heading-lg' | 'heading-xl'
  | 'label-sm' | 'label-md' | 'label-lg'
  | 'tag-label'

export type TextWeight = 'regular' | 'semibold'

export interface TextProps extends Omit<HTMLAttributes<HTMLElement>, 'style' | 'className' | 'children'> {
  /** Typography variant — controls font size and line height */
  variant: TextVariant
  /** Override the variant's default weight */
  weight?: TextWeight
  /** Render as italic */
  italic?: boolean
  /** Render with underline */
  underline?: boolean
  /** HTML element to render — defaults to span */
  as?: ElementType
  /** Extra inline styles (e.g. margin resets) — merged with typography styles */
  style?: CSSProperties
  className?: string
  children?: ReactNode
}

// ─── Lookup tables ────────────────────────────────────────────────────────────

type VariantStyle = {
  fontSize:   string
  lineHeight: string
  fontWeight: string
}

const VARIANT_STYLES: Record<TextVariant, VariantStyle> = {
  'body-sm':    { fontSize: 'var(--body-sm-size)',     lineHeight: 'var(--body-sm-line-height)',     fontWeight: 'var(--body-sm-weight)'    },
  'body-md':    { fontSize: 'var(--body-md-size)',     lineHeight: 'var(--body-md-line-height)',     fontWeight: 'var(--body-md-weight)'    },
  'body-lg':    { fontSize: 'var(--body-lg-size)',     lineHeight: 'var(--body-lg-line-height)',     fontWeight: 'var(--body-lg-weight)'    },
  'heading-xs': { fontSize: 'var(--heading-xs-size)',  lineHeight: 'var(--heading-xs-line-height)',  fontWeight: 'var(--heading-xs-weight)' },
  'heading-sm': { fontSize: 'var(--heading-sm-size)',  lineHeight: 'var(--heading-sm-line-height)',  fontWeight: 'var(--heading-sm-weight)' },
  'heading-md': { fontSize: 'var(--heading-md-size)',  lineHeight: 'var(--heading-md-line-height)',  fontWeight: 'var(--heading-md-weight)' },
  'heading-lg': { fontSize: 'var(--heading-lg-size)',  lineHeight: 'var(--heading-lg-line-height)',  fontWeight: 'var(--heading-lg-weight)' },
  'heading-xl': { fontSize: 'var(--heading-xl-size)',  lineHeight: 'var(--heading-xl-line-height)',  fontWeight: 'var(--heading-xl-weight)' },
  'label-sm':   { fontSize: 'var(--label-sm-size)',    lineHeight: 'var(--label-sm-line-height)',    fontWeight: 'var(--label-sm-weight)'   },
  'label-md':   { fontSize: 'var(--label-md-size)',    lineHeight: 'var(--label-md-line-height)',    fontWeight: 'var(--label-md-weight)'   },
  'label-lg':   { fontSize: 'var(--label-lg-size)',    lineHeight: 'var(--label-lg-line-height)',    fontWeight: 'var(--label-lg-weight)'   },
  'tag-label':  { fontSize: 'var(--tag-label-size)',   lineHeight: 'var(--tag-label-line-height)',   fontWeight: 'var(--tag-label-weight)'  },
}

const WEIGHT_TOKENS: Record<TextWeight, string> = {
  regular:  'var(--font-weight-regular)',
  semibold: 'var(--font-weight-semibold)',
}

// ─── Component ────────────────────────────────────────────────────────────────

export function Text({
  variant,
  weight,
  italic    = false,
  underline = false,
  as: Tag   = 'span',
  style: extraStyle,
  className = '',
  children,
  ...rest
}: TextProps) {
  const { fontSize, lineHeight, fontWeight: defaultWeight } = VARIANT_STYLES[variant]

  const style: CSSProperties = {
    fontSize,
    lineHeight,
    fontWeight:     weight ? WEIGHT_TOKENS[weight] : defaultWeight,
    fontStyle:      italic    ? 'italic'    : undefined,
    textDecoration: underline ? 'underline' : undefined,
    ...extraStyle,
  }

  return (
    <Tag className={className} style={style} {...rest}>
      {children}
    </Tag>
  )
}

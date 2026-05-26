import { fontFamily, fontSize, lineHeight, fontWeight } from '../primitive/typography.js'

const minervaTypography = {
  // ─── Fonts ────────────────────────────────────────────────────────────────
  'font-base': fontFamily['source-sans-3'],
  'font-code': fontFamily['fira-code'],

  // ─── Font Weights ─────────────────────────────────────────────────────────
  'font-weight-regular':  fontWeight['regular'],
  'font-weight-semibold': fontWeight['semibold'],

  // ─── Body ─────────────────────────────────────────────────────────────────
  'body-sm-size':        fontSize['100'],   // 12px / 0.75rem
  'body-sm-line-height': lineHeight['200'], // 16px / 1rem
  'body-sm-weight':      fontWeight['regular'],

  'body-md-size':        fontSize['200'],   // 14px / 0.875rem
  'body-md-line-height': lineHeight['400'], // 20px / 1.25rem
  'body-md-weight':      fontWeight['regular'],

  'body-lg-size':        fontSize['400'],   // 16px / 1rem
  'body-lg-line-height': lineHeight['500'], // 24px / 1.5rem
  'body-lg-weight':      fontWeight['regular'],

  // ─── Heading ──────────────────────────────────────────────────────────────
  'heading-xs-size':        fontSize['400'],
  'heading-xs-line-height': lineHeight['400'],
  'heading-xs-weight':      fontWeight['semibold'],

  'heading-sm-size':        fontSize['500'],
  'heading-sm-line-height': lineHeight['500'],
  'heading-sm-weight':      fontWeight['semibold'],

  'heading-md-size':        fontSize['600'],
  'heading-md-line-height': lineHeight['550'],
  'heading-md-weight':      fontWeight['semibold'],

  'heading-lg-size':        fontSize['700'],
  'heading-lg-line-height': lineHeight['600'],
  'heading-lg-weight':      fontWeight['semibold'],

  'heading-xl-size':        fontSize['800'],
  'heading-xl-line-height': lineHeight['700'],
  'heading-xl-weight':      fontWeight['semibold'],

  // ─── Label ────────────────────────────────────────────────────────────────
  'label-sm-size':        fontSize['050'],
  'label-sm-line-height': lineHeight['050'],
  'label-sm-weight':      fontWeight['semibold'],

  'label-md-size':        fontSize['100'],
  'label-md-line-height': lineHeight['100'],
  'label-md-weight':      fontWeight['semibold'],

  'label-lg-size':        fontSize['200'],
  'label-lg-line-height': lineHeight['200'],
  'label-lg-weight':      fontWeight['semibold'],

  // ─── Global Header ────────────────────────────────────────────────────────
  'global-header-module-title-size':        fontSize['200'],
  'global-header-module-title-line-height': lineHeight['100'],
  'global-header-module-title-weight':      fontWeight['semibold'],

  // ─── Breadcrumb ───────────────────────────────────────────────────────────
  'breadcrumb-label-size':        fontSize['050'],   // 10px / 0.625rem
  'breadcrumb-label-line-height': lineHeight['200'], // 16px / 1rem
  'breadcrumb-label-weight':      fontWeight['regular'],

  // ─── Menu ─────────────────────────────────────────────────────────────────
  'menu-item-lg-size':        fontSize['400'],   // 16px / 1rem
  'menu-item-lg-line-height': lineHeight['500'], // 24px / 1.5rem
  'menu-item-lg-weight':      fontWeight['regular'],

  // ─── Button Label ─────────────────────────────────────────────────────────
  'button-label-size':        fontSize['300'],
  'button-label-line-height': lineHeight['400'],
  'button-label-weight':      fontWeight['semibold'],

  // ─── Tag Label ────────────────────────────────────────────────────────────
  'tag-label-size':        fontSize['100'],   // 12px / 0.75rem
  'tag-label-line-height': lineHeight['050'], // 12px / 0.75rem (tight, fits pill shape)
  'tag-label-weight':      fontWeight['semibold'],
} as const

const evolutionTypography = {
  ...minervaTypography,

  // ─── Fonts ────────────────────────────────────────────────────────────────
  'font-base': fontFamily['inter'],
} as const

export const typographyThemes = {
  minerva:   minervaTypography,
  evolution: evolutionTypography,
}

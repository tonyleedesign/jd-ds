import { writeFileSync } from 'fs'
import { themes } from './semantic/index.js'

function generateThemeBlock(themeName: string, tokens: Record<string, string>): string {
  const vars = Object.entries(tokens)
    .map(([key, value]) => `  --${key}: ${value};`)
    .join('\n')
  return `:root[data-theme="${themeName}"] {\n${vars}\n}`
}

const css = Object.entries(themes)
  .map(([themeName, tokens]) => generateThemeBlock(themeName, tokens))
  .join('\n\n')

const outputPath = new URL('../styles/themes.css', import.meta.url)
writeFileSync(outputPath, css + '\n')

console.log('themes.css generated')

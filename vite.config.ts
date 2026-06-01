import { defineConfig } from 'vite'
import path, { resolve } from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    dts({
      include:          ['src/components'],
      tsconfigPath:     './tsconfig.app.json',
      skipDiagnostics:  true,
      rollupTypes:      true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg'],
  build: {
    lib: {
      entry:    resolve(__dirname, 'src/components/index.ts'),
      formats:  ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom'],
    },
  },
})

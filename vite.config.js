import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@mock': path.resolve(__dirname, 'src/mock'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@remote': path.resolve(__dirname, 'src/remote'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
})

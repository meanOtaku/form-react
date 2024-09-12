import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    dts(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'form-react',
      // the proper extensions will be added
      formats: ['es'],
      fileName: 'form-react',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
})

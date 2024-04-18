import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    libInjectCss(),
    dts(
      {
        insertTypesEntry: true,
        include: [],
        exclude: ['node_modules/**', '**/stories/**']
      }
    )
  ],
  resolve: {
    alias: {
      src: resolve('src/'),
    }
  },
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'foundation-ui-kit',
      fileName: 'main',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        assetFileNames: 'assets/[name][extname]',
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
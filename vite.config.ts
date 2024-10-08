import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react(), svgr()],
   resolve: {
      alias: [
         { find: '@', replacement: path.resolve(__dirname, 'src') },
         { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
         { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
         { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      ],
   },
   server: {
      open: true,
   },
})

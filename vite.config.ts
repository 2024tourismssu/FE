import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   resolve: {
      alias: [
         { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
         { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
         { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      ],
   },
   server: {
      open: true, // 개발 서버 시작 시 브라우저 자동으로 열기
   },
})

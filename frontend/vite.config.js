import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  //这个resolve是添加的别名
  resolve: {
    alias: [
      {
        find: "@",
        replacement: "/src",
      },
    ]
  },
  server: {
    proxy: {
      '/api': {
        target: '',//反向代理地址
        changeOrigin: true, 
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement:"/src" },
      { find: "@components", replacement:"/src/components" },
      { find: "@images", replacement:"/src/assets/images" },
      { find: "@styles", replacement:"/src/styles" },
      { find: "@types", replacement:"/src/types" },
    ]
  }
})

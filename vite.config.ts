import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5173,
    open: false
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        courses: resolve(__dirname, 'courses.html'),
        courseDetail: resolve(__dirname, 'course-detail.html'),
        results: resolve(__dirname, 'results.html'),
        batches: resolve(__dirname, 'batches.html'),
        photos: resolve(__dirname, 'photos.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
      }
    }
  }
})

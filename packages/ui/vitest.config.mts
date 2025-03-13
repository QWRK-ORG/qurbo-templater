import react from '@vitejs/plugin-react'
import { defineProject } from 'vitest/config'

export default defineProject({
  //@ts-ignore
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts']
  }
})

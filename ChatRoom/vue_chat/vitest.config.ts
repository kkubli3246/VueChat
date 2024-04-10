import { fileURLToPath } from 'node:url'
import {resolve} from 'node:path'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({  
    resolve: {
      alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
    },
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url))
    }
  })
)

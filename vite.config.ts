// vite cfg
import { defineConfig } from 'vite'
// support vue temp
import vue from '@vitejs/plugin-vue'
// support vue jsx
import vueJsx from '@vitejs/plugin-vue-jsx'
// auto import
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // vite plugins
  plugins: [
    vue(),
    vueJsx(),
    Components({ resolvers: [AntDesignVueResolver()] })
  ]
})

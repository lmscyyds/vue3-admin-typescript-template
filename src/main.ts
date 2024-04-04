import '@/utils/system.copyright'

import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

import Message from 'vue-m-message'
import 'vue-m-message/dist/style.css'

import 'overlayscrollbars/overlayscrollbars.css'

import VForm3 from 'vform3-builds'

// 引入VForm3库
import App from './App.vue'
import pinia from './store'
import router from './router'
import ui from './ui-provider'

// 引入低代码VForm3
import 'vform3-builds/dist/designer.style.css'

// 引入VForm3样式

// 自定义指令
import directive from '@/utils/directive'

// 加载 svg 图标
import 'virtual:svg-icons-register'

// 加载 iconify 图标
import { downloadAndInstall } from '@/iconify'
import icons from '@/iconify/index.json'

import 'virtual:uno.css'

// 全局样式
import '@/assets/styles/globals.scss'
import '@/assets/styles/common.scss'
import '@/assets/styles/element.scss'
import '@/assets/styles/element-dark.scss'

const app = createApp(App)
app.use(FloatingVue, {
  distance: 12,
})
app.use(Message)
app.use(pinia)
app.use(router)
app.use(ui)
app.use(VForm3)
directive(app)
if (icons.isOfflineUse) {
  for (const info of icons.collections) {
    downloadAndInstall(info)
  }
}

app.mount('#app')

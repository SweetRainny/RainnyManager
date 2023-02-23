import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import './styles/index.scss'
import SvgIcon from '@/components/SvgIcon/index.vue'
import iconLoad  from './icons/index'

const app = createApp(App)

app.use(router)

app.use(store)

app.component('svg-icon', SvgIcon)

iconLoad(app)

app.mount('#app')

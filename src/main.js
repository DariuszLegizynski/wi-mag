import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import IconItem from './components/icons/IconItem.vue'

import './styles/main.css'

const app = createApp(App)

app.component("IconItem", IconItem)

app.use(createPinia())
app.use(router)

app.mount('#app')

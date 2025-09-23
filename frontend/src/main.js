import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/less/index.less"
import router from "./router"

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);
app.use(ElementPlus).use(router).mount('#app');


//createApp(App).mount('#app')

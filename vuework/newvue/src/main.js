// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import TodoItem from './components/TodoItem.vue'
import router from './router'

const app = createApp(App)
// app.component("FoodItem",FoodItem);
app.component("TodoItem",TodoItem);
app.use(createPinia())
app.use(router)

app.mount('#app')

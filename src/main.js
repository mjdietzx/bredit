import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import './index.css'
import App from './App.vue'

import Article from './pages/Article.vue'
import Home from './pages/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/article', component: Article },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')

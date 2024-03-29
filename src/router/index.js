import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/offer',
      name: 'Offer',
      component: () => import('@/views/OfferView.vue')
    },
    // {
    //   path: '/offer/productList/:id/',
    //   name: 'productList',
    //   component: () => import('@/views/ProductListView.vue')
    // },
    {
      path: '/offer/product/:id/',
      name: 'product',
      component: () => import('@/views/ProductView.vue')
    }
  ],
  scrollBehavior(to) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (to.hash) {
          resolve({
            el: to.hash,
            behavior: 'smooth'
          })
        }
        resolve({ left: 0, top: 0 })
      }, 200)})
  }
})

export default router

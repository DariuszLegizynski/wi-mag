import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"
// import OfferView from "@/views/OfferView.vue"

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/offer',
      name: 'Offer',
      component: () => import('@/views/OfferView.vue')
    },
    {
      path: '/offer/productList/:id/',
      name: 'productList',
      component: () => import('@/views/ProductListView.vue')
    },
    {
      path: '/offer/product/:id/',
      name: 'product',
      component: () => import('@/views/ProductView.vue')
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0, left: 0 }
  }
})

export default router

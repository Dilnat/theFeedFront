import { createRouter, createWebHistory } from 'vue-router'
import Feed from '@/views/Feed.vue'
import AllUsers from "@/views/AllUsers.vue";

const router = createRouter({
  history: createWebHistory(''),
  routes: [
    {
      path: '/',
      component: Feed
    },
    {
      path: '/feed',
      component: Feed
    },
    {
      path: '/users',
      component: AllUsers
    }
  ]
})

export default router
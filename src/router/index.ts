import { createRouter, createWebHistory } from 'vue-router'
import Feed from '@/views/Feed.vue'
import AllUsers from "@/views/AllUsers.vue";
import SingleMessage from "@/views/SingleMessage.vue";
import SingleUser from "@/views/SingleUser.vue";

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
      name:'AllUsers',
      component: AllUsers
    },
    {
      path:'/feed/:id',
      name : 'singleMessage',
      component:SingleMessage
    },
    {
      path:'/users/:id',
      name:'singleUser',
      component:SingleUser
    }
  ]
})

export default router
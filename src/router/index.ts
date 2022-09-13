import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
      path: '/goodList',
      name: 'GoodList',
      meta: {
        isShow: true,
        title: '商品列表'
      },
      component: () => import('../views/GoodList.vue'),
    },
    {
      path: '/userList',
      name: 'UserList',
      meta: {
        isShow: true,
        title: '用户中心'
      },
      component: () => import('../views/UserList.vue'),
    }, {
      path: '/about',
      name: 'About',
      meta: {
        isShow: true,
        title: '关于'
      },
      component: () => import('../views/About.vue'),
    },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

// createRouter 创建router实例对象
// createWebHistory 创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Detail from '@/views/Detail/index.vue'
import Login from '@/views/Login/index.vue'
import Register from '@/views/Login/register.vue'
import Pay from '@/views/Pay/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component对应关系的位置
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'category/:id',
          component: Home
        },
        {
          path: 'detail/:id',
          component: Detail,
          beforeEnter(to, from, next) {
            // 进入 detail/:id 路由时设置滚动位置
            window.scrollTo({
              top: 50,
              behavior: 'smooth'
            })
            next()
          }
        },
        {
          path:'pay',
          component:Pay
        }

      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    }
  ],
  // 路由滚动行为配置项 全局配置
  // scrollBehavior(){
  //   return {
  //     top:50
  //   }
  // }
},)

export default router

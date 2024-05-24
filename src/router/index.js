// createRouter 创建router实例对象
// createWebHistory 创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component对应关系的位置
  routes: [
    {
      path: '/',
      component: Layout,
      children:[
        {
          path:'',
          component:Home
        },
        {
          path:'category/:id',
          component:Home
        },

      ]
    },
  ],
  // 路由滚动行为配置项
  scrollBehavior(){
    return {
      top:0
    }
  }
})

export default router

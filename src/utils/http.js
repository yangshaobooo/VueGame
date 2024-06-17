// axios基础的封装
import axios from "axios"
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores/user'
import router from '@/router'

const httpInstance = axios.create({
    baseURL: "http://localhost:8081/webGame",
    // baseURL: "http://101.126.76.114:8081/webGame",
    timeout: 5000
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    // 1.从pinia获取token数据
    const userStore = useUserStore()
    // 2.按照后端要求拼接token数据
    const token = userStore.userInfo.token
    if(token){
        config.headers.Authorization=`Bearer ${token}`
    }
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    console.log(e)
    // 统一错误提示
    ElMessage({
        type: 'warning',
        message: e.response.data.status_msg
    })
    // 401 token失效处理
    const userStore = useUserStore()
    // 1.清除本地用户数据
    // 2.跳转登录页
    if (e.response.status === 401) {
        userStore.clearUserInfo()
        router.push('/login')
    }
    return Promise.reject(e)
})

export default httpInstance
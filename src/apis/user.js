// 封装和用户相关的接口函数

import httpInstance from '@/utils/http'

export const loginAPI=({username,password})=>{
    return httpInstance({
        url:'/login',
        method:'POST',
        data:{
            username,
            password
        }
    })
}

export const registerAPI=({username,password,email})=>{
    return httpInstance({
        url:'register',
        method:'POST',
        data:{
            username,
            password,
            email
        }
    })
}
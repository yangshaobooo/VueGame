
import httpInstance from "@/utils/http"
export function getCategoryAPI(){
    return httpInstance({
        url:'/category'
    })
}
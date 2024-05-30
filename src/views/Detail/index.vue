<script setup>
import { onMounted, ref } from 'vue'
import { getGameDetailAPI } from '@/apis/game'
import { useRoute } from 'vue-router'

const route = useRoute()
const detail = ref({})
const getDetail = async () => {
    let res = await getGameDetailAPI(route.params.id)
    detail.value = res
}
onMounted(() => getDetail())
</script>


<template>
    <h1 v-if="detail.game">{{ detail.game.GameName }}</h1>
</template>

<style scoped lang='scss'>
h1 {
    background-color: #fff;
    font-style: italic; 
    text-align: center;
}
</style>
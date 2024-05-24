<!-- 游戏列表页面 -->

<script setup>
import HomePanel from './HomePanel.vue'
import GameItem from './GameItem.vue'
import { getGamesAPI, getCategoryGamesAPI } from '@/apis/game'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'


const route = useRoute()
const gameList = ref([])
const gameName = ref('')
const currentPage = ref(1) // 当前页码
const total =ref(0)
const pageSize = ref(15)

const getGameList = async (page = 1) => {
    let res
    if (route.params.id == undefined) {
        res = await getGamesAPI(page)
    } else {
        res = await getCategoryGamesAPI(route.params.id, page)
    }
    gameList.value = res.games
    gameName.value = res.game_category;
    total.value = res.total
}
const handlePageChange = (page) => {
    currentPage.value = page
    getGameList(page)
    window.scrollTo({ top: 310, behavior: 'auto' })
}
onMounted(() => getGameList())
watch(() => route.params.id, async () => {
    currentPage.value=1
    await getGameList()
})
</script>

<template>
    <HomePanel :title=gameName>
        <div class="box">
            <ul class="game-list">
                <li v-for="games in gameList" :key="games.GameID">
                    <GameItem :games="games" />
                </li>
            </ul>
        </div>
        <div class="splitPage">
            <el-pagination background layout="prev, pager, next" 
            :total="total"
            :page-size="pageSize"
            :current-page="currentPage"
            @current-change="handlePageChange" />
        </div>
    </HomePanel>
</template>

<style scoped lang='scss'>
.splitPage {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.box {
    padding-left: 20px;
    background: #fff;
    display: flex;
    justify-content: center;
    /* 水平居中 */
}

a {
    padding: 2px 1px;
    font-size: 16px;
    border-radius: 4px;

    &:hover {
        background: rgb(226, 247, 199);
    }

    &:last-child {
        margin-right: 80px;
    }
}

.game-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    li {
        width: 400px;
        height: 330px;
        // margin-right: 10px;
        margin-bottom: 10px;

        &:nth-last-child(-n + 4) {
            margin-bottom: 0;
        }

        &:nth-child(4n) {
            margin-right: 0;
        }
    }
}
</style>
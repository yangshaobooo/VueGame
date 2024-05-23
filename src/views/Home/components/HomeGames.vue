<script setup>
import HomePanel from './HomePanel.vue'
import GameItem from './GameItem.vue'
import { getGamesAPI } from '@/apis/game'
import { onMounted, ref } from 'vue'

const gameList = ref([])
const getGameList = async () => {
    const res = await getGamesAPI(1)
    gameList.value = res.games
}
onMounted(() => getGameList())

</script>

<template>
    <HomePanel title="首页：全部游戏">
        <div class="box">
            <ul class="game-list">
                <li v-for="games in gameList" :key="games.GameID">
                    <GameItem :games="games" />
                </li>
            </ul>
        </div>
    </HomePanel>
</template>

<style scoped lang='scss'>
.box {
    padding-left: 20px;
    background: #fff;
    display: flex;
    justify-content: center; /* 水平居中 */
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
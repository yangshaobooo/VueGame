<script setup>
import { onMounted, ref } from 'vue'
import { getGameDetailAPI } from '@/apis/game'
import { useRoute } from 'vue-router'
import ImageView from '@/components/ImageView/index.vue'
import TitleGif from './components/TitleGif.vue'

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
    <div class="box" v-if="detail.game">
        <!-- 视频部分 -->
        <div class="video-part">
            <video :src="detail?.detailParse?.video" controls></video>
            <div class="game-part">
                <img :src="detail.game.ImageUrl" alt="" />
                <p class="introduce">{{ detail.game.Introduce }}</p>
                <div class="tags">
                    <el-tag type="warning" effect="dark" round>{{ detail.game.CategoryName }}</el-tag>
                    <el-tag type="primary" effect="dark" round>游戏大小: {{ detail.game.Size }}</el-tag>
                    <el-tag type="danger" round>
                        {{ detail.game.Price === 0 ? '免费游戏' : 'VIP免费' }}
                    </el-tag>
                </div>
            </div>
        </div>
        <!-- 图片部分 -->
        <ImageView :image-list="detail?.detailParse?.pictures" />

        <!-- 标题和动图部分 -->
        <div class="gif-part" v-if="detail.detailParse">
            <div class="left">
                <TitleGif :detailParse="detail.detailParse" />
            </div>
            <div class="right">这是下载提示部分</div>
        </div>
    </div>

</template>


<style scoped lang='scss'>
h1 {
    background-color: rgba(27, 40, 56, 1.0);
    font-style: italic;
    text-align: center;
    color: #fff;
    padding-top: 20px;
}

// 整体布局
.box {
    background-color: rgba(27, 40, 56, 1.0);
    background-image: url("@/assets/images/longback.png"); /* 背景图片路径 */
    background-blend-mode: overlay; /* 图片与颜色的混合模式 */
    background-size: 100% auto; /* 背景图片在水平方向铺满，垂直方向自动 */
    display: flex;
    align-items: center;
    flex-direction: column;
}

.gif-part {
    padding-top: 30px;
    width: 900px;
    display: flex;
    justify-content: space-between;
    .left {
        flex: 3;
        padding-right: 20px;
    }
    .right {
        flex:1;
        background-color: #fff;
        width: 600px;
    }
}

// 第一行视频相关布局
.video-part {
    padding-top: 20px;
    width: 900px;
    display: flex;
    justify-content: center;

    // 左侧视频
    video {
        width: 560px;
        height: auto;
    }

    // 右侧游戏描述
    .game-part {
        padding-left: 20px;

        .introduce {
            margin-top: 10px;
            color: #fff;
        }

        .tags {
            margin: 10px;
            display: flex;
            justify-content: space-around;
        }
    }
}
</style>
<!-- 游戏详细描述：包含标题、gif、文字 -->
<script setup>
defineProps({
    detailParse: {
        type: Object,
        default: () => { }
    }
})
</script>

<template>
    <p class="fixedTitle">关于这款游戏</p>
    <p class="description">{{ detailParse.description }}</p>
    <ul class="titleGif-list">
        <li v-for="titleGif in detailParse.titleGifs" :key="titleGif.title">
            <div>
                <p class="title">{{ titleGif.title }}</p>
            </div>
            <img :src="titleGif.gif" alt="">
            <div>
                <p class="text">{{ titleGif.text }}</p>
            </div>
        </li>
    </ul>

</template>

<style scoped lang='scss'>
.fixedTitle{
    color: rgb(67, 189, 189);
    font-size: 25px;
}
.description{
    color: #fff;
    margin-bottom: 8px;
}
.titleGif-list{
    .title{
        color: rgb(67, 189, 189);
        margin-bottom: 8px;
        font-size: 20px;
    }
    img{
        width: 100%;
    }
    .text{
        color: #fff;
        margin-bottom: 18px;
        margin-top: 8px;
    }
}
</style>
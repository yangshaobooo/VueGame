<script setup>
defineProps({
    gameDownloads: {
        type: Array,
        default: () => []
    }
})
</script>

<template>
    <div class="title">下载链接</div>
    <ul class="titleGif-list">
        <li v-for="download in gameDownloads" :key="download.GameID">
            <a :href="download.Link" target="_blank">  
                <el-button color="#2a4fb5">{{ download.Source }}</el-button>
            </a>
        </li>
    </ul>
    <div class="title">下载说明</div>
</template>

<style scoped lang='scss'>
.title {
    color: #aeb9d9;
    font-style: italic;
    /* 设置字体为斜体 */
    padding-top: 10px;
    padding-bottom: 10px;
}

li {
    margin-bottom: 15px;
}
</style>
<!-- 游戏标题+列表区域 -->

<script setup>
// 定义props
defineProps({
    // 主标题
    title: {}
})
</script>


<template>
    <div class="home-panel">
        <div class="container">
            <div class="head">
                <!-- 主标题和副标题 -->
                <h3>
                    {{ title }}
                </h3>
            </div>
            <!-- 主体内容区域 -->
            <slot />
        </div>
    </div>
</template>

<style scoped lang='scss'>
.home-panel {
    background-color: #fff;

    .head {
        padding-top: 15px;
        padding-bottom: 10px;
        display: flex;
        align-items: flex-end;

        h3 {
            flex: 1;
            font-size: 22px;
            font-weight: normal;
            margin-left: 26px;
            height: 22px;
            line-height: 22px;
        }
    }
}
</style>
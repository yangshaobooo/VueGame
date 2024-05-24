<!-- 通栏页面，承诺文字，搜索框界面 -->

<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input = ref('')
</script>

<template>
    <div class="fullbox">
        <div>
            <h2>我们承诺：游戏版本持续免费更新，绝无二次收费，让您畅玩无忧!</h2>
        </div>
        <div>
            <h4>支持【度盘】【天翼】新加【迅雷】【阿里】【夸克】多种下载方式。目前游戏仓库容量98000G+每天持续增加中</h4>
        </div>
        <div class="search-group">
            <el-input v-model="input" style="width: 400px" placeholder="请输入游戏关键词......" clearable />
            <el-button type="primary" :icon="Search">Search</el-button>
        </div>
    </div>
</template>



<style scoped lang='scss'>
.fullbox {
    height: 250px;
    width: 100%;
    background: url("@/assets/images/longback.png") no-repeat center center;
    background-size: cover;
    /* 让背景图片始终填充满整个 .fullbox */
    display: flex;
    /* 使用 Flexbox 布局 */
    flex-direction: column;
    /* 垂直排列子组件 */
    justify-content: center;
    /* 子组件垂直居中 */
    align-items: center;
    /* 子组件水平居中 */
}

h2 {
    font-style: oblique;
}
h4 {
    padding-bottom: 20px;
}

.input-group {
  display: flex; /* 使用 Flexbox 布局 */
  align-items: center; /* 垂直居中 */
}

.el-input {
  margin-right: 10px; /* 调整 input 和 button 之间的间距 */
}
</style>
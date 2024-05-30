<script setup>
import { ref } from 'vue'
// 图片列表

// props适配图片列表 
defineProps({
  imageList: {
    type: Array,
    default: () => []
  }
})


// 1、小图切换大图显示
const activeIndex = ref(0)
const enterHandler = (i) => {
  activeIndex.value = i
}
</script>


<template>
  <div class="goods-image">
    <!-- 左侧大图-->
    <div class="middle" ref="target">
      <img :src="imageList[activeIndex]" alt="" />
    </div>
    <!-- 小图列表 -->
    <ul class="small">
      <li v-for="(img, i) in imageList" :key="i" @mouseenter="enterHandler(i)" :class="{ active: i === activeIndex }">
        <img :src="img" alt="" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.goods-image {
  margin-top: 25px;
  width: 900px;
  position: relative;
  display: flex;
  .middle {
    background: #f5f5f5;
    img {
      width: 750px;
      height: auto;
    }
  }

  .small {
    width: 100px;

    li {
      width: 100px;
      height: 57px;
      margin-left: 18px;
      margin-bottom: 13px;
      cursor: pointer;

      &:hover,
      &.active {
        border: 2px solid $xtxColor;
      }
    }
  }
}
</style>
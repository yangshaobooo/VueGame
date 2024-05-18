<script setup>

import { useScroll } from '@vueuse/core'
import { useCategoryStore } from '@/stores/category'
const { y } = useScroll(window)

// 使用pinia中的数据
const categoryStore = useCategoryStore()
</script>

<template>
  <div class="app-header-sticky " :class="{show:y>78}">
    <div class="container">
      <RouterLink class="logo" to="/" />
      <!-- 导航区域 -->
      <ul class="app-header-nav ">
        <li class="home">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <li class="home" v-for="item in categoryStore.categoryList" :key="item.CategoryID">
          <RouterLink  active-class="active" :to="`/category/${item.CategoryID}`">{{ item.CategoryName }}</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>


<style scoped lang='scss'>
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  // 此处为关键样式!!!
  // 状态一：往上平移自身高度 + 完全透明
  transform: translateY(-100%);
  opacity: 0;

  // 状态二：移除平移 + 完全不透明
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between; // 确保内容水平分布
  }

  .logo {
    width: 150px;
    height: 80px;
    background: url("@/assets/images/logo.png") no-repeat center center;
    background-size: contain; // 确保背景图片按比例缩放
  }

}

.app-header-nav {
  width: 1200px;
  display: flex;
  padding-left: 20px;
  position: relative;
  z-index: 998;

  li {
    margin-right: 20px;
    width: 88px;
    text-align: center;

    a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;

      &:hover {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }

    .active {
      color: $xtxColor;
      border-bottom: 1px solid $xtxColor;
    }
  }
}
</style>
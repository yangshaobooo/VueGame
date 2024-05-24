<script setup>

import { useCategoryStore } from '@/stores/category'
// 使用pinia中的数据
const categoryStore = useCategoryStore()
</script>

<template>
  <header class='app-header'>
    <div class="container">
      <!-- 头部中的logo, -->
      <h1 class="logo">
        <RouterLink to="/">myGame</RouterLink>
      </h1>
      <!-- 使用v-for循环展示categoryList中的数据 -->
      <ul class="app-header-nav">
        <li class="home">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <li class="home" v-for="item in categoryStore.categoryList" :key="item.CategoryID">
          <RouterLink active-class="active" :to="`/category/${item.CategoryID}`">{{ item.CategoryName }}</RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>


<style scoped lang='scss'>
.app-header {
  background: #fff;

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 150px;

    a {
      display: block;
      height: 80px;
      width: 100%;
      text-indent: -9999px;
      background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
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

}
</style>
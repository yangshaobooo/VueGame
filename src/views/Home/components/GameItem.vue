<!-- 单个游戏项目的格式 -->
<script setup>
defineProps({
  games: {
    type: Object,
    default: () => { }
  }
})
</script>

<template>
  <RouterLink :to="`/detail/${games.GameID}`" class="games-item">
    <img :src="games.ImageUrl" alt="" />
    <p class="name ellipsis">{{ games.GameName }}</p>
    <div class="detail">
      <el-tag type="warning" effect="dark" round>{{ games.CategoryName }}</el-tag>
      <el-tag type="primary" effect="dark" round>游戏大小: {{ games.Size }}</el-tag>
      <el-tag type="danger" round>
        {{ games.Price === 0 ? '免费游戏' : 'VIP免费' }}
      </el-tag>
    </div>
    <p class="desc ">{{ games.Introduce }}</p>
  </RouterLink>
</template>


<style scoped lang="scss">
.detail {
  display: flex;
  justify-content: space-around;
}

.games-item {
  display: block;
  width: 380px;
  padding: 5px 5px;
  text-align: center;
  transition: all .5s;
  // border: 1px solid;

  &:hover {
    transform: translate3d(0, -4px, 0);
    box-shadow: 0 3px 1px rgb(0 0 0 / 20%);
  }

  img {
    width: 380px;
    height: 190px;
  }

  p {
    padding-top: 5px;
  }

  .name {
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 5px;
  }

  .desc {
    color: #999;
    height: 50px;
    font-size: 12px;
    line-height: 15px;
    overflow: hidden;
    /* 隐藏溢出部分 */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
}
</style>
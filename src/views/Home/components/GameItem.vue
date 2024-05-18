
<script setup>
defineProps({
  games: {
    type: Object,
    default: () => { }
  }
})
</script>

<template>
  <RouterLink to="/" class="games-item">
    <img :src="games.picture" alt="" />
    <p class="name ellipsis">{{ games.name }}</p>
    <p class="desc ellipsis">{{ games.desc }}</p>
    <p class="price">&yen;{{ games.price }}</p>
  </RouterLink>
</template>


<style scoped lang="scss">
.games-item {
  display: block;
  width: 220px;
  padding: 20px 30px;
  text-align: center;
  transition: all .5s;

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
  }

  img {
    width: 160px;
    height: 160px;
  }

  p {
    padding-top: 10px;
  }

  .name {
    font-size: 16px;
  }

  .desc {
    color: #999;
    height: 29px;
  }

  .price {
    color: $priceColor;
    font-size: 20px;
  }
}
</style>
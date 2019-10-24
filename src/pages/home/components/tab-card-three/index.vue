<template>
  <div class="tab-card-three">
    <img v-lazy="cardContent.img"/>
    <p class="title">{{cardContent.title}}</p>
    <p class="title2">{{cardContent.tips}}</p>
  </div>
</template>

<script>
export default {
  name: 'TabCardThree',
  props: {
    cardContent: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .tab-card-three {
    width: calc(100% / 5);
    margin-bottom: 22px;
    text-align: center;

    .title{
      font-size: 20px;
      margin: 10px auto;
    }
    .title2{

    }
  }
</style>

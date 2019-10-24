<template>
  <div class="tab-card-three">
    <img :src="cardContent.img"/>
    <p class="title">{{cardContent.title}}</p>
    <p>{{cardContent.tips}}</p>
  </div>
</template>

<script>
export default {
  name: 'ServiceLine',
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
    display: inline-block;
    width: calc(100% / 5);
    margin-bottom: 20px;
    text-align: center;
    .title{
      font-size: 20px;
      margin: 10px auto;
    }
  }
</style>

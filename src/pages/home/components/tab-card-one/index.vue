<template>
  <div class="tab-card-one">
    <p class="title">【{{cardContent.title}}】</p>
    <p v-for="(item, index) in cardContent.items" :key="index">{{item}}</p>
  </div>
</template>

<script>
export default {
  name: 'TabCardOne',
  props: {
    cardContent: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .tab-card-one {
    width: calc((100% - 60px) / 3);
    margin-bottom: 10px;
    padding: 12px;
    border: 2px solid #e6d2d3;
    &:hover{
      box-shadow: rgba(0,0,0,.4) 0 0 30px;
    }
    .title {
      margin-bottom: 10px;
      font-size: 20px;
      color: #c9131a;
      text-align: center;
    }
    p {
      line-height: 28px;
    }
  }
</style>

<template>
  <div class="card">
    <div class="title">{{cardContent.title}}</div>
    <div class="right-items">
      <p v-for="(item, index) in cardContent.items" :key="index">{{item}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardTwo',
  props: {
    cardContent: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .card{
    display: flex;
    width: calc((100% - 60px) / 3);
    height: 300px;
    margin-bottom: 20px;
    .title{
      display: flex;
      align-items: center;
      width: 90px;
      padding: 16px;
      font-size: 24px;
      text-align: center;
      /*writing-mode: bt-lr;*/
      background-color: #e0e0e0;
      &:hover{
        background-color: #c9131a;
        color: #fff;
      }
    }
    .right-items {
      padding: 16px;
      line-height: 32px;
      background-color: #f1f1f1;
    }
  }
</style>

<template>
  <div class="card">
    <div class="title">{{cardContent.title}}</div>
    <div class="content-items">
      <div v-for="(item, index) in cardContent.items" :key="index">{{item}}</div>
      <div class="text">{{cardContent.text}}</div>
    </div>
    <slot name="img"></slot>
  </div>
</template>

<script>
export default {
  name: 'CardThree',
  props: {
    cardContent: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    display: inline-block;
    width: 380px;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    text-align: center;
    .title{
      margin: -2px;
      padding: 30px 20px;
      background-color: #e0e0e0;
      font-size: 24px;
      border-radius: 10px 10px 0 0;
      &:hover{
        background-color: #c9131a;
        color: #fff;
        border-color: #c9131a;
        border-radius: 10px 10px 0 0;
      }
    }
    .content-items {
      padding: 30px 20px 50px;
      line-height: 32px;
      .text{
        text-align: left;
        text-indent: 28px;
      }
    }
  }
</style>

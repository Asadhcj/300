<template>
  <div class="card">
    <div class="title">{{cardContent.title}}</div>
    <div class="content-items">
      <div v-for="(item, index) in cardContent.items" :key="index">{{item}}</div>
      <div class="text">{{cardContent.text}}</div>
    </div>
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
    vertical-align: middle;
    width: 380px;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    text-align: center;
    &:nth-last-child(5),
    &:nth-last-child(2){
      margin: auto 30px;
    }
    &:nth-last-child(1),
    &:nth-last-child(2),
    &:nth-last-child(3){
      margin-top: 30px;
    }
    .title{
      margin: -2px;
      padding: 30px 20px;
      background-color: #e0e0e0;
      font-size: 24px;
      border-radius: 10px 10px 0 0;
      &:hover{
        background-color: rgba(0,50,130,0.9);
        color: #fff;
        border-color: rgba(0,50,130,0.9);
        border-radius: 10px 10px 0 0;
      }
    }
    .content-items {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      height: 200px;
      // padding: auto 20px;
      padding-left:32px;
      line-height: 32px;
      .text{
        text-align: left;
        text-indent: 28px;
      }
    }
  }
</style>

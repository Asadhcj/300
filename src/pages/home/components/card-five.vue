<template>
  <div class="card-wrapper">
    <img v-lazy="cardContent.img"/>
    <div class="content-text">
      <div>{{cardContent.content}}</div>
      <p>查看更多</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardFive',
  props: {
    cardContent: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-wrapper {
    display: inline-block;
    width: 350px;
    &:nth-child(3){
      margin: auto 75px;
    }
    img{ width: 100%; height:200px;}
    .content-text {
      padding: 16px;
      line-height: 28px;
      background-color: #fff;
      box-shadow: 2px 2px 20px #999;
      p{
        margin-top: 15px;
        text-align: right;
        color: #c9131a;
        cursor: pointer;
      }
    }
  }
</style>

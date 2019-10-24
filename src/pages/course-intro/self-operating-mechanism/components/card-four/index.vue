<template>
  <div class="tab-card-two">
    <img :src="cardContent.img"/>
    <div class="txt-card">
      <p class="title">{{cardContent.title}}</p>
      <p v-for="(item, index) in cardContent.items" :key="index">{{item}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardFour',
  props: {
    cardContent: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .tab-card-two {
    display: inline-block;
    vertical-align: top;
    width: calc(100% / 4 - 15px);
    &:not(:nth-child(2)){
      margin-left: 20px;}
    img{ width: 100%; }
    .txt-card{
      display: flex;
      flex-direction: column;
      width: 80%;
      height: 200px;
      margin: auto;
      padding: 12px;
      border: 2px solid #e6d2d3;
      background-color: #fff;
      text-align: center;
      &:hover{
        box-shadow: rgba(0,0,0,.4) 0 0 30px;
      }
      .title{
        position: relative;
        font-size: 22px;
        margin-bottom: 25px;
      }
      p{ line-height: 28px; }
    }
  }
</style>

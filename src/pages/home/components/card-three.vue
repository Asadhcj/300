<template>
  <div class="card-three">
    <img v-lazy="cardContent.img"/>
    <p class="title">{{ cardContent.title }}</p>
    <div class="content">{{ cardContent.content }}</div>
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
.card-three {
  display: inline-block;
  width: 260px;
  height: 280px;
  margin-top: 55px;
  padding: 20px 35px;
  border: 2px solid #e6d2d3;
  border-radius: 8px;
  text-align: center;
  &:hover{
    box-shadow: rgba(0,0,0,.3) 0 0 30px;
  }
  img{
    width: 110px;
    height: 110px;
    margin-top: -50%;
  }
  .title{
    margin-top: 60px;
    margin-bottom: 22px ;
    font-size: 20px;
    font-weight: 600;
    color: #c9131a;
  }
  .content{
    line-height: 32px;
  }
}
</style>

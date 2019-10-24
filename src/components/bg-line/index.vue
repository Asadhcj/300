<template>
  <div class="bg-line-wrapper">
    <p class="title">{{title}}</p>
    <div class="bg-line"></div>
    <p class="tips">{{tips}}</p>
  </div>
</template>

<script>
export default {
  name: 'BgLine',
  props: {
    title: {
      type: String,
      default: ''
    },
    tips: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .bg-line-wrapper{
    margin: 80px auto 40px;
    text-align: center;
    .title{
      font-size: 24px;
      font-weight: 700;
    }
    .bg-line{
      width: calc(100% + 120px);
      height: 15px;
      margin: 15px -60px;
      background: url("../../assets/images/p_1.jpg") no-repeat center;
      background-size: 100% 100%;
    }
    .tips {
      font-size: 14px;
      color: #969696;
    }
  }
</style>

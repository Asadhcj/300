<template>
  <div class="bg-line-wrapper">
    <p class="title">{{title}}</p>
    <div class="bg-line"></div>
    <p class="tips">{{tips}}</p>
  </div>
</template>

<script>
export default {
  name: 'BgLineShort',
  props: {
    title: String,
    tips: String
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
      width: 100px;
      height: 3px;
      margin: 15px auto;
      background-color: #c9131a;
    }
    .tips {
      font-size: 14px;
      color: #969696;
    }
  }
</style>

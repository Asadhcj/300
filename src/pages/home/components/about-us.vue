<template>
  <div class="about-us">
    <div class="about-us-left">
      <slot name="video"></slot>
    </div>
    <div class="about-us-right">
      <h1>{{aboutUsContent.title}}</h1>
      <p>{{aboutUsContent.content}} </p>
      <div class="about-us-btn">
        <el-button type="danger" plain>联系我们</el-button>
        <el-button type="danger" plain>了解更多+</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  props: {
    aboutUsContent: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.about-us {
  display: flex;
  justify-content: space-between;
  margin-top:80px;
  &-left{
    width: 50%;
  }
  &-right{
    width: calc(50% - 15px);
    margin-left: 15px;
    h1{
      font-size: 24px;
      margin-bottom: 20px;
    }
    p{ line-height: 32px; }
    .about-us-btn{
      display: flex;
      justify-content: space-between;
      width: 50%;
      margin: 30px auto 0;
    }
  }
}
</style>

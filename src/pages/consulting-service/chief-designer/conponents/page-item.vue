<template>
  <div class="page-item">
    <div class="title">{{itemContent.title}}：</div>
    <p v-for="(item, index) in itemContent.items" :key="index">{{item}}</p>
  </div>
</template>

<script>
export default {
  name: 'PageItem',
  props: {
    itemContent: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-item{
    position: relative;
    margin-top: 40px;
    line-height: 40px;
    &::after{
      position: absolute;
      width: 100%;
      margin-top: 20px;
      content: "";
      border-bottom: 1px dashed #999;
    }
    .title{
      margin-bottom: 10px;
      font-size: 24px
    }
    p{
      font-size: 18px;
      text-indent: 36px;
    }
  }
</style>

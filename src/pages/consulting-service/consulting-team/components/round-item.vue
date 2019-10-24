<template>
  <dl class="round-item">
    <dt>{{itemContent.title}}</dt>
    <dd v-for="(item, index) in itemContent.items" :key="index">{{item}}</dd>
  </dl>
</template>

<script>
export default {
  name: 'RoundItem',
  props: {
    itemContent: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .round-item{
    position: absolute;
    width: 350px;
    dt {
      color: #c9131a;
      font-weight: bold;
      margin-bottom: 15px;
    }
    dd{
      line-height: 38px;
    }
    &:nth-child(1){
      padding: 20px 50px 20px 0;
      text-align: right;
    }
    &:nth-child(2){
      padding: 20px 0 20px 70px;
      right: 20px;
    }
    &:nth-child(3){
      padding: 20px 50px 20px 0;
      bottom: 0;
      text-align: right;
    }
    &:nth-child(4){
      padding: 20px 0 20px 70px;
      right: 20px;
      bottom: 0;
    }
  }
</style>

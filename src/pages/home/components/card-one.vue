<template>
  <dl class="card-one">
    <dt>{{cardContent.title}}</dt>
    <dd v-for="(item,idx) in cardContent.items" :key="idx">{{item}}</dd>
  </dl>
</template>

<script>
export default {
  name: 'CardOne',
  props: {
    cardContent: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.card-one {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 200px;
  line-height: 32px;
  &:nth-child(2){
    height: 140px;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
  dt{
    margin-bottom: 15px;
    font-size: 24px;
    color: #c9131a;
  }
}
</style>

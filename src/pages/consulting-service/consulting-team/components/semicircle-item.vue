<template>
  <div class="semicircle-item">
    <img :src="itemContent.img"/>
    <p>{{itemContent.text}}</p>
  </div>
</template>

<script>
export default {
  name: 'SemicircleItem',
  props: {
    itemContent: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .semicircle-item{
    position: absolute;
    width: 200px;
    text-align: center;
    img{ margin-bottom: 10px}
    &:nth-child(1){
      bottom: 100px;
      left: 50px;
    }
    &:nth-child(2){
      bottom: 300px;
      left: 150px;
    }
    &:nth-child(3){
      bottom: 450px;
      left: 370px;
    }
    &:nth-child(4){
      bottom: 450px;
      right: 370px;
    }
    &:nth-child(5){
      bottom: 300px;
      right: 150px;
    }
    &:nth-child(6){
      bottom: 100px;
      right: 50px;
    }
  }
</style>

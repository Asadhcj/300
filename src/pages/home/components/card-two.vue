<template>
  <div class="card-two">
    <img v-lazy="cardContent.img"/>
    <div>{{cardContent.content}}</div>
  </div>
</template>

<script>
export default {
  name: 'CardTwo',
  props: {
    cardContent: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.card-two {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 160px;
  border: 2px solid #ddd;
  &:hover{
    border-color: #c9131a;
    color:#c9131a;
  }
  img{
    margin-bottom: 20px;
  }
}
</style>

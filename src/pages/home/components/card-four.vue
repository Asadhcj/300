<template>
  <div class="card-four">
    <img v-lazy="cardContent.img"/>
    <div class="card-four-content">
      <p class="title">{{cardContent.title}}</p>
      <p class="content">{{cardContent.content}}</p>
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
.card-four {
  display: inline-flex;
  align-items: center;
  width: calc((100% - 60px)/3);
  height: 220px;
  padding: 16px 0;
  color: #fff;
  img{
    margin-right: 12px;
  }
  &-content{
    .title {
      margin-bottom: 16px;
      font-size: 24px;
    }
    .content{
      line-height: 24px;
      font-size: 16px;
    }
  }
}
</style>

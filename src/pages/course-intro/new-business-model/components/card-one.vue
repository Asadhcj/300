<template>
  <dl class="card">
    <dt class="title">{{cardContent.title}}</dt>
    <dd>{{cardContent.content}}</dd>
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
  .card{
    width: calc((100% - 60px) / 4);
    height: 220px;
    padding: 50px;
    text-align: center;
    background-color: #f1f1f1;
    border: 1px solid #003282;
    transition: all 0.3s;
    &:hover{
      box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.3);
      transform: scale(1.04) translateY(-5px);
      border: none;
    }
    dt{
      margin-bottom: 30px;
      font-size: 28px;
      color: #003282;
    }
    dd{
      line-height: 30px;
      font-size: 18px;
      color: #333;
    }
  }
</style>

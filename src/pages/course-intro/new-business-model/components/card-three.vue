<template>
  <dl class="card">
    <dt>{{cardContent.title}}</dt>
    <dd>{{cardContent.content}}</dd>
  </dl>
</template>

<script>
export default {
  name: 'CardThree',
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
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 380px;
    height: 200px;
    border: 2px solid #f1f1f1;
    &:hover{ background-color: rgba(0,50,130,0.9) }
    &:hover{
      dt{ color: #fff; }
    }
    &:nth-last-child(2),
    &:nth-last-child(5){
      margin: auto 30px;
    }
    &:nth-last-child(1),
    &:nth-last-child(2),
    &:nth-last-child(3){
      margin-top: 30px;
    }
    dt{
      margin-bottom: 20px;
      font-size: 30px;
    }
    dd{
      font-size: 20px;
      color: #999;
    }
  }
</style>

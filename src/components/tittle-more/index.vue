<template>
  <div class="title-more">
    <p><span>{{chTitle}}</span><span>/{{eTitle}}</span></p>
    <p class="more">查看更多+</p>
  </div>
</template>

<script>
export default {
  name: 'TitleMore',
  props: {
    chTitle: String,
    eTitle: String
  }
}
</script>

<style lang="scss" scoped>
  .title-more {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 30px;
    margin-bottom: 45px;
    &::after{
      content:"";
      position: absolute;
      top: 40px;
      left: -16px;
      margin: auto;
      width:calc(100% + 32px);
      height:1px;
      background-color:#c8c8c8;
    }
    p span:nth-child(1){
      margin-right: 8px;
      font-size: 26px;
      font-weight: bold;
    }
    p span:nth-child(2){
      font-size: 24px;
      color: #666666;
    }
    .more{
      cursor: pointer;
    }
  }
</style>

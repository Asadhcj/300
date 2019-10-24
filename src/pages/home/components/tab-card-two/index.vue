<template>
  <div class="tab-card-two">
    <img v-lazy="cardContent.img"/>
    <div class="txt-card">
      <p class="title">{{cardContent.title}}</p>
      <p>{{cardContent.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabCardTwo',
  props: {
    cardContent: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .tab-card-two {
    width: calc((100% - 60px) / 3);
    margin-bottom: 10px;
    img{ width: 100%; }
    .txt-card{
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 80%;
      height: 240px;
      margin: auto;
      border: 2px solid #e6d2d3;
      background-color: rgba(245,245,245,0.8);
      text-align: center;
      &:hover{
        box-shadow: rgba(0,0,0,.4) 0 0 30px;
      }
      .title{
        position: relative;
        font-size: 24px;
        margin-bottom: 70px;
        &::after{
          content:"";
          position: absolute;
          right: 0;
          bottom: -35px;
          left: 0;
          margin: auto;
          width:100px;
          height:3px;
          background-color:#c9131a;
        }
      }
    }
  }
</style>

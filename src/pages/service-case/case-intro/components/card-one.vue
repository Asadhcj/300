<template>
  <div class="round-card">
    <div class="circle"></div>
    <div :style="bgImg">
      <div class="desc">
        <p>{{cardContent.company}}</p>
        <p>{{cardContent.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardOne',
  props: {
    cardContent: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    bgImg () {
      return {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        border: '4px solid #c9131a',
        background: `url(${this.cardContent.img}) no-repeat center #fff`,
        backgroundSize: '100% 100%'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .round-card{
    display: inline-block;
    position: relative;
    width: 180px;
    height: 180px;
    padding: 14px;
    cursor: pointer;
    &:not(:nth-child(1)){
      margin: 0 60px 25px 0;
    }
    .circle {
      position: absolute;
      left: -5px;
      top: -5px;
      width: 190px;
      height: 190px;
      border: 10px solid #ecab18;
      border-right-color: #c9131a;
      border-bottom-color: #c9131a;
      border-radius: 50%;
      transition: all 0.8s ease-in-out;
    }
    .desc{
      position: absolute;
      left: 20px;
      right: 20px;
      top: 60%;
      transform: translateY(-50%);
      margin: auto;
      opacity: 0;
      line-height: 45px;
      text-align: center;
      color: #fff;
      transition: all 0.8s ease-in-out;
      p:nth-child(1){
        font-weight: bold;
        border-bottom: 1px solid #fff;
      }
    }
    &:hover .circle{
      transform: rotate(180deg);
      background-color: rgba(0,0,0,.3);
    }
    &:hover .desc{
      opacity: 1;
      z-index: 9999;
    }
  }
</style>

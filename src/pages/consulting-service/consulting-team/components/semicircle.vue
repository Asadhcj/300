<template>
  <div class="semicircle">
    <semicircle-item v-for="(item, index) in itemContentArr" :key="index" :item-content="item"/>
  </div>
</template>

<script>
import SemicircleItem from './semicircle-item'
export default {
  name: 'Semicircle',
  components: { SemicircleItem },
  data () {
    return {
      itemContentArr: [
        {
          img: require('@/assets/images/service_13.png'),
          text: '基于战略和商业模式'
        },
        {
          img: require('@/assets/images/service_14.png'),
          text: '基于战略和商业模式'
        },
        {
          img: require('@/assets/images/service_15.png'),
          text: '基于战略和商业模式'
        },
        {
          img: require('@/assets/images/service_16.png'),
          text: '基于战略和商业模式'
        },
        {
          img: require('@/assets/images/service_17.png'),
          text: '基于战略和商业模式'
        },
        {
          img: require('@/assets/images/service_18.png'),
          text: '基于战略和商业模式'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .semicircle{
    position: relative;
    height: 650px;
    background: url("../../../../assets/images/service_2.jpg") no-repeat center;
    background-size: 100% 100%;
  }
</style>

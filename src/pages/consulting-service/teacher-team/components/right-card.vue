<template>
  <div class="card" :style="style">
    <dl class="text">
      <dt>{{cardContent.name}}</dt>
      <dd>了解更多+</dd>
    </dl>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'RightCard',
  props: {
    cardContent: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    style () {
      return {
        background: `url(${this.cardContent.img}) no-repeat, center`,
        backgroundSize: '100% 100%'
      }
    }
  },
  methods: {
    init () {
      $('.text').hover(function () {
        $(this).stop().animate({ height: '120px' }, 240)
        $(this).find('dd').stop().show()
      }, function () {
        $(this).stop().animate({ height: '48px' }, 240)
        $(this).find('dd').stop().hide()
      })
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
  .card{
    position: relative;
    display: inline-flex;
    width: 290px;
    height: 330px;
    margin: 0 0 15px 10px;
    dl{
      position: absolute;
      width: 290px;
      bottom: 0;
      background-color: #c9131a;
      opacity: 0.7;
      color: #fff;
      text-align: center;
      cursor: pointer;
      dt{
        height: 48px;
        line-height: 48px;
      }
      dd{
        display: none;
        border-top: 1px solid #fff;
        line-height: 72px;
      }
    }
  }
</style>

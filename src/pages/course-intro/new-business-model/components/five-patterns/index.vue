<template>
  <div class="content-wrapper">
    <div v-for="(cardContent, index) in cardContentArr" :key="index" class="card" :parentBg="cardContent.parentBg">
      <dl>
        <dt>{{cardContent.title}}</dt>
        <dd v-for="(item, idx) in cardContent.items" :key="idx">{{item}}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import imgOne from '@/assets/images/sirendingzhi5.jpg'
import imgTwo from '@/assets/images/sirendingzhi1.jpg'
export default {
  name: 'FivePatterns',
  data () {
    return {
      imgOne,
      imgTwo,
      cardContentArr: [
        {
          title: '卖产品',
          parentBg: 'imgOne',
          items: ['3种差价形式', '价差', '利差', '汇差']
        },
        {
          title: '卖服务',
          parentBg: 'imgTwo',
          items: ['5种标准方式', '价差', '利差', '汇差']
        },
        {
          title: '卖产品',
          parentBg: 'imgOne',
          items: ['3种差价形式', '价差', '利差', '价差', '利差', '汇差']
        },
        {
          title: '卖产品',
          parentBg: 'imgTwo',
          items: ['3种差价形式', '价差', '利差', '汇差']
        },
        {
          title: '卖产品',
          parentBg: 'imgOne',
          items: ['3种差价形式', '价差', '利差', '汇差']
        }
      ]
    }
  },
  methods: {
    init () {
      let _self = this
      $('.card').hover(function () {
        $(this).children('dl').stop().animate({ height: '360px' }, 240)
        $(this).parent('.content-wrapper').css({
          'background': 'url(' + _self[($(this).attr('parentBg'))] + ') no-repeat',
          '-webkit-transition': 'all 0.8s ease 0.2s',
          'transition': 'all 0.8s ease 0.2s'
        })
        $(this).find('dl dt').stop().animate({ paddingTop: '130' }, 550)
        $(this).find('dl dd').stop().show()
      }, function () {
        $(this).children('dl').stop().animate({ height: '95px' }, 240)
        $(this).find('dl dt').stop().animate({ paddingTop: '0px' }, 550)
        $(this).find('dl dd:not(:nth-child(2))').stop().hide()
      })
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
  .content-wrapper {
    display: flex;
    justify-content: flex-end;
    height: 480px;
    background: url("../../../../../assets/images/sirendingzhi1.jpg");
    .card {
      position: relative;
      width: 240px;
      text-align: center;
      dl {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 95px;
        background: rgba(0, 50, 130, 0.8);
        border-top: 2px solid #003282;
        line-height: 28px;
        font-size: 16px;
        color: #fff;
        dt {
          margin: 15px 0 6px 0;
          font-size: 24px;
          font-weight: bold;
          color: #FFC200;
        }
        dd {
          display: none;
          &:nth-child(2) {
            display: block;
            line-height: 30px;
            font-weight: 100;
          }
          &:nth-child(3){
            border-top: 1px solid #fff;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="current-page">
    <el-carousel :interval="5000" arrow="never" height="420px" indicator-position="none" style="width: 100%">
      <el-carousel-item>
        <img class="imglist" v-lazy="require('@/assets/images/banner.jpg')"/>
      </el-carousel-item>
    </el-carousel>
    <div class="page-content">
      <!-- 自运行机制 -->
      <bg-line title="自运行机制" tips="Self-running Mechanism"/>
      <card-one :card-content-arr="cardOneContent"/>
      <!-- 导师介绍 -->
      <bg-line title="导师介绍" tips="Mentor introduction"/>
      <div class="person-intro">
        <div class="person-intro-top">
          <p class="title">总设计师</p>
          <p class="more">查看更多+</p>
        </div>
        <div class="person-intro-content">
          <img v-lazy="personInfo.img"/>
          <dl>
            <dt>自运行机制开创者</dt>
            <dd v-for="(item, index) in personInfo.items" :key="index">{{item}}</dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="divide-bg-line one">
      <div class="divide-content">
        <p>国立咨询丨国内唯一 一家做自运行机制设计的公司</p>
        <img src="@/assets/images/p_icon.jpg"/>
        <p>400-027-2007</p>
      </div>
    </div>
    <div class="page-content course-outline">
      <!-- 课程大纲 -->
      <bg-line title="课程大纲" tips="Curriculum Outline"/>
      <div class="card-box-normal">
        <card-two v-for="(card, index) in cardTwoContent" :key="index" :card-content="card"/>
      </div>
      <bg-line title="课程收获" tips="Introduction to the course"/>
      <div class="course-get">
        <div class="course-get-left-items">
          <template v-for="(card, index) in cardThreeContent">
            <card-three v-if="index < 4" :key="index" :card-content="card"/>
          </template>
        </div>
        <card-three :card-content="cardThreeContent[4]">
          <img src="@/assets/images/p_04.jpg" slot="img" style="width: 100%;"/>
        </card-three>
      </div>
    </div>
    <div class="divide-bg-line two">
      <div class="divide-content">
        <img src="@/assets/images/p_10.jpg"/>
        <dl>
          <dt>报名事宜：</dt>
          <dd>时间：2019年9月6-8日（3天2夜）</dd>
          <dd>地点：中国 ● 深圳</dd>
          <dd>学费：4.5万/人(两人以上可以享受3万元/人的报团优惠)</dd>
          <dd>适合人群：董事长、股东、总经理、人力总监及核心骨干</dd>
        </dl>
      </div>
    </div>
    <div class="page-content">
      <bg-line title="课程特色" tips="Course Features"/>
      <card-four v-for="(card, index) in cardFourContent" :key="index" :card-content="card"/>
      <bg-line title="3天2夜" tips="Three days, Two nights."/>
      <div class="special-course">
        <img src="@/assets/images/p_12.jpg"/>
        <dl>
          <dt>③天 ② 夜您将收获以下几点</dt>
          <dd class="one">教您一套从“如何管”到“如何不管”的机制设计方法，不再通过加人加岗来加强管理；</dd>
          <dd class="two">掌握戴老师原创的机制设计的5大环节、22道工序用来指导企业落地实施机制；</dd>
          <dd class="three">戴老师——会在课程现场为您详细剖析18个亲自操刀案例的设计过程和精髓。</dd>
          <dd class="four">最终，您将掌握一套让员工“自组织、自管理、自约束”的自运行机制，让您从繁杂的管理中解脱出来，实现无为而治！</dd>
        </dl>
      </div>
      <bg-line title="课程精彩" tips="Excellent Course"/>
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in swiperImgs" :key="index">
          <img v-lazy="item.img"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import CardOne from './components/card-one'
import CardTwo from './components/card-two'
import CardThree from './components/card-three'
import CardFour from './components/card-four'
export default {
  name: 'selfOperatingMechanism',
  components: { CardOne, CardTwo, CardThree, CardFour },
  data () {
    return {
      // 导师信息
      personInfo: {
        img: require('@/assets/images/p_05.jpg'),
        items: [
          '自运行机制开创者',
          '国立咨询总设计师',
          '北大汇商业模式研究中心副主任',
          '拥有横跨5大专业领域的学术背景',
          '拥有外企、国企、民企丰富的实战经验',
          '主要著作有《无为而治》《商业模式》《新范式经济学》 《轻松做老板》《经济学：范式革命》'
        ]
      },
      cardOneContent: [
        {
          title: '过去',
          items: ['自上而下', '企业人管人累死人', '老板亲力亲为难脱身']
        },
        {
          title: '未来',
          items: ['自下而上', '让员工为自己干', '老板无为而治']
        },
        {
          title: '效果',
          items: ['员工自动自发', '提升企业盈利', '企业自动运行']
        }
      ],
      cardTwoContent: [
        {
          title: '思维变革',
          items: [
            '1、90、00后新生代人群正在向传统管理模式提出哪些挑战？',
            '2、从“如何管”到“如何不管”到底颠覆了谁？',
            '3、企业管理成本能否降为“0”？',
            '4、重新认识变革：利益→机制→制度→体制。'
          ]
        },
        {
          title: '聚焦盈利',
          items: [
            '1、盈利的3个前提： 有价值、有需求、向别人提供价值交换',
            '2、 重新认识商业模式；',
            '3、 企业盈利模式定位： 卖产品、卖服务、卖品牌、卖技术、卖标准',
            '4、企业盈利模式的设计与优化；',
            '5、确定自运行机制设计的盈利发力点。'
          ]
        },
        {
          title: '主体归位',
          items: [
            '1、构造生产力单元，确认激励主体： 自下而上；分层构建；重在盈利体。',
            '2、自运行机制设计三原则：',
            ' ◆ 能否决定盈利的一线生产力单元；',
            ' ◆ 能否实现自然管理；',
            ' ◆ 能否实现自组织、自管理。',
            '3、驱动一线生产力单元的九大方法。'
          ]
        },
        {
          title: '利益内嵌',
          items: [
            '1、自运行机制设计四要素：',
            '① 目标导向；② 利益驱动；',
            '③ 博弈约束；④ 动态演化。',
            '2、如何避免激励失衡与激励错位；',
            '3、从挖掘博弈到消灭博弈的利益梳理。'
          ]
        },
        {
          title: '自我运行',
          items: [
            '1、自运行机制的活化如何让死的机制做到精巧灵动自运行？',
            '2、自运行机制的优化',
            '如何科学的设计公式与参量设计法？',
            '3、自运行机制的弈化',
            '如何达到企业与员工高度的利益均衡？'
          ]
        },
        {
          title: '落地解析',
          items: [
            '1、自运行设计全流程详解（十大步骤）',
            '2、自运行落地经典案例剖析。',
            '①生产型；②科技型；③连锁型；',
            '④房产建筑；⑤股份制；⑥服务型。',
            '通用市场部案例：戴氏环销法',
            '非物质激励案例： 机会激励、特权激励'
          ]
        }
      ],
      cardThreeContent: [
        {
          title: '厘清赚钱逻辑',
          items: [
            '梳理产业价值链，',
            '重构企业价值环节，',
            '设计价值交换方式。'
          ]
        },
        {
          title: '管理思维变革',
          items: [
            '如何设计--如何自运行，',
            '迈向无为而治自运行思维，',
            '自管理，自激励，自协同，自约束。'
          ]
        },
        {
          title: '四大设计步骤',
          items: [
            '引爆盈利，主体归位，',
            '利益内嵌，自动运行。，'
          ]
        },
        {
          title: '18大经典案例剖析',
          items: [
            '涉及各大主流行业，带你',
            '身临其境体验自运行机制的精髓。'
          ]
        },
        {
          title: '你能获得什么成果？',
          items: [],
          text: '帮你从有钱没时间，实现有时间又有闲，帮你实现一山容百虎，百花齐放，企业蒸蒸日上的新气象。解除大企业反应迟钝的魔咒，实现老板无为而治的梦想。'
        }
      ],
      cardFourContent: [
        {
          img: require('@/assets/images/p_8.jpg'),
          title: '1个思维转变',
          items: [
            '从“如何管”',
            '到“如何不管”'
          ]
        },
        {
          img: require('@/assets/images/p_9.jpg'),
          title: '3条盈利路径',
          items: [
            '投入的钱（企业成本）',
            '效率的钱（员工高效）',
            '未来的钱（商业模式）'
          ]
        },
        {
          img: require('@/assets/images/p_11.jpg'),
          title: '4大设计步骤',
          items: [
            '聚焦盈利，主体归位',
            '利益内嵌，自动运行'
          ]
        },
        {
          img: require('@/assets/images/p_08.jpg'),
          title: '22道落地工序',
          items: [
            '天才设计活机制',
            '控制参量是关键',
            '反复推敲消博弈',
            '精巧灵动自运行'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .current-page {
    .course-outline{
      margin-bottom: 100px;
    }
    .person-intro {
      height: 670px;
      padding: 25px;
      box-shadow: -1px -1px 2px 2px #999;
      &-top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title{
          padding: 12px 30px;
          background: url("../../../assets/images/p_01.jpg") no-repeat center;
          background-size: 100% 100%;
          font-size: 28px;
          color: #fff;
           margin-left:-25px;
        }
        .more{
          font-size: 16px;
          color: #999;
          cursor: pointer;
        }
      }
      &-content{
        display: flex;
        margin-top: 40px;
        img{ margin-right: 30px; }
        dt{
          margin-bottom: 60px;
          font-size: 30px;
          background:#c9131a;
          color:#fff;
          width: 260px;
          line-height: 60px;
          text-align: center;
          border-radius: 5px;
          margin-left:-30px;
        }
        dd {
          margin-bottom: 15px;
          line-height: 32px;
          &::before{
            margin-right: 20px;
            vertical-align: middle;
            content: '»';
            color: #c9131a;
            font-size: 24px;
          }
        }
      }
    }
    .course-get {
      display: flex;
      &-left-items{
        & .card:nth-child(2),
        & .card:nth-child(4){
          margin-left: 30px;
        }
        & .card:nth-child(1),
        & .card:nth-child(2){
          margin-bottom: 30px;
        }
        width: 790px;
        margin-right: 30px;
      }
    }
    .special-course {
      display: flex;
      img{
        margin-right: 20px;
      }
      dt{ font-size: 30px; }
      dd {
        margin-top: 50px;
        line-height: 32px;
        &::before{
          display: inline-block;
          float: left;
          width: 70px;
          height: 70px;
          margin-right: 8px;
          padding: 5px;
          border: 2px solid #c9131a;
          border-radius: 10px;
          text-align: center;
          font-size: 24px;
          &::after{
            clear: left;
          }
        }
        &.one::before{
          content: '掌握方法';
        }
        &.two::before{
          content: '掌握工序';
        }
        &.three::before{
          content: '案例学习';
        }
        &.four::before{
          content: '课程收获';
        }
      }
    }
    .divide-bg-line {
      margin-top: 80px;
      &.one{ background: url("../../../assets/images/p_02.jpg") no-repeat center; }
      &.two{ background: url("../../../assets/images/p_7.jpg") no-repeat center; }
      &.one .divide-content{
        height: 150px;
        align-items: center;
        img{ margin: auto 25px;}
      }
      &.two .divide-content{
        height: 400px;
        padding: 25px 0;
        img{ margin-right: 40px;}
      }
      .divide-content{
        display: flex;
        width: 1200px;
        margin: auto;
        color: #fff;
        p{ font-size: 28px}
        dt{ font-size: 30px; }
        dd{
          position: relative;
          font-size: 20px;
          line-height: 32px;
          margin-top: 30px;
          &::after{
            content:"";
            position: absolute;
            right: 0;
            left: -10px;
            bottom: -10px;
            margin: auto;
            width:560px;
            height:2px;
            background-color:#fff;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="home-page">
    <el-carousel :interval="5000" arrow="always"  height="420px"  indicator-position="none" >
      <el-carousel-item v-for="(item, index) in sliders" :key="index">
        <img class="imglist" :src="item.path" />
      </el-carousel-item>
    </el-carousel>
    <!-- 自激励 自约束 自协同 -->
    <div class="page-content">
      <div class="card-one-items">
        <card-one v-for="(card, index) in cardOneArr" :key="index" :card-content="card"/>
      </div>
    </div>
    <!-- 自运行机制的变革 -->
    <div class="page-content">
      <bg-line-short title="自运行机制的变革" tips="为企业打造一套让所有人为自己干的机制，实现老板无为而治。"/>
      <card-two v-for="(card, index) in cardTwoArr" :key="index" :card-content="card"/>
    </div>
    <!-- 自运行机制给企业带来什么？ -->
    <div class="page-content-fluid">
      <bg-line-short title="自运行机制给企业带来什么？" tips="借助员工的利益追求和利益博弈，将激励的方向导向组织想要达到的战略目标。" style="margin: auto"/>
      <div class="page-content">
        <div class="card-box-normal">
          <card-three v-for="(card, index) in cardThreeArr" :key="index" :card-content="card"/>
        </div>
      </div>
    </div>
    <!-- 关于我们 -->
    <div class="page-content ">
      <title-more ch-title="关于我们" e-title="About Us"/>
      <about-us :about-us-content="aboutUsContent">
        <video-player slot="video" :video-content="aboutUsContent.videoContent"/>
      </about-us>
    </div>
    <!-- 变革 专业 实战-->
    <div class="divide-bg-line one ">
      <div class="page-content card-box-normal aboutus">
        <card-four v-for="(card, index) in cardFourArr" :key="index" :card-content="card"/>
      </div>
    </div>
    <!-- 课程介绍 -->
    <div class="page-content">
      <title-more ch-title="课程介绍" e-title="Introduction Course"/>
      <button-tabs :tabs="tabs" @change="tabChange">
        <div v-if="currentTab === '课程大纲'" class="card-box-normal classContent">
          <tab-card-one v-for="(card, index) in tabCardOneArr" :key="index" :card-content="card"/>
        </div>
        <div v-else-if="currentTab === '学习形式'" class="card-box-normal classContent">
          <tab-card-two v-for="(card, index) in tabCardTwoArr" :key="index" :card-content="card"/>
          <div style="width: 100%;text-align: center;">
            <el-button type="danger" plain>查看更多+</el-button>
          </div>
        </div>
        <div v-else-if="currentTab === '服务流程'" class="classContent severProcess">
          <div class="tab-three-bg-line one card-box-normal">
            <template  v-for="(card, index) in tabCardThreeArr">
              <tab-card-three v-if="index < 5" :key="index" :card-content="card"/>
            </template>
          </div>
          <div class="tab-three-bg-line two card-box-normal">
            <template  v-for="(card, index) in tabCardThreeArr">
              <tab-card-three v-if="index > 4" :key="index" :card-content="card"/>
            </template>
          </div>
        </div>
      </button-tabs>
    </div>
    <!-- 感悟分享 -->
    <div class="page-content">
      <title-more ch-title="感悟分享" e-title="Perception Sharing"></title-more>
      <div class="perception-sharing">
        <video-player :video-content="perceptionSharing[0]"/>
        <div class="right-items">
          <template v-for="(item, index) in perceptionSharing">
            <video-player v-if="index !== 0" :key="index" :video-content="item" class="right-item"/>
          </template>
        </div>
      </div>
    </div>
    <!-- 服务案例 -->
    <div class="page-content page-content-server">
      <title-more ch-title="服务案例" e-title="Service Cases"/>
      <div class="card-box-normal severCase">
        <img v-for="(item, index) in serviceCases" :key="index" v-lazy="item.img" class="service-case-img"/>
      </div>
    </div>
    <!-- 国立资讯 -->
    <div class="page-content">
      <title-more ch-title="国立资讯" e-title="Guoli Information"/>
      <card-five v-for="(card, index) in cardFiveArr" :key="index" :card-content="card"/>
    </div>
  </div>
</template>

<script>
import CardOne from './components/card-one'
import cardTwo from './components/card-two'
import cardThree from './components/card-three'
import AboutUs from './components/about-us'
import CardFour from './components/card-four'
import TabCardOne from './components/tab-card-one'
import TabCardTwo from './components/tab-card-two'
import TabCardThree from './components/tab-card-three'
import CardFive from './components/card-five'
export default {
  name: 'Home',
  components: { CardOne, cardTwo, cardThree, AboutUs, CardFour, TabCardOne, TabCardTwo, TabCardThree, CardFive },
  data () {
    return {
      // 幻灯片
      sliders: [
        { path: require('@/assets/images/index-slider/one.jpg') },
        { path: require('@/assets/images/index-slider/two.jpg') },
        { path: require('@/assets/images/index-slider/three.jpg') },
        { path: require('@/assets/images/index-slider/four.jpg') }
      ],
      // 自激励 自约束 自协同
      cardOneArr: [
        {
          title: '自激励',
          items: ['员工自觉自愿地去', '做组织希望做的事']
        },
        {
          title: '自约束',
          items: ['员工自觉自愿地不去', '做组织不希望做的事']
        },
        {
          title: '自协同',
          items: ['员工自觉自愿地协同同', '事或组织内的其他部门']
        }
      ],
      // 自运行机制的变革
      cardTwoArr: [
        {
          img: require('@/assets/images/home/zyxjzbg/a_4.jpg'),
          content: '从“如何管”到“如何不管”'
        },
        {
          img: require('@/assets/images/home/zyxjzbg/a_5.jpg'),
          content: '七分机制，三分管理”'
        },
        {
          img: require('@/assets/images/home/zyxjzbg/a_6.jpg'),
          content: '自管理、自运行'
        },
        {
          img: require('@/assets/images/home/zyxjzbg/a_7.jpg'),
          content: '自下而上，重一线、重盈利'
        },
        {
          img: require('@/assets/images/home/zyxjzbg/a_8.jpg'),
          content: '员工自动自发'
        },
        {
          img: require('@/assets/images/home/zyxjzbg/a_9.jpg'),
          content: '企业自动运行'
        },
        {
          img: require('@/assets/images/home/zyxjzbg/a_10.jpg'),
          content: '提升企业盈利'
        },
        {
          img: require('@/assets/images/home/zyxjzbg/a_11.jpg'),
          content: '老板无为而治'
        }
      ],
      // 自运行机制给企业带来什么？
      cardThreeArr: [
        {
          img: require('@/assets/images/home/zyxjzbring/a_12.png'),
          title: '操作性强',
          content: '各部门和员工之间自组织、自协同、自约束、自激励，从而自动运行。'
        },
        {
          img: require('@/assets/images/home/zyxjzbring/a_12.png'),
          title: '提升动力',
          content: '为您打造一套让企业所有人为自己干的激励机制，提升员工的动力。'
        },
        {
          img: require('@/assets/images/home/zyxjzbring/a_12.png'),
          title: '聚焦盈利',
          content: '不是为了设计机制而设计机制，一切的设计，直指企业盈利。'
        },
        {
          img: require('@/assets/images/home/zyxjzbring/a_12.png'),
          title: '解放老板',
          content: '让您不再事必躬亲，把时间放在最有生产力的地方，实现老板无为而治。'
        }
      ],
      // 关于我们
      aboutUsContent: {
        title: '自运行机制开创者',
        content: '自运行机制开创者国立咨询是一家专注于企业设计的公司，由企业设计理论教授戴天宇' +
          '先生发起创建。公司起源于北大汇丰，其总部设在深圳，其分公司分别设立在广州、青岛、北京、' +
          '长沙等。国立咨询核心产品~企业自运行机制设计：致力于帮助企业打造一套让所有人为自己干的机' +
          '制，从而实现老板无为而治。',
        videoContent: {
          img: require('@/assets/images/b_1.jpg'),
          title: '福建远航建筑装修 - 杨总：自运行机是一种顺应人性的科学做法',
          vid: 'f0903sfij5a&auto=1'
        }
      },
      cardFourArr: [
        {
          img: require('@/assets/images/b_2.jpg'),
          title: '变革',
          content: '针砭时弊，变革传统，顺应时势、 适合国情、中国人自己的管理学。'
        },
        {
          img: require('@/assets/images/b_3.jpg'),
          title: '专业',
          content: '知识体系横跨五大学术领域，国内、外都有巨大的影响。'
        },
        {
          img: require('@/assets/images/b_4.jpg'),
          title: '实战',
          content: '外企、国企、民企的高管经验， 几百家企业操刀案例。'
        }
      ],
      // 课程介绍
      tabs: [
        { label: '课程大纲' },
        { label: '学习形式' },
        { label: '服务流程' }
      ],
      currentTab: '学习形式',
      // 课程大纲
      tabCardOneArr: [
        {
          title: '自运行机制——思维变革',
          items: [
            '1、90、00后新生代人群正在向传统管理模式提出哪些挑战？',
            '2、从如何管到如何不管到底颠覆了谁？',
            '3、企业管理成本能否降为“0”？',
            '4、重新认识变革：利益 → 机制 → 制度 → 体制。'
          ]
        },
        {
          title: '自运行机制——聚焦盈利',
          items: [
            '1、 盈利的3个前提：',
            '2、 重新认识商业模式;',
            '3、企业盈利模式的设计与优化；',
            '4、确定自运行机制设计的盈利发力点。'
          ]
        },
        {
          title: '自运行机制——思维变革',
          items: [
            '1、构造生产力单元，确认激励主体： 自下而上；分层构建；重在盈利体。',
            '2、自运行机制设计三原则： 能否决定盈利的一线生产力单元； 能否实现自然管理； 能否实现自组织、自管理。',
            '3、驱动一线生产力单元的九大方法。'
          ]
        },
        {
          title: '自运行机制——思维变革',
          items: [
            '1、自运行机制设计四要素：',
            '① 目标导向； ② 利益驱动；',
            '③ 博弈约束；④ 动态演化。',
            '2、如何避免激励失衡与激励错位；',
            '3、从挖掘博弈到消灭博弈的利益梳理。'
          ]
        },
        {
          title: '自运行机制——思维变革',
          items: [
            '1、自运行机制的活化： 如何让死的机制做到精巧灵动自运行？',
            '2、自运行机制的优化： 如何科学的设计公式与参量的设计法？',
            '3、自运行机制的弈化： 如何达到企业与员工高度的利益均衡？'
          ]
        },
        {
          title: '自运行机制——思维变革',
          items: [
            '1、自运行设计全流程详解（十大步骤）',
            '2、自运行落地经典案例剖析。',
            '①生产型；②科技型；③连锁型；',
            '④房产建筑；⑤股份制；⑥服务型。',
            '通用市场部案例：戴氏环销法 非物质激励案例：机会激励、特权激励'
          ]
        }
      ],
      // 学习形式
      tabCardTwoArr: [
        {
          img: require('@/assets/images/c_1.jpg'),
          title: '全球独创理论教学',
          text: '（哈佛大学特聘专家授课）'
        },
        {
          img: require('@/assets/images/c_2.jpg'),
          title: '独创实战案例分析',
          text: '（各类主流行业均有剖析）'
        },
        {
          img: require('@/assets/images/c_3.jpg'),
          title: '量身定制实战练习',
          text: '（现场专家指导边学边做）'
        }
      ],
      // 服务流程
      tabCardThreeArr: [
        {
          img: require('@/assets/images/c_4.png'),
          title: '研读企业背景资料',
          tips: '(项目调研)'
        },
        {
          img: require('@/assets/images/c_5.png'),
          title: '研读企业背景资料',
          tips: '(项目调研)'
        },
        {
          img: require('@/assets/images/c_6.png'),
          title: '研读企业背景资料',
          tips: '(项目调研)'
        },
        {
          img: require('@/assets/images/c_7.png'),
          title: '研读企业背景资料',
          tips: '(项目调研)'
        },
        {
          img: require('@/assets/images/c_8.png'),
          title: '研读企业背景资料',
          tips: '(项目调研)'
        },
        {
          img: require('@/assets/images/c_9.png'),
          title: '研读企业背景资料',
          tips: '(项目调研)'
        },
        {
          img: require('@/assets/images/c_10.png'),
          title: '研读企业背景资料',
          tips: '(项目调研)'
        },
        {
          img: require('@/assets/images/c_11.png'),
          title: '研读企业背景资料',
          tips: '(项目调研)'
        },
        {
          img: require('@/assets/images/c_12.png'),
          title: '研读企业背景资料',
          tips: '(项目调研)'
        },
        {
          img: require('@/assets/images/c_13.png'),
          title: '研读企业背景资料',
          tips: '(项目调研)'
        }
      ],
      // 服务案例
      serviceCases: [
        { img: require('@/assets/images/s_1.jpg') },
        { img: require('@/assets/images/s_2.jpg') },
        { img: require('@/assets/images/s_3.jpg') },
        { img: require('@/assets/images/s_4.jpg') },
        { img: require('@/assets/images/s_5.jpg') },
        { img: require('@/assets/images/s_6.jpg') },
        { img: require('@/assets/images/s_7.jpg') },
        { img: require('@/assets/images/s_8.jpg') },
        { img: require('@/assets/images/s_9.jpg') },
        { img: require('@/assets/images/s_10.jpg') },
        { img: require('@/assets/images/s_11.jpg') },
        { img: require('@/assets/images/s_12.jpg') },
        { img: require('@/assets/images/s_13.jpg') },
        { img: require('@/assets/images/s_14.jpg') },
        { img: require('@/assets/images/s_15.jpg') },
        { img: require('@/assets/images/s_16.jpg') },
        { img: require('@/assets/images/s_17.jpg') },
        { img: require('@/assets/images/s_18.jpg') },
        { img: require('@/assets/images/s_19.jpg') },
        { img: require('@/assets/images/s_20.jpg') },
        { img: require('@/assets/images/s_21.jpg') }
      ],
      // 国立资讯
      cardFiveArr: [
        {
          img: require('@/assets/images/e_1.jpg'),
          content: '自运行：为什么大航海时代后， 中国的发展和西欧差几百年。'
        },
        {
          img: require('@/assets/images/e_2.jpg'),
          content: '自运行：一味的绩效考核只会成为企业的悲剧。'
        },
        {
          img: require('@/assets/images/e_3.jpg'),
          content: '《制度的力量》——2019良品铺子年会杨董分享。'
        }
      ],
      // 感悟分享
      perceptionSharing: [
        {
          img: require('@/assets/images/v-bg.png'),
          title: '',
          vid: 'q09020z6yuw'
        },
        {
          img: require('@/assets/images/vs-bg.png'),
          title: '',
          vid: 'q09020z6yuw'
        },
        {
          img: require('@/assets/images/vs-bg.png'),
          title: '',
          vid: 'q09020z6yuw'
        },
        {
          img: require('@/assets/images/vs-bg.png'),
          title: '',
          vid: 'q09020z6yuw'
        }
      ]
    }
  },
  methods: {
    tabChange (val) {
      this.currentTab = val
    }
  }
}
</script>

<style lang="scss" scoped>
  .home-page{
    .el-carousel{
      // width:100%;
      // height:600px;
       .imglist{
        width: 100%;
        // height: 100%;
      }
    }
  .page-content-fluid{
    .page-content{
       margin: 50px auto 0;
    }
  }
  .page-content-server{
    margin-bottom: 12px;
  }
  .page-content{
    .classContent{
      height:758px;
    }
    .severProcess{
      margin-top:54px;
    }
    .severCase{
      margin-top:70px;
    }
    .title-more {
      margin-bottom: 60px;
    }
  }
  .aboutus{
    margin: 60px auto 0;
  }
    .card-one-items {
      position: relative;
      z-index: 9999;
      margin-top: -120px;
      background: #fff;
      box-shadow: 1px 1px 2px #999;
    }
    .divide-bg-line {
      &.one{
        background: url("../../assets/images/b_5.jpg") no-repeat center;
      }
    }
    .tab-three-bg-line {
      &.one::after{
        display: block;
        margin: auto;
        content: url("../../assets/images/c_15.jpg");
      }
      &.two::after{
        display: block;
        margin: auto;
        content: url("../../assets/images/c_16.jpg");
      }
    }
    .service-case-img {
      width: calc((100% - 30px) / 7);
      margin-bottom: 8px;
      border: 1px solid #ccc;
      &:hover{
        border-color: #c9131a;
      }
    }
    .perception-sharing{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 600px;
      .right-items{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 350px;
        background-color: #f1f1f1;
        .right-item{
          margin: 5px;
        }
      }
    }
  }
</style>

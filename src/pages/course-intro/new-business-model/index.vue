<template>
  <div class="page-wrapper">
    <!-- 幻灯片 -->
    <el-carousel :interval="5000" arrow="never" height="420px" indicator-position="none" style="width: 100%">
      <el-carousel-item>
        <img class="imglist" src="@/assets/images/banner.jpg"/>
      </el-carousel-item>
    </el-carousel>
    <div class="page-content">
      <!-- 商业模式的转变 -->
      <bg-line-blue title="商业模式的转变" tips="A Shift In Business Model"/>
      <div class="card-box-normal">
        <card-one v-for="(card, index) in cardOneContent" :key="index" :card-content="card"/>
      </div>
      <!-- 新商业模式 -->
      <bg-line-blue title="新商业模式" tips="New Business Model"/>
      <div class="img-box">
        <img src="@/assets/images/syms_8.jpg"/>
      </div>
      <bg-line-blue title="改变企业的商业模式" tips="Changing Business Models"/>
    </div>
    <!-- 改变商业模式的两条路径 -->
    <div class="page-content-fluid">
      <div class="page-content">
        <div class="business-models">
          <img src="@/assets/images/twoway.png"/>
          <dl>
            <dd class="one"><span>“外科手术式”</span>的商业模式仿造，即在<span>“宏观企业实体”</span>层面上，
              将别人的商业模式作为参考模板，对其进行复制、移植、改良等，转而用到自己企业身上。</dd>
            <dd class="two"><span>“基因工程式”</span>的商业模式创造，即在<span>微价值环节</span>层面上，对商业
              模式的<span>“基因”片段——价值环节进行剪切、插入、替换、拼接。</span></dd>
            <dd>最终为企业量身打造出符合他自身实际、适合他自身需要的<span>商业模式新“品种”。</span></dd>
          </dl>
        </div>
      </div>
    </div>
    <!-- 导师介绍 -->
    <div class="page-content">
      <bg-line-blue title="导师介绍" tips="Mentor introduction"/>
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
        <img src="@/assets/images/syms_6.png"/>
        <p>400-027-2007</p>
      </div>
    </div>
    <!-- 五大盈利模式 -->
    <div class="page-content course-outline">
      <bg-line-blue title="五大盈利模式" tips="Five major profit patterns"/>
      <five-patterns/>
      <!-- 课程大纲 -->
      <bg-line-blue title="课程大纲" tips="Curriculum Outline"/>
      <card-two v-for="(card, index) in cardTwoContent" :key="index" :card-content="card"/>
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
    <div class="page-content course-outline">
      <bg-line-blue title="课程收获" tips="Curriculum Harvest"/>
      <!-- 课程收获 -->
      <card-three v-for="(card, index) in cardThreeContent" :key="index" :card-content="card"/>
    </div>
    <!-- 课程精彩 -->
      <bg-line-blue title="课程精彩" tips="Excellent Course"/>
      <el-carousel :interval="2500" type="card" height="300px" class="excellent-course" indicator-position="none">
        <el-carousel-item v-for="(item, index) in excellentCourse" :key="index">
          <img :src="item.img"/>
        </el-carousel-item>
      </el-carousel>

  </div>
</template>

<script>
import CardOne from './components/card-one'
import FivePatterns from './components/five-patterns'
import CardTwo from './components/card-two'
import CardThree from './components/card-three'
export default {
  name: 'NewBusinessModel',
  components: { CardOne, FivePatterns, CardTwo, CardThree },
  data () {
    return {
      // 商业模式的转变
      cardOneContent: [
        {
          title: '盈利',
          content: '为什么说商业位势越底企业越不赚钱？'
        },
        {
          title: '盈利',
          content: '为什么说商业位势越底企业越不赚钱？'
        },
        {
          title: '盈利',
          content: '为什么说商业位势越底企业越不赚钱？'
        },
        {
          title: '盈利',
          content: '为什么说商业位势越底企业越不赚钱？'
        }
      ],
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
      // 课程大纲
      cardTwoContent: [
        {
          title: '厘清赚钱逻辑',
          items: [
            '梳理产业价值链，',
            '重构企业价值环节，',
            '设计价值交换方式。'
          ]
        },
        {
          title: '厘清赚钱逻辑',
          items: [
            '梳理产业价值链，',
            '重构企业价值环节，',
            '设计价值交换方式。'
          ]
        },
        {
          title: '厘清赚钱逻辑',
          items: [
            '梳理产业价值链，',
            '重构企业价值环节，',
            '设计价值交换方式。'
          ]
        },
        {
          title: '厘清赚钱逻辑',
          items: [
            '梳理产业价值链，',
            '重构企业价值环节，',
            '设计价值交换方式。'
          ]
        },
        {
          title: '厘清赚钱逻辑',
          items: [
            '梳理产业价值链，',
            '重构企业价值环节，',
            '设计价值交换方式。'
          ]
        },
        {
          title: '厘清赚钱逻辑',
          items: [],
          text: '帮你从有钱没时间，实现有时间又有闲，帮你实现一山容百虎，百花齐放，企业蒸蒸日上的新气象。解除大企业反应迟钝的魔咒，实现老板无为而治的梦想。'
        }
      ],
      // 课程收获
      cardThreeContent: [
        {
          title: '21种设计',
          content: '基于7大客户需求的21种靶点设计'
        },
        {
          title: '21种设计',
          content: '基于7大客户需求的21种靶点设计'
        },
        {
          title: '21种设计',
          content: '基于7大客户需求的21种靶点设计'
        },
        {
          title: '21种设计',
          content: '基于7大客户需求的21种靶点设计'
        },
        {
          title: '21种设计',
          content: '基于7大客户需求的21种靶点设计'
        },
        {
          title: '21种设计',
          content: '基于7大客户需求的21种靶点设计'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.course-outline{
      margin-bottom: 100px;
    }
  .img-box{
    height: 670px;
    padding: 10px;
    line-height: 670px;
    box-shadow: -1px -1px 2px 2px #f1f1f1 inset;
    img{
      width: 1180px;
    }
  }
  .business-models {
    display: flex;
    font-size: 18px;
    img{ margin-right: 20px; }
    dd{
      margin-top: 50px;
      line-height: 32px;
      font-weight: bold;
      &::before{
        display: inline-block;
        float: left;
        margin-right: 8px;
        border-radius: 10px;
        text-align: center;
        font-size: 24px;
        &::after{
          clear: left;
        }
      }
      &.one::before{
        content: url("../../../assets/images/1.png");
      }
      &.two::before{
        content: url("../../../assets/images/2.png");
      }
      span{ color: #0000ff;}
    }
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
        background: url("../../../assets/images/sy_8.jpg") no-repeat center;
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
      margin: 40px 0;
      img{ margin-right: 30px; }
      dt{
         margin-bottom: 60px;
          font-size: 30px;
          background: #003282;
          color:#fff;
          width: 260px;
          line-height: 60px;
          text-align: center;
          border-radius: 5px;
          margin-left:-30px;
        // color:;
      }
      dd {
        margin-bottom: 15px;
        line-height: 30px;
        &::before{
          margin-right: 20px;
          vertical-align: middle;
          content: '»';
          color: #003282;
          font-size: 24px;
        }
      }
    }
  }
  .divide-bg-line {
    &.one{ background: url("../../../assets/images/syms_5.jpg") no-repeat center; }
    &.two{ background: url("../../../assets/images/syms_7.jpg") no-repeat center; }
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
      margin: 80px auto 0;
      color: #fff;
      p{ font-size: 28px}
      dt{
        font-size: 30px;
      }
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
</style>

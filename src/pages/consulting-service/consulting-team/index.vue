<template>
  <div class="page-wrapper">
    <el-carousel :interval="5000" arrow="never" height="420px" indicator-position="none" style="width: 100%">
      <el-carousel-item>
        <img  class="imglist" src="@/assets/images/consult.jpg"/>
      </el-carousel-item>
    </el-carousel>
    <div class="page-content">
      <bg-line title="传统管理与自运行机制的区别" tips="The Difference Between Tradition And Self-running"/>
      <div class="img-box-normal">
        <img src="@/assets/images/service_1.jpg" width="1180px"/>
      </div>
      <bg-line title="自运行机制设计方法论" tips="Self-running mechanism design methodology"/>
      <semicircle/>
      <bg-line title="自运行机制设计方法论" tips="Self-running mechanism design methodology"/>
    </div>
    <div class="page-content-fluid">
      <div class="page-content">
        <round/>
      </div>
    </div>
    <div class="page-content">
      <div class="consult-team">
        <div class="more">
          <p class="left">&nbsp;&nbsp;&nbsp;咨询团队</p>
          <p>查看更多+</p>
        </div>
        <div>
          <card-one v-for="(card, index) in cardOneContent" :key="index" :card-content="card"/>
        </div>
      </div>
      <bg-line title="服务流程" tips="Service Processes"/>
      <div class="service-line one">
        <template  v-for="(item, index) in serviceLineContent">
          <service-line v-if="index < 5" :key="index" :card-content="item"/>
        </template>
      </div>
      <div class="service-line two">
        <template  v-for="(item, index) in serviceLineContent">
          <service-line v-if="index > 4" :key="index" :card-content="item"/>
        </template>
      </div>
    </div>
    <div class="divide-bg-line one">
      <dl class="divide-content">
        <dt>咨询结果</dt>
        <dd>
          <p><span>01</span>《商业模式及管理机制调研分析与设计思路》</p>
          <p><span>02</span>《整体管理机制设计方案》（包含生产力单元、各部门各岗位、职业发展通道、及升降级标准等）</p>
          <p><span>03</span>《管理机制测算表》</p>
        </dd>
      </dl>
    </div>
    <div class="page-content">
      <bg-line title="企业设计是什么?" tips="What is enterprise design?"/>
    </div>
    <div class="page-content-fluid what">
      <div class="page-content">
        <p>企业设计，设计企业未来。过去，一个优秀企业是千难万险做出来的；未来，一个优秀的企业是设计出来的。</p>
        <p>企业设计，比建筑设计、工业设计富有创造性也富有挑战性。人类社会伟大的发明，既不是某项技术，也不
          是某项产品，而是自身的模式设计、流程设计、机制设计、组织设计。 </p>
        <p>企业设计，包括商业模式设计、业务流程设计、管理机制设计、组织生态设计、企业文化设计，以及商业环境生
          态学和企业进化工程。这一新兴管理学科，正是管理学从传统“机械范式”转向“生态范式”的伟大变革。</p>
        <img src="@/assets/images/service_10.jpg"/>
      </div>
    </div>
    <div class="page-content">
      <bg-line title="新一代经济学、金融学、企业设计学" tips="A new generation of corporate design"/>
      <img src="@/assets/images/service_11.jpg"/>
      <bg-line title="见证国立" tips="Witness the State"/>
    </div>
  </div>
</template>

<script>
import Semicircle from './components/semicircle'
import Round from './components/round'
import CardOne from './components/card-one'
import ServiceLine from './components/service-line'
export default {
  name: 'ConsultingTeam',
  components: { Semicircle, Round, CardOne, ServiceLine },
  data () {
    return {
      cardOneContent: [
        {
          img: require('@/assets/images/service_4.jpg'),
          name: '姚顺平'
        },
        {
          img: require('@/assets/images/service_5.jpg'),
          name: '姚顺平'
        },
        {
          img: require('@/assets/images/service_6.jpg'),
          name: '姚顺平'
        },
        {
          img: require('@/assets/images/service_7.jpg'),
          name: '姚顺平'
        }
      ],
      serviceLineContent: [
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
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-wrapper {
    .page-content {
      width: 1200px;
      margin: 50px auto;
      .img-box-normal{
        padding: 10px;
        border: 2px solid #f1f1f1;
      }
    }
    .page-content-fluid{
      padding: 1px;
      background-color: #f1f1f1;
    }
  }
  .consult-team{
    .more{
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      .left{
        vertical-align: top;
        &::before{
          content: url("../../../assets/images/service_19.png");
        }
      }
    }
  }
  .service-line {
    text-align: center;
    margin: 25px auto;
    &.one::after{
      content: url("../../../assets/images/c_15.jpg");
    }
    &.two::after{
      content: url("../../../assets/images/c_16.jpg");
    }
  }
  .divide-bg-line {
    &.one{ background: url("../../../assets/images/service_9.jpg") no-repeat center; }
    &.one .divide-content{
      height: 260px;
      dt{
        width: 250px;
        height: 150px;
        line-height: 150px;
        padding-left: 20px;
        background: url("../../../assets/images/service_12.png") no-repeat center;
        background-size: 100% 100%;
        color: #c9131a;
        font-size: 30px;
      }
      dd{
        margin-left: 15px;
        line-height: 48px;
        font-size: 20px;
        span{
          font-size: 24px;
          &::after{
            content: '';
            border-right: 4px solid #fff;
            margin: auto 8px;
          }
        }
      }
    }
    .divide-content{
      display: flex;
      align-items: center;
      width: 1200px;
      margin: auto;
      color: #fff;
    }
  }
  .what{
    background-color: #f6f6f6!important;
    p{
      margin-bottom: 10px;
      text-indent: 32px;
      line-height: 32px;
      font-size: 16px;
    }
    img{
      display: block;
      width: 930px;
      margin: auto;
    }
  }
</style>

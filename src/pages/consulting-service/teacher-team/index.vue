<template>
  <div class="page-wrapper">
    <el-carousel :interval="5000" arrow="never" height="420px" indicator-position="none" style="width: 100%">
      <el-carousel-item>
        <img class="imglist" src="@/assets/images/consult_team.jpg"/>
      </el-carousel-item>
    </el-carousel>
    <div class="page-content" style="margin-bottom: 0">
      <bg-line title="总设计师"/>
      <div class="person-info">
        <img src="@/assets/images/zxs_2.jpg"/>
        <div class="person-info-desc">
          <div v-for="(personInfo, index) in personItems" :key="index">
            <span>{{personInfo.title}}:</span>
            <p v-for="(item, index) in personInfo.items" :key="index">{{item}}</p>
          </div>
        </div>
      </div>
      <bg-line title="咨询团队"/>
      <div class="team-info">
        <div class="left-list">
          <left-card v-for="(card, index) in leftList" :key="index" :card-content="card"/>
        </div>
        <div class="right-list">
          <right-card v-for="(card, index) in rightList" :key="index" :card-content="card"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import leftCard from './components/left-card'
import rightCard from './components/right-card'
export default {
  name: 'TeacherTeam',
  components: { leftCard, rightCard },
  data () {
    return {
      personItems: [
        {
          title: '国立咨询总设计师',
          items: ['北大汇丰商业模式研究中心副主任', '拥有横跨5大专业领域的学术背景', '拥有外企、国企、民企丰富的实战经验']
        },
        {
          title: '学术成就',
          items: ['经济学、管理学范式革命的倡导者，新范式经济学创始人，“企业设计”管理学科创始人，管理制度设计学创始人，商业模式设计学创始人。']
        },
        {
          title: '主要著作',
          items: ['《无为而治:设计自动运行的企业制度》、《商业模式的全新设计》、《经济学：范式革命》、《新范式金融学》、《新范式金融学》均为新兴学科领域开山之作。']
        },
        {
          title: '主要经历',
          items: ['曾经在IBM、摩托罗拉、香港新世界等500强企业任高管。在申通快递就任企业“首席制度官”。横跨五大学科（理学学士、工学双学士、法学硕士、经济学博士、' +
          '工商管理博士后）的学习经历，政府部门供职经验，私企、港企、外企之工作背景，到如今国内著名高等学府的教授，丰富的人生阅历使得国立南方管理体系既创新又接地气。' +
          '戴天宇教授主持过60多个企业和政府咨询项目，均获得显著的实施效果。']
        }
      ],
      leftList: [
        {
          name: '巩永宁',
          content: '擅长以快速诊断企业的关键命题为切入点，为企业提供战略及商业模式设计、管理机制设计、业务流程设计等。'
        },
        {
          name: '巩永宁',
          content: '擅长以快速诊断企业的关键命题为切入点，为企业提供战略及商业模式设计、管理机制设计、业务流程设计等。'
        },
        {
          name: '巩永宁',
          content: '擅长以快速诊断企业的关键命题为切入点，为企业提供战略及商业模式设计、管理机制设计、业务流程设计等。'
        },
        {
          name: '巩永宁',
          content: '擅长以快速诊断企业的关键命题为切入点，为企业提供战略及商业模式设计、管理机制设计、业务流程设计等。'
        },
        {
          name: '巩永宁',
          content: '擅长以快速诊断企业的关键命题为切入点，为企业提供战略及商业模式设计、管理机制设计、业务流程设计等。'
        }
      ],
      rightList: [
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
  .person-info{
    display: flex;
    &-desc{
      margin-left: 25px;
      line-height: 32px;
      span{
        display: inline-block;
        margin: 10px auto;
        font-size: 20px;
        color: #c9131a;
      }
      p{
        text-indent: 38px;
      }
    }
  }
  .team-info{
    display: flex;
    .left-list{
      width: 300px;
      padding: 10px 20px;
      background-color: #f5f5f5;
    }
    .right-list{
      width: 900px;
    }
  }
</style>

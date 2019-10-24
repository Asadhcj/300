<template>
  <div class="page-wrapper">
    <el-carousel :interval="5000" arrow="never" height="420px" indicator-position="none" style="width: 100%">
      <el-carousel-item>
        <img  class="imglist" src="@/assets/images/consult_dty.jpg"/>
      </el-carousel-item>
    </el-carousel>
    <div class="page-content">
      <bg-line title="戴天宇" tips=""/>
      <div class="person-intro">
        <dl>
          <dt>戴天宇</dt>
          <dd v-for="(item, index) in personInfo" :key="index">{{item}}</dd>
        </dl>
        <img src="@/assets/images/zxs_1.jpg"/>
      </div>
      <page-item v-for="(pageItem, index) in pageItemContentArr" :key="index" :item-content="pageItem"/>
    </div>
  </div>
</template>

<script>
import PageItem from './conponents/page-item'
export default {
  name: 'ChiefDesigner',
  components: { PageItem },
  data () {
    return {
      personInfo: [
        '自运行、新商业模式的核心讲师及总设计师',
        '北大汇丰商业模式研究中心副主任',
        '北京大学企业生态设计研究中心主任',
        '中国企业管理制度设计学创始人',
        '中国企业生态学创始人',
        '中国企业制度设计大师',
        '北京大学汇丰商学院副教授',
        '清华大学工商管理博士后、中科院经济学博士，法学硕士、理学和工学双学士，' +
        '原清华大学管理制度设计中心主任、教授；深圳市政府决策委员会专家委员、深圳市再担保中心监事会专家委员；'
      ],
      pageItemContentArr: [
        {
          title: '学术成就',
          items: [
            '经济学、管理学范式革命的倡导者，新范式经济学创始人，“企业设计”管理学科创始人' +
            '，管理制度设计学创始人，商业模式设计学创始人。'
          ]
        },
        {
          title: '主要著作',
          items: [
            '《无为而治:设计自动运行的企业制度》、《商业模式的全新设计》、《经济学：范式革命》、' +
            '《新范式金融学》、《新范式金融学》均为新兴学科领域开山之作。'
          ]
        },
        {
          title: '教育背景',
          items: [
            '2000.09-2003.09 清华大学经济管理学院工商管理专业博士后',
            '1999.04-2000.07 中国社会科学院经济所宏观经济政策专业经济学博士',
            '1997.09-1999.03 中国社会科学院世界经济所环境经济专业经济学博士',
            '1994.09-1997.07 中国人民大学法学院国际私法专业法学硕士',
            '1992.09-1994.07 武汉大学计算机系软件工程专业工学双学士',
            '1991.09-1992.07 武汉大学CUSBEA(中美联合分子生物学进修班)',
            '1989.09-1994.07 武汉大学生命科学院遗传工程专业理学学士'
          ]
        },
        {
          title: '工作经历',
          items: [
            '2004.2-2011.8 清华大学深圳研究生院教师、管理制度设计中心主任',
            '2002.9-2003.9 北京中鼎应用经济学研究所常务副所长',
            '2001.7-2002.9 天津大港区区长助理、副区长;天津互联网协会副秘书长',
            '2000.2-2001.2 香港新世界发展有限公司(HK0017)高科技业务首席代表',
            '2000.1-2007.1 在申通快递就任中国第一个企业“首席制度官”',
            '1998.7-2000.1 香港新世界基建有限公司(HK0301)业务发展部经理',
            '1997.7-1998.6 Motorola蜂窝电话大中华区总部客户服务部经理',
            '1996.6-1997.6 国家统计局中国市场调查研究中心流通调查部经理',
            '1995.9-1996.5 国家建设部依格自动控制公司项目工程师',
            '1992.9-1994.7 中国船舶研究院709所数字工程公司工程师'
          ]
        },
        {
          title: '教学经历',
          items: [
            '在清华大学本部和深圳研究生院先后开设高级微观、高级宏观、产业经济学、博弈论、国际金融、国际反倾销、' +
            '管理信息系统、电子商务、企业CI设计、服务管理、客户关系管理、创业管理等十三门课程，获得清华大学教学成果二等奖。',
            '曾在中科大、上海交大、上海财大等校为MBA/EMBA开设《博弈论与管理决策》、《管理制度设计》、《企业生态设计》' +
            '等课程，讲授二十多课次。'
          ]
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
  .person-intro {
    display: flex;
    height: 550px;
    margin: 80px auto;
    dl{
      width: 700px;
      margin-right: 25px;
      dt{
        width: 180px;
        height: 80px;
        line-height: 80px;
        margin-bottom: 20px;
        font-size: 30px;
        color: #fff;
        text-align: center;
        background: url("../../../assets/images/zxs_0.jpg") no-repeat center;
        background-size: 100% 100%  ;
      }
      dd{
        line-height: 40px;
        font-size: 20px;
      }
    }
  }
</style>

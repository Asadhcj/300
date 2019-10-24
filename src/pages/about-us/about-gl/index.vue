<template>
  <div class="page-wrapper">
    <!-- 幻灯片 -->
    <el-carousel :interval="5000" arrow="never" height="420px" indicator-position="none" style="width: 100%">
      <el-carousel-item>
        <img class="imglist" src="@/assets/images/about.jpg"/>
      </el-carousel-item>
    </el-carousel>
    <div class="page-content">
      <!-- 国立简介 -->
      <bg-line title="国立简历" tips="National Profile"/>
      <div class="company-intro">
        <h3>国立咨询—企业自运行机制开创者</h3>
        <img src="@/assets/images/about_18.jpg">
        <p v-for="(item, index) in companyIntro" :key="index">
          <span>{{item.title}}</span>
          {{item.content}}
        </p>
      </div>
      <!-- 员工风采 -->
      <bg-line title="员工风采" tips="Staff Style"/>
      <!-- 联系我们 -->
      <bg-line title="联系我们" tips="Contact Us"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutGl',
  data () {
    return {
      companyIntro: [
        {
          title: '公司简介：',
          content: '深圳市国立企业管理咨询有限公司，是一家专注于企业设计的公司，由企业设计大师戴天宇' +
            '先生发起创建,公司起源于北大汇丰，总部设在深圳，在北京、广州、深圳、青岛、长沙等地设有分公司'
        },
        {
          title: '核心产品：',
          content: '企业自运行机制，致力于帮助企业打造一套让所有人为自己干的机制。'
        },
        {
          title: '戴天宇语录：',
          content: '一个优秀的管理者势必会成为一个优秀的“游戏规则制定者”，让别人去玩，玩的结果正是他想要的！'
        },
        {
          title: '',
          content: '自运行机制自2001年以来，已经为1万余家企业提供了变革性培训与咨询，为180多家企业进行了自运行设计，' +
            '其中的申通更是做到了从快递小哥到高层骨干“自组织”“自管理”“自运行”的变革， 实现了100万到100亿商业传奇。'
        },
        {
          title: '',
          content: '为了让更多企业家不再“鞠躬尽瘁”，戴老师在原有理论课的基础上，结合了自己5大学术领域的专业背景，' +
            '以及在外企、国企、民企的高管经验和几百家企业操刀案例的深度提炼，研发出了一套从根本上解放老板的课程《企业自运行机制设计》。'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .company-intro{
    h3{
      margin: 30px auto;
      text-align: center;
      color: #c9131a;
      font-size: 24px
    }
    img{ margin-bottom: 30px}
    P{
      line-height: 40px;
      text-indent: 36px;
      font-size: 18px;
      span{
        font-weight: bold;
        color: #c9131a;
        letter-spacing: 2px;
      }
    }
  }
</style>

<template>
  <div class="page-footer">
    <div class="content-box">
      <div style="display: flex">
        <dl v-for="(item, index) in footerData" :key="index">
          <dt>{{item.title}}</dt>
          <dd v-for="(link, index) in item.menus" :key="index">{{link.link}}</dd>
        </dl>
        <dl>
          <dt>400-027-2007</dt>
          <dd><img src="@/assets/images/ew_03.jpg"/></dd>
        </dl>
      </div>
      <p>友情链接 :    北京大学汇丰商学院  申通快递  创维集团  拉芳家化  泸州老窖  网站目录大全</p>
      <div style="text-align: center;line-height: 35px;margin-top: 30px;">
        <p>总部地址：广东省深圳市南山区学府路263号大新时代大厦11层</p>
        <p>分公司：北京、广州、青岛、长沙</p>
        <p>深圳市国立企业管理咨询有限公司 © 版权所有 备案号：粤ICP备18091182号</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageFooter',
  data () {
    return {
      footerData: [
        {
          title: '课程介绍',
          menus: [
            { link: '图解自运行' },
            { link: '自运行机制' },
            { link: '新商业模式' }
          ]
        },
        {
          title: '课程介绍',
          menus: [
            { link: '图解自运行' },
            { link: '自运行机制' },
            { link: '新商业模式' }
          ]
        },
        {
          title: '课程介绍',
          menus: [
            { link: '图解自运行' },
            { link: '自运行机制' },
            { link: '新商业模式' }
          ]
        },
        {
          title: '课程介绍',
          menus: [
            { link: '图解自运行' },
            { link: '自运行机制' },
            { link: '新商业模式' }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-footer {
    height: 430px;
    margin-top: 80px;
    background-color: #c9131a;
    color: #fff;
    .content-box {
      width: 1200px;
      margin: auto;
      padding-top: 50px;
      dl{
        width: 210px;
        text-align: center;
        line-height: 28px;
        &:not(:nth-child(1)),
        &:not(:nth-child(5)){
          margin: 0 35.7px;
        }
        dt {
          font-size: 24px;
          margin-bottom: 15px;
        }
      }
    }
  }
</style>

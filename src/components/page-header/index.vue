<template>
  <div class="page-header-container">
    <img src="../../assets/images/sys_logo.jpg" class="sys-logo"/>
    <div class="contact-menu-box">
      <p class="tel">400-027-2007</p>
      <g-l-menu/>
    </div>
  </div>
</template>

<script>
import routes from '../../router/routes'
import GLMenu from './components/menu'
export default {
  name: 'PageHeader',
  components: { GLMenu },
  data () {
    return {
      routes
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-header-container{
    display: flex;
    justify-content: space-between;
    // align-items: center;
    margin: auto;
    width: 1200px;
    height: 140px;
    padding: 25px 0;
    .contact-menu-box{
      z-index: 9999;
      .tel {
        height: 32px;
        line-height: 32px;
        font-family: '微软雅黑',serif;
        font-weight: bold;
        font-size: 32px;
        color: #c9131a;
        text-align: right;
        &::before{
          margin-right: 20px;
          vertical-align: middle;
          content: url("../../assets/images/phone.jpg");
        }
      }
    }
  }
</style>

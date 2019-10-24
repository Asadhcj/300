<template>
  <div class="current-page">
    <el-carousel :interval="5000" arrow="never" height="420px" indicator-position="none" style="width: 100%">
      <el-carousel-item>
        <img class="imglist" v-lazy="require('@/assets/images/banner.jpg')"/>
      </el-carousel-item>
    </el-carousel>
    <div class="page-content">
      <bg-line title="一张图看懂自运行机制" tips="A graph reading the self-running mechanism"/>
      <p class="content-text">自运行机制就是为企业打造一套让所有人为自己干的机制。原理是借助员工的利益追
        求和利益博弈，将激励的方向导向企业想达到的战略目标，从而打造出“自组织”“自管理”
        “自运行”的企业机制，这套从根源上解放老板的机制简称自运行机制，实现老板无为而治。</p>
      <div class="img-box">
        <img v-lazy="require('@/assets/images/p_16.jpg')"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'graphicalSelfOperation'
}
</script>

<style lang="scss" scoped>
  .content-text {
    margin-bottom: 35px;
    line-height: 32px;
    font-size: 16px;
    text-indent: 32px;
    letter-spacing: 2px;
  }
  .img-box{
    padding: 30px 50px 50px 50px;
    box-shadow: 0 0 10px 5px #aaa;
    box-sizing: border-box;
    width:100%;
    img{
      width: 100%;
    }
  }
</style>

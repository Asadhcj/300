<template>
  <div class="left-card">
    <div class="icon">{{cardContent.icon || '资深设计师'}}</div>
    <div class="right-desc">
      <p class="title">{{cardContent.name}}</p>
      <p class="content">{{cardContent.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftCard',
  props: {
    cardContent: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .left-card{
    display: flex;
    align-items: center;
    width: 260px;
    height: 90px;
    margin-bottom: 15px;
    padding: 15px;
    cursor: pointer;
    color: #fff;
    background: #c9131a;
    &:hover{
      color: #c9131a;
      background: #fff;
    }
    &:hover .icon{
      color: #fff;
      background: #c9131a;
    }
    .icon{
      display: inline-block;
      width: 65px;
      height: 60px;
      margin-right: 15px;
      padding: 5px;
      line-height: 25px;
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      color: #c9131a;
      background: #fff;
    }
    .right-desc{
      .title{
        margin-bottom: 4px;
        font-size: 20px;
        text-align: center;
      }
      .content{
        width: 150px;
        line-height: 18px;
        font-size: 14px;
        overflow:hidden;
        white-space:normal;
        display:-webkit-box; //将对象作为弹性伸缩盒子模型显示;
        text-overflow:ellipsis;//溢出部分用省略号代替
        -webkit-line-clamp:2; //设置文本显示两行
        -webkit-box-orient:vertical;//从上到下排列子元素;
      }
    }
  }
</style>

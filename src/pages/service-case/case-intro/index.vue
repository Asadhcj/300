<template>
  <div class="page-wrapper">
    <el-carousel :interval="5000" arrow="never" height="420px" indicator-position="none" style="width: 100%">
      <el-carousel-item>
        <img class="imglist" src="@/assets/images/service.jpg"/>
      </el-carousel-item>
    </el-carousel>
    <div class="page-content">
      <bg-line title="客户见证" tips="Customer Witness"/>
      <card-one v-for="(card, index) in cardOneContent" :key="index" :card-content="card"/>
      <bg-line title="学员分享" tips="Student Sharing"/>
      <bg-line title="服务案例" tips="Service Cases"/>
      <div class="case-imgs">
        <img v-for="index in 35" :key="index" :src="require(`@/assets/images/s_${index}.jpg`)"/>
      </div>
    </div>
    <div class="page-content-fluid">
      <div class="page-content divide-content">
        <div v-for="(item, index) in divideItems" :key="index" class="divide-items">
          <img :src="item.img"/>
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
    <div class="page-content">
      <bg-line title="课程精彩" tips="Excellent Course"/>
      <div class="excellent-course-imgs">
        <img
          v-for="index in [85,86, 87, 88, 89, 90 ]"
          :key="index"
          :src="require(`@/assets/images/s_${index}.jpg`)"/>
      </div>
      <bg-line title="案例分享" tips="Case Sharing"/>
      <div class="case-share">
        <div v-for="(item, index) in caseShareItems" :key="index" class="case-share-item">
          <img :src="item.img"/>
          <div>
            <p class="title">{{item.title}}</p>
            <p class="content">{{item.content}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardOne from './components/card-one'
export default {
  name: 'CaseIntro',
  components: { CardOne },
  data () {
    return {
      cardOneContent: [
        {
          name: '高进华',
          company: '史丹利集团',
          img: require('@/assets/images/service_4.jpg')
        },
        {
          name: '高进华',
          company: '史丹利集团',
          img: require('@/assets/images/service_4.jpg')
        },
        {
          name: '高进华',
          company: '史丹利集团',
          img: require('@/assets/images/service_4.jpg')
        },
        {
          name: '高进华',
          company: '史丹利集团',
          img: require('@/assets/images/service_4.jpg')
        },
        {
          name: '高进华',
          company: '史丹利集团',
          img: require('@/assets/images/service_4.jpg')
        },
        {
          name: '高进华',
          company: '史丹利集团',
          img: require('@/assets/images/service_4.jpg')
        },
        {
          name: '高进华',
          company: '史丹利集团',
          img: require('@/assets/images/service_4.jpg')
        }
      ],
      divideItems: [
        {
          img: require('@/assets/images/s_81.jpg'),
          title: '聚焦盈利'
        },
        {
          img: require('@/assets/images/s_75.jpg'),
          title: '聚焦盈利'
        },
        {
          img: require('@/assets/images/s_78.jpg'),
          title: '聚焦盈利'
        },
        {
          img: require('@/assets/images/s_84.jpg'),
          title: '聚焦盈利'
        }
      ],
      caseShareItems: [
        {
          img: require('@/assets/images/s_114.jpg'),
          title: '申通快递（物流）',
          content: '申通快递是一家民营快递公司，他率先设立独立于首席执行官之外的首席制度官来专门负' +
            '责公司管理制度的规划、制定、实施、维护、修订和监督 '
        },
        {
          img: require('@/assets/images/s_114.jpg'),
          title: '申通快递（物流）',
          content: '申通快递是一家民营快递公司，他率先设立独立于首席执行官之外的首席制度官来专门负' +
            '责公司管理制度的规划、制定、实施、维护、修订和监督 '
        },
        {
          img: require('@/assets/images/s_114.jpg'),
          title: '申通快递（物流）',
          content: '申通快递是一家民营快递公司，他率先设立独立于首席执行官之外的首席制度官来专门负' +
            '责公司管理制度的规划、制定、实施、维护、修订和监督 '
        },
        {
          img: require('@/assets/images/s_114.jpg'),
          title: '申通快递（物流）',
          content: '申通快递是一家民营快递公司，他率先设立独立于首席执行官之外的首席制度官来专门负' +
            '责公司管理制度的规划、制定、实施、维护、修订和监督 '
        },
        {
          img: require('@/assets/images/s_114.jpg'),
          title: '申通快递（物流）',
          content: '申通快递是一家民营快递公司，他率先设立独立于首席执行官之外的首席制度官来专门负' +
            '责公司管理制度的规划、制定、实施、维护、修订和监督 '
        },
        {
          img: require('@/assets/images/s_114.jpg'),
          title: '申通快递（物流）',
          content: '申通快递是一家民营快递公司，他率先设立独立于首席执行官之外的首席制度官来专门负' +
            '责公司管理制度的规划、制定、实施、维护、修订和监督 '
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
.case-imgs{
  img{
    width: 160px;
    margin: 0 11.4px 20px 0;
    border: 1px solid transparent;
    &:hover{
      border-color: #c9131a;
    }
  }
}
.divide-content{
  display: flex;
  justify-content: space-between;
  margin: 25px auto!important;
  .divide-items{
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    p{
      margin-top: 10px;
    }
  }
}
.excellent-course-imgs{
  img{
    width: 380px;
    height: 260px;
    margin-bottom: 20px;
    transition: all 0.3s ease-in-out;
    &:nth-child(2),
    &:nth-child(5){
      margin: 0 30px 20px;
    }
    &:hover{
      transform: scale(1.04);
    }
  }
}
.case-share{
  display: flex;
  flex-wrap: wrap;
  &-item{
    display: flex;
    align-items: center;
    width: 580px;
    margin-bottom: 20px;
    &:nth-child(1),
    &:nth-child(3),
    &:nth-child(5){
      margin-right: 40px;
    }
    img{
      margin-right: 16px;
    }
    .title{
      margin-bottom: 12px;
      font-size: 20px;
    }
    .content{
      line-height: 22px;
      font-size: 14px;
      overflow:hidden;
      display:-webkit-box; //将对象作为弹性伸缩盒子模型显示;
      text-overflow:ellipsis;//溢出部分用省略号代替
      -webkit-line-clamp:3; //设置文本显示两行
      -webkit-box-orient:vertical;//从上到下排列子元素;
      white-space:normal;
    }
  }
}
</style>

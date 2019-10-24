<!--
<template>
  <div class="_main-content demo">7文字竖直摆放</div>
</template>

<script>
export default {
  name: 'Demo'
}
</script>

<style lang="less" scoped>
  .demo{
    writing-mode:tb-rl
  }
</style>
-->
<!--
<template>
  <a-table :columns="columns" :dataSource="data" :pagination="{ pageSize: 50 }" bordered :scroll="{ y: 240 }" />
</template>
<script>
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  width: 150
}, {
  title: 'Age',
  dataIndex: 'age'
}, {
  title: 'Address',
  dataIndex: 'address',
  width: 150
}];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: `London, Park Lane no. ${i}London, Park Lane no. ${i}London, Park Lane no. ${i}London, Park Lane no. ${i}London, Park Lane no. ${i}`,
    address: `London, Park Lane no. ${i}`
  });
}

export default {
  data () {
    return {
      data,
      columns
    }
  },
  mounted () {
    console.log(this.$route.query)
  }
}
</script>
-->
<template>
  <div class="_main-content">
    <a-button type="primary" @click="handleClick">点击</a-button>
    <a-modal title="video Modal" v-model="visible" :footer="null" wrapClassName="wrapClassName" :width="850">
      <!--<iframe
        src="https://v.qq.com/txp/iframe/player.html?vid=f0903sfij5a"
        width="100%"
        height="100%"
        frameborder="0"
        allowFullScreen="true"></iframe>-->
      <!--<iframe
        src="http://imgcache.qq.com/tencentvideo_v1/player/TPout.swf?autoplay=1&outhost=http://cf.qq.com/&skin=http://imgcache.qq.com/minivideo_v1/vd/res/skins/TencentPlayerMiniSkin.swf&vid=f0903sfij5a"
        width="100%"
        height="100%"
        frameborder="0"
        allowFullScreen="true"></iframe>-->
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        src="http://static.video.qq.com/TencentPlayer.swf?vid=f0903sfij5a&auto=1&outhost=http://cf.qq.com/"></iframe>
      <!--<video-player
        class="video-player vjs-custom-skin"
        ref="videoPlayer"
        :options="playerOptions">
      </video-player>-->
    </a-modal>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      visible: false,
      playerOptions: {
        // 播放速度
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        // 如果true,浏览器准备好时开始回放。
        autoplay: true,
        // 默认情况下将会消除任何音频。
        muted: false,
        // 导致视频一结束就重新开始。
        loop: false,
        // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        preload: 'auto',
        language: 'zh-CN',
        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        aspectRatio: '16:9',
        // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        fluid: true,
        sources: [{
          // 类型
          type: 'video/x-qlv',
          // url地址
          // src: 'http://vjs.zencdn.net/v/oceans.mp4'
          src: 'https://v.qq.com/x/page/q09020z6yuw.html'
        }],
        // 你的封面地址
        poster: '',
        // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          // 全屏按钮
          fullscreenToggle: false
        }
      }
    }
  },
  watch: {
    visible (val) {
      if (!val) {
        this.$refs.videoPlayer.player.pause()
      }
    }
  },
  methods: {
    handleClick () {
      this.visible = true
    }
  }
}
</script>

<style>
  .ant-modal-content{
    width: 885px!important;
    height: 600px!important;
  }
  .ant-modal-body{
    width: 100%!important;
    height: calc(100% - 55px)!important;
  }
</style>

<!--<template>
  <div class="_main-content">
    <a-input v-model="params.one.two" with="220" @change="handleChange"/>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      params: {
        one: {
          two: ''
        }
      }
    }
  },
  methods: {
    handleChange (e) {
      console.log(e.target.value)
    }
  }
}
</script>-->

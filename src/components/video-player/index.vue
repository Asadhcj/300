<template>
  <div class="video-player">
    <img src="@/assets/images/playericon.png" class="player-icon" @click="playerVisible = true"/>
    <img :src="videoContent.img"/>
    <el-dialog :title="videoContent.title" :visible.sync="playerVisible" width="800px">
      <iframe
        v-if="playerVisible"
        width="100%"
        height="470px"
        frameborder="0"
        :src="`http://static.video.qq.com/TencentPlayer.swf?vid=${videoContent.vid}&auto=1&outhost=http://cf.qq.com/`"></iframe>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: {
    videoContent: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      playerVisible: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .video-player{
    position: relative;
    .player-icon{
      position: absolute;
      width: 50px;
      left:0;
      right: 0;
      margin: auto;
      transform: translateY(-30%);
      top: 50%;
      cursor: pointer;
    }
    img{
      width: 100%;
    }
  }
</style>

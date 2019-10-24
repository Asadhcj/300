<template>
  <div class="page-wrapper">
    <!-- 幻灯片 -->
    <el-carousel :interval="5000" arrow="never" height="420px" indicator-position="none" style="width: 100%">
      <el-carousel-item>
        <img class="imglist" src="@/assets/images/about.jpg"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Staff'
}
</script>

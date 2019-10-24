<template>
  <div class="btn-tabs">
    <div class="tab-labels">
      <div
        v-for="(item, index) in tabs"
        :key="index"
        :style="{width: 1200/tabs.length + 'px'}"
        :class="['label-item', index === currentIndex ? 'active': '']"
        @click="handleClick(item.label, index)">{{item.label}}</div>
    </div>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'buttonTabs',
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      currentIndex: 1
    }
  },
  methods: {
    handleClick (label, index) {
      this.currentIndex = index
      this.$emit('change', label)
    }
  }
}
</script>

<style lang="scss" scoped>
  .tab-labels {
    display: flex;
    .label-item {
      text-align: center;
      line-height: 60px;
      border: 1px solid #ccc;
      font-size: 18px;
      cursor: pointer;
      &.active{
        background-color: #c9131a;
        color: #fff;
      }
    }
  }
  .tab-content {
    display: flex;
    flex-wrap: wrap;
    margin-top: 25px;
    padding: 16px;
    box-shadow: -1px -1px 2px 2px #f1f1f1;
  }
</style>

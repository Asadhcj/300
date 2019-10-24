<template>
  <div class="card-box-normal">
    <dl
      v-for="(card, index) in cardContentArr"
      :key="index"
      :class="index === currentIndex ? 'active':''"
      @mouseover="onMouseOver(index)"
      @mouseout="onMouseOut">
      <dt>{{card.title}}</dt>
      <dd v-for="(item, idx) in card.items" :key="idx">{{item}}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'CardOne',
  props: {
    cardContentArr: {
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
    onMouseOver (index) {
      this.currentIndex = index
    },
    onMouseOut () {
      this.currentIndex = 1
    }
  }
}
</script>

<style lang="scss" scoped>
  dl {
    width: calc((100% - 60px) / 3);
    padding: 25px;
    text-align: center;
    box-shadow: rgba(0,0,0,.6) 0 0 10px;
    transition: all 0.3s;
    &.active{
      transform: scale(1.08) translateY(-5px);
    }
    dt{
      margin-bottom: 20px;
      font-size: 28px;
      color: #c9131a;
    }
    dd { line-height: 28px; }
  }
</style>

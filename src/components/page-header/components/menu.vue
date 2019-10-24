<template>
  <div class="menu-wrapper">
    <dl v-for="(menuItem, index) in routes" :key="index">
      <template v-if="menuItem.children && menuItem.children.length > 0">
        <dt
          @mouseenter="onMouseEnter(index)"
          @mouseout="onMouseOut"
          :class="{active: ($route.meta.parentName || $route.name ) === menuItem.name}">{{ menuItem.meta.title }}</dt>
        <dd
          v-for="(subMenu, idx) in menuItem.children"
          :key="idx"
          :style="{display: showSubMenu === index ? 'block':'none'}"
          @mouseenter="onSubMouseEnter(index)"
          @mouseout="onSubMouseOut"
          @click="turnPage(subMenu.path, index)">{{ subMenu.meta.title }}</dd>
      </template>
      <template v-else>
        <dt
          @mouseenter="onMouseEnter(index)"
          @mouseout="onMouseOut"
          :class="{active: $route.name === menuItem.name }"
          @click="turnPage(menuItem.path, index)">{{ menuItem.meta.title }}</dt>
      </template>
    </dl>
  </div>
</template>

<script>
import routes from '@/router/routes'
export default {
  name: 'GLMenu',
  data () {
    return {
      routes,
      showSubMenu: null,
      currentParent: 0
    }
  },
  methods: {
    // 鼠标进入一级菜单
    onMouseEnter (index) {
      this.showSubMenu = index
      clearTimeout(this._timer)
    },
    // 鼠标离开一级菜单
    onMouseOut () {
      this._timer = setTimeout(() => {
        this.showSubMenu = null
      }, 150)
    },
    // 鼠标进入二级菜单
    onSubMouseEnter () {
      clearTimeout(this._timer)
    },
    // 鼠标离开二级菜单
    onSubMouseOut () {
      this._timer = setTimeout(() => {
        this.showSubMenu = null
      }, 150)
    },
    // 页面跳转
    turnPage (path, index) {
      this.$router.push(path)
      this.showSubMenu = null
      this.currentParent = index
    }
  }
}
</script>

<style lang="scss" scoped>
  .menu-wrapper {
    display: flex;
    margin-top: 15px;
    dl{
      width: 120px;
      margin-left: 15px;
      text-align: center;
      &:first-child{
        dt{
          letter-spacing: 17px;
          text-align: right;
        }
      }
      dt{

        padding: 15px;
        font-size: 20px;
        cursor: pointer;
        &.active,
        &:hover{
          background-color: #c9131a;
          color: #fff;
          border-radius: 4px;
        }
      }
      dd{
        display: none;
        padding: 15px;
        font-size: 16px;
        cursor: pointer;
        background-color: #fff;
        &:hover{
          background-color: #c9131a;
          color: #fff;
          border-radius: 4px;
        }
      }
    }
  }
</style>

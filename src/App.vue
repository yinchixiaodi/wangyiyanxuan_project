<template>
  <div id="app">
    <div class="appContent">
      <router-view></router-view>
      <div class="footerNav">
        <router-link to="/" class="navItem">
          <i class="iconfont icon-shouye"></i>
          <div class="nav_text">首页</div>
        </router-link>
        <router-link to="/catelist" class="navItem">
          <i class="iconfont icon-fenlei"></i>
          <div class="nav_text">分类</div>
        </router-link>
        <router-link to="/worthbuy" class="navItem">
          <i class="iconfont icon-zhidemai"></i>
          <div class="nav_text">值得买</div>
        </router-link>
        <router-link to="/cart" class="navItem">
          <i class="iconfont icon-gouwuche"></i>
          <div class="nav_text">购物车</div>
        </router-link>
        <router-link to="/personal" class="navItem">
          <i class="iconfont icon-gerenzhongxin"></i>
          <div class="nav_text">个人</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="stylus">

#app
  position relative
  width 100%
  height 100%
  .appContent
    width 100%
  .footerNav
    position fixed
    left 0
    bottom 0
    width 100%
    height 98px
    display flex
    align-items center
    .navItem
      width 20%
      text-align center
      color #333
      &.active
        color #DD1A21
      .iconfont
        font-size 40px
      .nav_text
        font-size 12px
</style>

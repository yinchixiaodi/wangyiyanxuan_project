<template>
  <div class="cateContainer">
    <div class="cateHeader">
      <div class="headerContainer">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品，共34097款好物</span>
      </div>
    </div>
    <div class="cateContent">
      <div class="leftContainer"></div>
      <div class="rightContainer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CateList",
};
</script>

<style lang="stylus" scoped>
.cateContainer
  .cateHeader
    width 100%
    padding 16px 30px
    box-sizing border-box
    .headerContainer
      width 100%
      height 56px
      border-radius 8px
      background #ededed
      line-height 56px
      text-align center
      color #666
      iconfont
        font-size 28px
        vertical-align middle
        margin-right 5px
      span
        font-size 24px
  .cateContent
    height calc(100vh - 184px)
    border-top 1px solid #eeeeee
    border-bottom 1px solid #eeeeee
    box-sizing border-box
    display flex
    .leftContainer
      width 20%
      height 100%
      border-right 1px solid #eeeeee
      box-sizing border-box
    .rightContainer
      width 80%
      height 100%
</style>

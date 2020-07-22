<template>
  <div class="personalContainer">
    <div class="personalHeader">
      <img src="@/assets/images/personal/personal.png" alt="" />
      <div class="userInfo">
        <p class="top">未登录</p>
        <p class="bottom">点击登录账号</p>
      </div>
    </div>
    <div class="myPrice">
      我的资产
    </div>
    <div class="content">
      <div class="assetItem">
        <span>￥0</span>
        <span>回馈金</span>
      </div>
      <div class="assetItem">
        <span>￥0</span>
        <span>红包</span>
      </div>
      <div class="assetItem">
        <span>￥0</span>
        <span>优惠券</span>
      </div>
      <div class="assetItem">
        <span>￥0</span>
        <span>津贴</span>
      </div>
      <div class="assetItem">
        <span>￥0</span>
        <span>礼品卡</span>
      </div>
    </div>
    <!-- 列表区 -->
    <div class="personalList">
      <div class="navItem" v-for="(item, index) in personalList" :key="index">
        <i class="iconfont icon-zhidemai"></i>
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Personal",
  data() {
    return {
      personalList: [
        {
          name: "我的订单",
          icon: "icon-dingdan11",
        },
        {
          name: "我的拼团",
          icon: "icon-pintuandingdan",
        },
        {
          name: "领红包",
          icon: "icon-tubiaolunkuo-1",
        },
        {
          name: "我的积分",
          icon: "icon-jifen3",
        },
        {
          name: "地址管理",
          icon: "icon-dizhiguanli",
        },
        {
          name: "账号安全",
          icon: "icon-dingdan11",
        },
        {
          name: "联系客服",
          icon: "icon-zhanghaoanquan",
        },
        {
          name: "用户反馈",
          icon: "icon-tubiaolunkuo-",
        },
        {
          name: "帮助中心",
          icon: "icon-bangzhuzhongxin",
        },
        {
          name: "退还/售后",
          icon: "icon-shouhou",
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
.personalContainer
  width 100%
  height 100%
  .personalHeader
    width 100%
    height 270px
    background #EED7B5
    display flex
    padding 62px 0
    img
      width 142px
      height 142px
      border-radius 50%
      margin 0 10px 0 30px
    .userInfo
      width 338px
      height 80px
      margin-left 30px
      margin-top 20px
      .top
        font-size 36px
        color #fff
      .bottom
        font-size 28px
        color #fff
  .myPrice
    width 100%
    height 105px
    margin-left 30px
    font-size 28px
    color #333
    line-height 105px
    border-bottom 1px solid #eee
    box-sizing border-box
  .content
    width 100%
    height 160px
    display flex
    align-items center
    border-bottom 20px solid #eee
    .assetItem
      width 20%
      height 100%
      text-align center
      display flex
      flex-direction column
      padding-top 32px
      span
        &:first-child
          font-weight bold
          height 50px
          line-height 50px
          font-size 32px
  .personalList
    width 100%
    display flex
    flex-wrap wrap
    border-top 1px solid #eee
    .navItem
      width 33.333%
      text-align center
      border-right 1px solid #eee
      border-bottom 1px solid #eee
      box-sizing border-box
      padding 45px 0
      &:nth-child(3n)
        border-right none
      .iconfont
        font-size 50px
      p
        font-size 24px
        line-height 40px
</style>

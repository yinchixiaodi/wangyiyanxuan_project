<template>
  <div class="loginWayContainer">
    <div class="loginCenter">
      <img
        src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png"
        alt=""
      />
    </div>
    <div class="phoneLogin login" @click="login('phone')">
      <i class="iconfont icon-shouji"></i>
      <span>手机号快捷登录</span>
    </div>
    <div class="emailLogin login">
      <i class="iconfont icon-youxiang"></i>
      <span>邮箱账号登录</span>
    </div>
    <div class="loginFooter">
      <div class="weixin">
        <i class="iconfont icon-weixin"></i>
        <span>微信</span>
      </div>
      <div class="qq">
        <i class="iconfont icon-QQ"></i>
        <span>QQ</span>
      </div>
      <div class="weibo">
        <i class="iconfont icon-weibo"></i>
        <span>微博</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginWay",
  props: {
    changeIsLogin: {
      type: Function,
    },
  },
  methods: {
    // 点击切换登录方式
    login(way) {
      if (way === "phone") {
        this.changeIsLogin(1);
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.loginWayContainer
    .loginCenter
        position relative
        width 100%
        height 482px
        img
            position absolute
            left 0
            top 0
            right 0
            bottom 0
            margin auto
            width 268px
            height 90px
            margin auto
    .login
        width 670px
        height 94px
        border 1px solid #DD1A21
        line-height 94px
        text-align center
        margin 0 40px
        border-radius 5px
        font-size 28px
        .iconfont
            font-size 40px
            vertical-align middle
        &.phoneLogin
            background #DD1A21
            color #fff
            margin-bottom 32px
        &.emailLogin
            color #DD1A21
        span
            vertical-align middle
    .loginFooter
        width 100%
        height 40px
        display flex
        justify-content center
        color #7f7f7f
        font-size 26px
        position absolute
        left 0
        bottom 100px
        text-align center
        div
            padding 0 40px
        .qq
            border-left 1px solid #7f7f7f
            border-right 1px solid #7f7f7f
</style>

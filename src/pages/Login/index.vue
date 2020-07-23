<template>
  <div class="loginContainer">
    <div class="loginHeader">
      <i class="iconfont icon-shouye shouye" @click="toHome"></i>
      <img src="@/assets/images/logo.png" alt="" />
      <div class="right">
        <i class="iconfont icon-sousuo sousuo" @click="toSearch"></i>
        <i class="iconfont icon-gouwuche" @click="toCart"></i>
      </div>
    </div>
    <LoginWay :changeIsLogin="changeIsLogin" v-if="isLogin === 0"></LoginWay>
    <PhoneLogin v-if="isLogin === 1"></PhoneLogin>
  </div>
</template>

<script>
import LoginWay from "@/components/LoginWay/LoginWay";
import PhoneLogin from "@/components/PhoneLogin/PhoneLogin";
export default {
  name: "Login",
  data() {
    return {
      isLogin: 0,
    };
  },
  methods: {
    // 点击跳转到首页
    toHome() {
      this.$router.replace("/");
    },
    // 点击跳转到搜索页面
    toSearch() {
      this.$router.replace("/search");
    },
    // 点击跳转到购物车页面
    toCart() {
      this.$router.replace("/cart");
    },
    // 点击改变显示的内容
    changeIsLogin(isLogin) {
      this.isLogin = isLogin;
    },
  },
  components: {
    LoginWay,
    PhoneLogin,
  },
};
</script>

<style lang="stylus" scoped>
.loginContainer
    position relative
    width 100%
    height 100%
    background #f2f5f4
    box-sizing 99
    .loginHeader
        width 100%
        height 88px
        line-height 88px
        display flex
        justify-content space-between
        padding 0 16px 0 24px
        background #fff
        img
            width 172px
            height 54px
            margin auto 0
            margin-left 40px
        .iconfont
            color #333
            font-size 50px
        .right
            .sousuo
                display inline
                margin-right 40px
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

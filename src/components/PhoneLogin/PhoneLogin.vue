<template>
  <div class="phoneContainer">
    <div class="logo">
      <img
        src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png"
        alt=""
      />
    </div>
    <div class="loginFooter">
      <div class="phoneCode">
        <input type="text" placeholder="请输入手机号" />
      </div>
      <div class="yanzhengma">
        <input type="text" placeholder="请输入短信验证码" />
        <div class="gitCode">获取验证码</div>
      </div>
      <div class="center">
        <span class="leftSpan">遇到问题?</span>
        <span class="rightSpan">使用密码验证登录</span>
      </div>
      <div class="login">登录</div>
      <div class="agree">
        <input type="checkbox" checked /> 我同意 《服务条款》 和
        《网易隐私策略》
      </div>
    </div>
    <div class="ohterLogin">
      <span>
        其他登录方式 >
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhoneLogin",
};
</script>

<style lang="stylus" scoped>
.phoneContainer
    width 100%
    border-top 1px solid #ccc
    box-sizing border-box
    height calc(100vh - 88px)
    background #fff
    .logo
        width 100%
        height 90px
        margin 56px 0
        text-align center
        img
            width 268px
            height 90px
    .loginFooter
        padding 0 40px
        width 100%
        height 516px
        .phoneCode
            width 670px
            height 90px
            border-bottom 1px solid #eee
            margin-top 30px
            input
                margin 28px 0
                border 0
        .yanzhengma
            width 670px
            height 90px
            border-bottom 1px solid #eee
            margin-top 30px
            display flex
            justify-content space-between
            input
                margin 28px 0
                border 0
            .gitCode
                width 160px
                height 50px
                font-size 28px
                border 1px solid #eee
                line-height 50px
                text-align center
                margin 20px 10px 0 0
        .center
            width 100%
            display flex
            justify-content space-between
            margin-top 40px
            margin-bottom 30px
            font-size 28px
            .leftSpan
                color #7f7f7f
            .rightSpan
                color #333
        .login
            width 670px
            height 92px
            line-height 92px
            text-align center
            background #DD1A21
            font-size 28px
            color #fff
            border-radius 5px
        .agree
            margin-top 30px
            input
                background #fff
    .ohterLogin
        width 100%
        text-align center
        margin-top 46px
        font-size 28px
        span
            color #333
</style>

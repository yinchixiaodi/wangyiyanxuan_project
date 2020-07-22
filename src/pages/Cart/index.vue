<template>
  <div class="cartContain">
    <div class="cartHeader">
      <div class="shopCart">购物车</div>
      <div class="give">领券</div>
    </div>
    <div class="cartCenter">
      <div class="cartCenterItem">
        <div class="circle"></div>
        <span>30天无忧退货</span>
      </div>
      <div class="cartCenterItem">
        <div class="circle"></div>
        <span>48小时快速退款</span>
      </div>
      <div class="cartCenterItem">
        <div class="circle"></div>
        <span>满99元免邮费</span>
      </div>
    </div>
    <div class="cart">
      <img
        src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp"
        alt=""
      />
      <div class="login" @click="toLogin">登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  methods: {
    // 如果没有登录，点击去登陆
    toLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="stylus" scoped>
.cartContain
  height 100%
  background #f4f4f4
  .cartHeader
    width 100%
    height 88px
    padding 0 30px
    border-bottom 1px solid #eee
    line-height 88px
    display flex
    justify-content space-between
    .shopCart
      height 100%
      font-size 36px
    .give
      font-size 30px
      margin-right 30px
      color #dd1a21
  .cartCenter
    width 100%
    height 70px
    padding 0 30px
    background #eee
    line-height 70px
    display flex
    justify-content space-between
    .cartCenterItem
      display flex
      position relative
      .circle
        position absolute
        left -12px
        top 28px
        width 10px
        height 10px
        border-radius 50%
        border 1px solid #333
        box-sizing border-box
      span
       color #666
       font-size 24px
  .cart
    margin 300px auto 0
    text-align center
    img
      width 248px
      height 248px
    .login
      width 480px
      height 92px
      line-height 92px
      text-align center
      background #DD1A21
      font-size 30px
      color #fff
      margin 40px 135px
      border-radius 5px
</style>

<template>
  <div class="worthbuyContainer">
    <div class="loginHeader">
      <i class="iconfont icon-shouye shouye" @click="toHome"></i>
      <span>值得买</span>
      <div class="right">
        <i class="iconfont icon-sousuo sousuo" @click="toSearch"></i>
        <i class="iconfont icon-gouwuche" @click="toCart"></i>
      </div>
    </div>
    <div class="title">
      <img
        class="titleImg"
        src="@/assets/images/zhidemai/zhidemai.png"
        alt=""
      />
      <div class="text">严选好物，用心生活</div>
      <img
        class="bgImg"
        src="@/assets/images/zhidemai/zhidemaibeijing.png"
        alt=""
      />
    </div>
    <div class="swiperTab">
      <!-- <div class="swiperContainer"> -->
      <div class="tabItem">
        <div class="item itemTop">
          <img src="@/assets/images/personal/personal.png" alt="" />
          <div class="tabTitle">9.9超值</div>
          <div class="tabContent">爆品定价直降</div>
        </div>
        <!-- <div class="item itemBottom" v-for="navItem in navData" :key="navItem.id">
            <img :src="navItem.picUrl" alt="" />
            <div class="tabTitle">{{navItem.mainTitle}}</div>
            <div class="tabContent">{{navItem.viceTitle}}</div>
          </div> -->
      </div>
      <!-- </div> -->
    </div>
    <!-- 商品展示区 -->
    <div class="goodsShow">
      <div class="goodsItem">
        <div class="goodsImg">
          <img src="@/assets/images/zhidemai/zhidemaibeijing.png" alt="" />
        </div>
        <div class="goodsDesc">
          三伏天闭囤，好评率99.9%的清火花茶
        </div>
        <div class="userInfo">
          <img
            class="userPic"
            src="@/assets/images/personal/personal.png"
            alt=""
          />
          <span class="username">网易云课堂：末末</span>
          <span class="upText">835</span>
        </div>
        <div class="bottom">
          <span class="goodsName">菊花金银花枸杞...</span>
          <span class="buy">去购买 ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getWorthBuyNavData } from "@/api";
export default {
  name: "WorthBuy",
  data() {
    return {
      navData: [],
    };
  },
  async mounted() {
    // 请求获取导航数据
    const result = await getWorthBuyNavData();
    // console.log(result);
    this.navData = result.data.data.navList;
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
  },
};
</script>

<style lang="stylus" scoped>
.worthbuyContainer
  width 100%
  height 100%
  background-color #eee
  .loginHeader
    width 100%
    height 100px
    line-height 100px
    display flex
    justify-content space-between
    align-items center
    vertical-align middle
    padding 0 16px 0 24px
    background #FAFAFA
    span
      font-size 36px
      margin 0 0 0 75px
    .iconfont
      color #333
      font-size 50px
    .right
      .sousuo
        display inline
        margin-right 40px
  .title
    width 750px
    height 524px
    position relative
    .titleImg
      width 130px
      height 68px
      position absolute
      left 12px
      top 58px
    .text
      font-size 30px
      color #fff
      position absolute
      left 148px
      top 76px
    .bgImg
      width 750px
      height 518px
  .swiperTab
    position relative
    left 0
    top -380px
    width 710px
    height 540px
    background-color #fff
    border-radius 10px
    margin 0 auto
    .tabItem
      overflow hidden
      .item
        width 168px
        height 200px
        display flex
        flex-direction column
        align-items center
        margin 28px 6px 0 6px

        img
          width 120px
          height 120px
          border-radius 50%
        .tabTitle
          color #333
          font-size 28px
          font-weight bold
          line-height 40px
        .tabContent
          font-size 24px
          color #999
          line-height 40px
  .goodsShow
    position relative
    left:0
    top:-350px
    width 100%
    .goodsItem
      width 345px
      height 630px
      border-radius 10px
      background #fff
      .goodsImg
        width 345px
        height 345px
        display flex
        flex-direction column
        img
          width 100%
          height 100%
      .goodsDesc
        width 343px
        height 98px
        font-size 28px
        padding 19px 16px 0
        color #333
      .userInfo
        width 343px
        height 89px
        padding 17px 16px 24px
        display flex
        align-items center
        .userPic
          width 48px
          height 48px
          border-radius 50%
        .username
          font-size 24px
          margin-right 8px
          color #7f7f7f
          height 48px
          line-height 48px
        .upText
          font-size 24px
          color #7f7f7f
      .bottom
        width 343px
        height 80px
        border-top 1px solid #eee
        line-height 80px
        padding 20px 19px
        box-sizing border-box
        display flex
        justify-content space-between
        .buy
          color #DD1A21
</style>

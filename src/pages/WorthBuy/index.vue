<template>
  <div class="worthbuyContainer" style="padding-bottom:50px">
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
    <!-- <div class="swiperTab" ref="scrollWrap">
      <div class="tabItem" ref="scrollContent" @click="categoryScrollHandle">
        <div class="item itemTop">
          <img src="@/assets/images/personal/personal.png" alt="" />
          <div class="tabTitle">9.9超值</div>
          <div class="tabContent">爆品定价直降</div>
        </div>
      </div>
    </div> -->
    <div class="swiper-container swiperTab">
      <div class="swiper-wrapper tabItem">
        <div
          class="item itemBottom"
          v-for="navItem in navData"
          :key="navItem.id"
        >
          <img :src="navItem.picUrl" alt="" />
          <div class="tabTitle">{{ navItem.mainTitle }}</div>
          <div class="tabContent">{{ navItem.viceTitle }}</div>
        </div>
        <div class="swiper-scrollbar"></div>
      </div>
    </div>
    <!-- 商品展示区 -->
    <waterfall
      :col="2"
      :data="oneGoodsInfo"
      @loadmore="loadmore"
      @scroll="scroll"
    >
      <template>
        <div
          class="goodsShow"
          v-for="goodsItem in oneGoodsInfo"
          :key="goodsItem.topicId"
        >
          <!-- v-for="(goodsList, index) in oneGoodsInfo"
          :key="index" -->
          <div class="goodsItem">
            <!-- v-for="goodsItem in oneGoodsInfo" :key="goodsItem.topicId" -->
            <div class="goodsImg">
              <img :src="goodsItem.picUrl" alt="" />
            </div>
            <div class="goodsDesc">
              {{ goodsItem.title }}
            </div>
            <div class="userInfo">
              <img class="userPic" :src="goodsItem.avatar" alt="" />
              <span class="username">{{ goodsItem.nickname }}</span>
              <span class="upText">{{ goodsItem.readCount }}</span>
            </div>
            <div class="bottom">
              <span class="goodsName">菊花金银花枸杞...</span>
              <span class="buy">去购买 ></span>
            </div>
          </div>
        </div>
      </template>
    </waterfall>
  </div>
</template>

<script>
import { getWorthBuyNavData, reqOneGoodsInfo } from "@/api";
import BScroll from "better-scroll";
import Swiper from "swiper";
export default {
  name: "WorthBuy",
  data() {
    return {
      col: 2,
      navData: [],
      oneGoodsInfo: [],
      page: 1,
      size: 5,
      isbottom: false,
    };
  },
  async mounted() {
    // 请求获取导航数据
    const result = await getWorthBuyNavData();
    // console.log(result);
    this.navData = result.data.data.navList;
    this.getOneGoodsInfo(1, 5);
    this.$nextTick(() => {
      this.$waterfall.forceUpdate();
    });
    // 轮播图
    new Swiper(".swiper-container", {
      slidesPerView: 4, // 一行显示的数量
      slidesPerColumn: 2, //显示2行
      loop: true,
      scrollbar: {
        // 启用滚动条
        el: ".swiper-scrollbar",
      },
      slidesPerGroup: 1,
    });
  },
  methods: {
    // 请求获取值得买页面第一屏数据
    async getOneGoodsInfo(page, size) {
      const result = await reqOneGoodsInfo(page, size);
      if (result.data.data.result.length <= 0) {
        this.isbottom = true;
      }
      let gooslist = result.data.data.result;
      gooslist.forEach((item) => {
        this.oneGoodsInfo = this.oneGoodsInfo.concat(item.topics);
      });
      // console.log(this.oneGoodsInfo);
    },
    //
    /* categoryScrollHandle() {
      this.bs = new BScroll(this.$refs.scrollWrap, {
        mouseWheel: true,
        disableTouch: false,
        disableMouse: false,
        resizePolling: 0,
        click: true, //开启点击事件
        scrollX: true,
        probeType: 3,
      });
    },
    heightScrollHandle() {
      this.hbs = new BScroll(this.$refs.hscrollWrap, {
        mouseWheel: true,
        disableTouch: false,
        disableMouse: false,
        resizePolling: 0,
        click: true, //开启点击事件
        scrollY: true,
        probeType: 3,
      });
    }, */
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
    // 触底触发
    loadmore() {
      // console.log("触底触发 loadmore()");
      //滚动到底部触发
      if (this.isbottom) {
        return false;
      }
      let page = this.page;
      this.page += 1;
      this.getOneGoodsInfo(page + 1, this.size);
    },
    scroll(e) {
      // console.log("滚动", e);
    },
  },
};
</script>

<style lang="stylus">
.worthbuyContainer
  width 100%
  /* height 100% */
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
    display flex
    white-space nowrap
    overflow hidden
    .tabItem
      /* overflow hidden */
      display flex
      /* flex-wrap wrap */
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
    display flex
    flex-wrap wrap
    justify-content space-around
    &::after
      content ""
      width 345px
      height 0
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
          margin-right 20px
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

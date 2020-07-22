<template>
  <div class="homeContainer">
    <div class="homeHeader">
      <img src="@/assets/images/logo.png" alt="" />
      <div class="search" @click="toSearch">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品，共34101款好物</span>
      </div>
      <button class="loginbtn">登录</button>
    </div>
    <!-- 头部导航 -->
    <div class="navScroll" v-if="indexData.kingKongModule">
      <!-- <div class="content" ref="contentWrap">
        <div class="navContent"> -->
      <!-- active 当前选中的标识符 -->
      <van-tabs active="">
        <van-tab class="navItem" title="推荐" @click="changeNavId(0)">
          <Recommend v-if="navId === 0"></Recommend>
        </van-tab>
        <van-tab
          :title="navItem.text"
          class="navItem"
          v-for="(navItem, index) in indexData.kingKongModule.kingKongList"
          :key="index"
          @click="changeNavId(navItem.L1Id)"
        >
          <HomeCate v-if="navId !== 1" :navId="navId"></HomeCate>
        </van-tab>
      </van-tabs>
      <!-- </div>
      </div> -->
    </div>
    <!-- 轮播图 -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import BScroll from "@better-scroll/core";
import Recommend from "@/components/Recommend/Recommend";
import HomeCate from "@/components/HomeCate/HomeCate";
export default {
  name: "Home",
  data() {
    return {
      navId: 0,
    };
  },
  mounted() {
    this.getIndexData();
    // 实现首页导航的横向滑动
    /* let wrapper = document.querySelector(".navScroll");
    let scroll = new BScroll(wrapper, {
      scrollX: true,
    }); */
  },
  created() {
    /* this.$nextTick(() => {
      this.headerNavScroll();
    }); */
  },
  methods: {
    ...mapActions({
      getIndexData: "getIndexData",
    }),
    /* headerNavScroll() {
      this.$nextTick(() => {
        // let wrapper = document.querySelector(".content");
        this.scroll = new BScroll(this.$refs.contentWrap, {
          startX: 0,
          click: true,
          scrollX: true,
          // 忽略竖直方向的滚动
          scrollY: false,
          eventPassthrough: "vertical",
        });
      });
    }, */
    // 点击跳转到搜索页面
    toSearch() {
      this.$router.push("/search");
    },
    // 点击导航切换显示
    changeNavId(navId) {
      this.navId = navId;
    },
  },
  computed: {
    ...mapState({
      indexData: (state) => state.home.indexData,
    }),
  },
  components: {
    Recommend,
    HomeCate,
  },
};
</script>

<style lang="stylus" scoped>
.homeContainer
  width 100%
  height 100%
  .homeHeader
    width 100%
    height 55px
    padding 16px 30px
    display flex
    img
     width 138px
     height 40px
     margin-top 8px
    .search
      flex 1
      margin 0 10px
      width 442px
      height 56px
      background #ededed
      border-radius 5px
      line-height 56px
      text-align center
      color #666
      .iconfont
        vertical-align center
        font-size 30px
    .loginbtn
      width 72px
      height 40px
      color #DD1A21
      border 1px solid #DD1A21
      background #fff
      border-radius 5px
      font-size 12px
      margin-top 8px
  .navScroll
    width 100%
    height 60px
    margin-top 30px
    padding 0 30px
    .navItem
      position relative
      height 60px
      padding 0 10px
      margin-right 16px
      text-align center
      line-height 60px
      color #333
      font-size 28px
      &.active
        color #DD1A21
      &.active:after
        content:""
        width 100%
        position absolute
        left 0
        bottom 0
        height 2px
        background #DD1A21
</style>

<template>
  <div class="RCcontainer">
    <div
      class="categoryContent"
      v-for="(categoryItem, index) in indexData.categoryModule"
      :key="index"
    >
      <img :src="categoryItem.titlePicUrl" alt="" />
      <div class="cententWrap" ref="scrollWrap">
        <div
          class="cententScroll"
          ref="scrollContent"
          @click="categoryScrollHandle"
        >
          <div
            class="scrollItem"
            v-for="(item, index) in categoryItem.itemList"
            :key="index"
          >
            <img :src="item.showPicUrl" alt="" />
            <div>{{ item.name }}</div>
          </div>
          <div class="scrollItem more">查看更多 ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BScroll from "better-scroll";
// import BScroll from "@better-scroll/core";
export default {
  name: "RecommendCategory",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      indexData: (state) => state.home.indexData,
    }),
  },
  // bscroll
  mounted() {
    this.$nextTick(() => {
      this.categoryScrollHandle();
    });
  },
  methods: {
    categoryScrollHandle() {
      console.log("categoryScrollHandle");
      this.$refs.scrollWrap.forEach((item) => {
        new BScroll(item, {
          mouseWheel: true,
          disableTouch: false,
          disableMouse: false,
          resizePolling: 0,
          click: true, //开启点击事件
          scrollX: true,
          probeType: 3,
        });
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.RCcontainer
  width 100%
  .categoryContent
    width 100%
    img
      width 100%
      height 300px
    .cententWrap
      display flex
      white-space nowrap
      overflow hidden
      .cententScroll
        display flex
        .scrollItem
          width 200px
          vertical-align top
          margin 20px 10px
          &.more
            height 200px
            text-align center
            line-height 200px
            font-size 26px
            background #eee
            border-radius 4px
          img
            width 200px
            height 200px
            background #eee
            border-radius 4px
          div
            width 200px
            font-size 24px
            overflow hidden
            display -webkit-box
            -webkit-box-orient vertical
            -webkit-line-clamp 2
            white-space pre-wrap
</style>

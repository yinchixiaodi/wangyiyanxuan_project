<template>
  <div class="recommendContainer">
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/e1d32c538a9fcf420411592746098ad2.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/e4b5ab7f6bb4b286b9fe18e42bb1f731.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/8d2a7fc9eab1e4d347002868a756d9e2.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/99873ee03dbfa1fec94f273025baaf20.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/e14d684c9dc43de2af5215c3d49b6870.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/2a1b91834498b175effc84f0e23547c4.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/1585bb1a7f98662790466b5485464633.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/50bc9d8901b05f7917156584812a853f.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
            alt=""
          />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- policyDescList区域 -->
    <div class="policyDescList">
      <div
        class="policyDescItem"
        v-for="(pdItem, index) in indexData.policyDescList"
        :key="index"
      >
        <img :src="pdItem.icon" alt="" />
        <span>{{ pdItem.desc }}</span>
      </div>
    </div>
    <!-- 10个图标 -->
    <div class="kingKongList" v-if="indexData.kingKongModule">
      <div
        class="kingKongItem"
        v-for="(kkItem, index) in indexData.kingKongModule.kingKongList"
        :key="index"
      >
        <img :src="kkItem.picUrl" alt="" />
        <span>{{ kkItem.text }}</span>
      </div>
    </div>
    <!-- 分类列表区域 -->
    <RecommendCategory></RecommendCategory>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Swiper from "swiper";
import RecommendCategory from "@/components/RecommendCategory/RecommendCategory";
export default {
  name: "Recommend",
  computed: {
    ...mapState({
      indexData: (state) => state.home.indexData,
    }),
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true, // 循环
      autoplay: true,
      // 分页器
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
  components: {
    RecommendCategory,
  },
};
</script>

<style lang="stylus" scoped>
.recommendContainer
  width 100%
  .swiper-container
    width 100%
    height 296px
    --swiper-theme-color: #ff6600;
    --swiper-pagination-color: #00ff33;
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        width 100%
        height 100%
        img
          width 750px
          height 100%
  .policyDescList
    display flex
    height 72px
    align-items center
    .policyDescItem
      flex 1
      text-align center
      img
        width 32px
        height 32px
        vertical-align middle
      span
        font-size 12px
        vertical-align middle
  .kingKongList
    display flex
    flex-wrap wrap
    width 100%
    .kingKongItem
      width 20%
      display flex
      flex-direction column
      align-items center
      img
        width 110px
        height 110px
      span
        font-size 12px
        line-height 50px
</style>

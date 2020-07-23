<template>
  <div class="homeCateContainer">
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper" v-if="cateObj.category">
        <div
          class="swiper-slide"
          v-for="(bannerItem, index) in cateObj.category.bannerUrlList"
          :key="index"
        >
          <img :src="bannerItem" alt="" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- title -->
    <div class="title">
      <div class="titleTop">口碑好物</div>
      <div class="titleBottom">口碑好物</div>
    </div>
    <!-- 商品列表 -->
    <div class="goodsList">
      <div
        class="goodItem"
        v-for="(item, index) in cateObj.itemList"
        :key="index"
      >
        <img :src="item.listPicUrl" alt="" />
        <div class="goodsDesc">
          {{ item.simpleDesc }}
        </div>
        <div class="goodsName">
          {{ item.name }}
        </div>
        <div class="priceInner">
          <span class="priceLeft">￥ {{ item.retailPrice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import { reqCateListData } from "@/api";
export default {
  name: "HomeCate",
  props: ["navId"],
  data() {
    return {
      cateList: [],
    };
  },
  async mounted() {
    // 获取分类的数据
    const cateListData = await reqCateListData();
    console.log(cateListData.data.data);
    this.cateList = cateListData.data.data;
    console.log("xxxx", this.cateList);
    this.$nextTick(() => {
      new Swiper(".swiper-container", {
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
        },
      });
    });
  },
  computed: {
    // 计算要显示的导航下边的内容
    cateObj() {
      return (
        this.cateList.find((item) => {
          return item.category.parentId === this.navId;
        }) || {}
      );
    },
  },
  watch: {
    // cateList() {
    //   this.$nextTick(() => {
    //     this.cateObj();
    //   });
    // },
  },
};
</script>

<style lang="stylus" scoped>
.homeCateContainer
  width 100%
  .swiper-container
    width 100%
    height 296px
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        width 100%
        height 100%
        img
          width 100%
          height 100%
  .title
    width 100%
    height 120px
    div
      width 100%
      text-align center
      line-height 60px
      &.titleTop
        font-size 32px
        color #333
      &.titleBottom
        font-size 24px
        color #999
  .goodsList
    width 100%
    display flex
    flex-wrap wrap
    justify-content space-around
    &::after
      content ""
      width 330px
      height 0
    .goodItem
      width 330px
      display flex
      flex-direction column
      align-items flex-start
      img
        width 330px
        height 330px
      .goodsDesc
        width 330px
        height 48px
        line-height 48px
        font-size 24px
        padding 6px 10px
        box-sizing border-box
        background #f1ece2
        overflow hidden
      .goodsName
        width 330px
        height 78px
        color #333
        margin-top 16px
        overflow hidden
      .priceInner
        font-size 32px
        color #dd1a21
</style>

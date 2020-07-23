<template>
  <div class="homeCateContainer">
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
        // loop: true,
        // autoplay: true,
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
</style>

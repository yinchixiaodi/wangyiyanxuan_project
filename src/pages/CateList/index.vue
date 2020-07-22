<template>
  <div class="cateContainer">
    <div class="cateHeader">
      <div class="headerContainer" @click="toSearch">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品，共34097款好物</span>
      </div>
    </div>
    <div class="cateContent">
      <div class="leftContainer">
        <div class="cateList">
          <div
            class="cateItem"
            :class="{ active: item.id === navItemId }"
            v-for="item in categoryData"
            :key="item.id"
            @click="changeItemId(item.id)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="rightContainer">
        <div class="rightItem" v-if="categoryObj">
          <img class="proImg" :src="categoryObj.imgUrl" alt="" />
          <div
            class="proItem"
            v-for="(subItem, index) in categoryObj.subCateList"
            :key="index"
          >
            <img class="proItemImg" :src="subItem.wapBannerUrl" alt="" />
            <span>{{ subItem.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqCateIndexData } from "@/api";
export default {
  name: "CateList",
  data() {
    return {
      categoryData: [],
      navItemId: 0,
    };
  },
  async mounted() {
    const result = await reqCateIndexData();
    // console.log(result);
    this.categoryData = result.data.data;
    this.navItemId = this.categoryData[0].id;
  },
  methods: {
    // 点击改变 navItemId ，对应的右边区域显示改变
    changeItemId(id) {
      this.navItemId = id;
    },
    // 点击跳转到搜索页面
    toSearch() {
      this.$router.push("/search");
    },
  },
  computed: {
    // 计算右边区域要显示的内容
    categoryObj() {
      return this.categoryData.find((item) => item.id === this.navItemId);
    },
  },
};
</script>

<style lang="stylus" scoped>
.cateContainer
  .cateHeader
    width 100%
    padding 16px 30px
    box-sizing border-box
    .headerContainer
      width 100%
      height 56px
      border-radius 8px
      background #ededed
      line-height 56px
      text-align center
      color #666
      iconfont
        font-size 28px
        vertical-align middle
        margin-right 5px
      span
        font-size 24px
  .cateContent
    height calc(100vh - 184px)
    border-top 1px solid #eeeeee
    border-bottom 1px solid #eeeeee
    box-sizing border-box
    display flex
    .leftContainer
      width 20%
      height 100%
      border-right 1px solid #eeeeee
      box-sizing border-box
      .cateList
        width 100%
        .cateItem
          position relative
          width 100%
          height 50px
          line-height 50px
          text-align center
          margin-top 40px
          font-size 28px
          &.active:after
            content:""
            width 6px
            height 50px
            background #AB2B2B
            position absolute
            left 0
            top 0
    .rightContainer
      width 80%
      height 100%
      .rightItem
        display flex
        flex-wrap wrap
        padding 30px 30px 0
        .proImg
          width 528px
          height 192px
        .proItem
          display flex
          flex-direction column
          margin-right 30px
          margin-top 30px
          .proItemImg
            width 144px
            height 144px
            background #eee
          span
            width 144px
            height 72px
            color #333
            text-align center
</style>

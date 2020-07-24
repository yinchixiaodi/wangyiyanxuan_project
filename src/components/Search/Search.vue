<template>
  <div class="searchContainer">
    <div class="search">
      <van-search
        class="searchInput"
        v-model="keywordPrefix"
        placeholder="请输入搜索关键词"
        @input="searchKeywordhandle"
      />
      <div class="close" @click="goHome">取消</div>
    </div>
    <div class="content">
      <div class="hotSearch">热门搜索</div>
      <div class="searchList">
        <div
          class="searchItem"
          :class="{ active: keyword.algSort }"
          v-for="(keyword, index) in keywordList"
          :key="index"
        >
          {{ keyword.keyword }}
        </div>
      </div>
    </div>
    <div class="searchContentList" v-show="isDisplay">
      <div
        class="searchContentItem"
        v-for="(goods, index) in goodsList"
        :key="index"
      >
        <span>{{ goods }}</span>
        <span class="right">></span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import throttle from "lodash/throttle";
import { reqSearchGoods } from "@/api";
export default {
  name: "Search",
  data() {
    return {
      value: "电风扇",
      keywordList: [],
      keywordPrefix: "",
      isDisplay: false,
      goodsList: [],
    };
  },
  async mounted() {
    // 获取数据
    const result = await axios.post("/xhr/search/init.json");
    // console.log(result);
    this.keywordList = result.data.data.hotKeywordVOList;
  },
  methods: {
    // 点击取消跳转到主页
    goHome() {
      this.$router.replace("/");
    },
    // 搜索商品
    searchKeywordhandle: throttle(async function() {
      // 发送请求获取搜索，实时更新搜索联想的数据
      // url:https://m.you.163.com/xhr/search/searchAutoComplete.json
      let keywordPrefix = this.keywordPrefix;
      this.isDisplay = true;
      const result = await reqSearchGoods(keywordPrefix);
      this.goodsList = result.data.data;
      console.log(this.goodsList);
    }, 500),
  },
};
</script>

<style lang="stylus" scoped>
.searchContainer
  width 100%
  height 100%
  position relative
  /* background #eee */
  .search
    width 100%
    height 87px
    padding 16px 30px
    box-sizing border-box
    line-height 87px
    display flex
    .searchInput
      position relative
      background #f4f4f4
      flex 1
      height 56px
      padding 0 20px
      border-radius 8px
      .van-search__content
        background #f4f4f4
    .close
      height 56px
      line-height 56px
      font-size 28px
      color #333
      margin-left 30px
      background #fff
  .content
    width 100%
    .hotSearch
      width 100%
      padding 0 30px 30px
      box-sizing border-box
      height 90px
      line-height 90px
      color #999
      font-size 28px
    .searchList
      display flex
      padding 0 30px
      box-sizing border-box
      flex-wrap wrap
      .searchItem
        height 47px
        line-height 47px
        padding 0 15px
        margin 0 32px 32px 0
        border 1px solid #333
        color #333
        border-radius 5px
        &.active
          border 1px solid #DD1A21
          color #DD1A21
  .searchContentList
    position absolute
    left 0
    top 87px
    width 100%
    padding-left 30px
    background #fff
    /* display none */
    .searchContentItem
      height 104px
      font-size 28px
      border-bottom 1px solid #eee
      line-height 144px
      display flex
      justify-content space-between
      .right
        margin-right: 40px
</style>

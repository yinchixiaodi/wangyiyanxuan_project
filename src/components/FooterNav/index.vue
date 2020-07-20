<template>
  <div class="footerNav">
    <router-link to="/" class="navItem active">
      <i class="iconfont icon-shouye"></i>
      <div class="nav_text">首页</div>
    </router-link>
    <router-link to="/catelist" class="navItem">
      <i class="iconfont icon-fenlei"></i>
      <div class="nav_text">分类</div>
    </router-link>
    <router-link to="/worthbuy" class="navItem">
      <i class="iconfont icon-zhidemai"></i>
      <div class="nav_text">值得买</div>
    </router-link>
    <router-link to="/cart" class="navItem">
      <i class="iconfont icon-gouwuche"></i>
      <div class="nav_text">购物车</div>
    </router-link>
    <router-link to="/personal" class="navItem">
      <i class="iconfont icon-gerenzhongxin"></i>
      <div class="nav_text">个人</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "FooterNav",
};
</script>

<style></style>

import axios from "axios";

// 获取首页分类信息
export function reqCateListData() {
  return axios("/api/getIndexCateListData");
}

// 搜索商品
export function reqSearchGoods(keywordPrefix) {
  return axios({
    method: "POST",
    url: "/xhr/search/searchAutoComplete.json",
    params: { keywordPrefix },
  });
}

// 获取分类页面的数据
export function reqCateIndexData() {
  return axios("/api/getCategoryDatas");
}

// 获取值得买页面nav数据
export function getWorthBuyNavData() {
  return axios.get("/topic/v1/know/navWap.json");
}

// 获取值得买页面的商品信息
// 首屏数据
// https://m.you.163.com/topic/v1/find/recManual.json
// https://m.you.163.com/topic/v1/find/recAuto.json?page=1&size=5&exceptIds=
export function reqOneGoodsInfo(page, size) {
  /* return axios({
    url: "/topic/v1/find/recManual.json",
    data: {
      page,
      size,
    },
  }); */
  return axios.get(`/topic/v1/find/recAuto.json?page=${page}&size=${size}`);
}

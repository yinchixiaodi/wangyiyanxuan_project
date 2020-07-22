import axios from "axios";

// 获取首页分类信息
export function reqCateListData() {
  return axios("/api/getIndexCateListData");
}

// 获取分类页面的数据
export function reqCateIndexData() {
  return axios("/api/getCategoryDatas");
}

import axios from "axios";
const state = {
  indexData: {},
};

const mutations = {
  // 保存新的首页的数据
  CHANGEINDEXDATA(state, indexData) {
    state.indexData = indexData;
  },
};

const actions = {
  // 异步更新主页的数据
  async getIndexData({ commit }) {
    const result = await axios.get("/api/getIndexData");
    // console.log(result);
    result.data.code === 200 && commit("CHANGEINDEXDATA", result.data.data);
  },
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};

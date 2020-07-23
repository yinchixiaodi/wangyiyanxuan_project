import Vue from "vue";
import App from "./App.vue";

import "lib-flexible/flexible";
import BScroll from "@better-scroll/core";
import router from "./router";
import store from "./store";
import "swiper/css/swiper.css";
import { Button, Col, Row, Icon, Field, Tab, Tabs, Search } from "vant";
import waterfall from "vue-waterfall2";
Vue.use(waterfall);
Vue.use(Button)
  .use(Col)
  .use(Row)
  .use(Icon)
  .use(Field)
  .use(Tab)
  .use(Tabs)
  .use(Search);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");

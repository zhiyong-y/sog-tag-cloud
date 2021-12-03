import Vue from "vue";
import App from "./App.vue";

import SogTagCloud from "../src/plugins/index";
Vue.use(SogTagCloud);

Vue.config.productionTip = false;

new Vue({
  render: function (h) {
    return h(App);
  },
}).$mount("#app");

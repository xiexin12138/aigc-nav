import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import TDesign from "tdesign-vue";
import "./assets/base.css";

// 引入组件库的少量全局样式变量
import "tdesign-vue/es/style/index.css";

Vue.config.productionTip = false;
Vue.use(TDesign);
Vue.prototype.$env = process.env;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

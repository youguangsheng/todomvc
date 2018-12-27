import Vue from "vue";
import App from "./App.vue";
//全局引入预设全局样式
import "./assets/styles/global.scss";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

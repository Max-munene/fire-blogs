import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from ".store";
import Vue2Editor from "vue2-editor";
import Vue from "vue";
import vueConfig from "vue.config";

Vue.useAttrs(Vue2Editor);

vueConfig.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// createApp(App).mount("#app");

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { firestorePlugin } from "vuefire";
import "@/assets/styles/style.scss";
import AppHeader from "@/components/Header.vue";
import AppFooter from "@/components/Footer.vue";

Vue.config.productionTip = false;
Vue.use(firestorePlugin);
Vue.component("AppHeader", AppHeader);
Vue.component("AppFooter", AppFooter);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

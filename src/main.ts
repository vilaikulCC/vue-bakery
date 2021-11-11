import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { firestorePlugin } from "vuefire";
import VueGtm from "@gtm-support/vue2-gtm";
import "@/assets/styles/style.scss";
import AppHeader from "@/components/Header.vue";
import AppFooter from "@/components/Footer.vue";

Vue.config.productionTip = false;
Vue.use(firestorePlugin);
Vue.component("AppHeader", AppHeader);
Vue.component("AppFooter", AppFooter);

Vue.use(VueGtm, {
  id: "GTM-5LDGV5H",
  queryParams: {
    // Add URL query string when loading gtm.js with GTM ID (required when using custom environments)
    gtm_auth: "AB7cDEf3GHIjkl-MnOP8qr",
    gtm_preview: "env-4",
    gtm_cookies_win: "x",
  },
  defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
  compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
  // nonce: "2726c7f26c", // Will add `nonce` to the script tag
  // enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
  // debug: true, // Whether or not display console logs debugs (optional)
  // loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
  // vueRouter: router, // Pass the router instance to automatically sync with router (optional)
  // ignoredViews: ['homepage'], // Don't trigger events for specified router names (optional)
  // trackOnNextTick: false // Whether or not call trackView in Vue.nextTick
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

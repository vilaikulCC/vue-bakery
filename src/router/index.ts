import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
// import Login from '@/components/Login.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/backoffice/login",
    name: "Backoffice.login",
    component: () => import("@/views/backoffice/Login.vue"),
  },
  {
    path: "/backoffice/",
    component: () => import("@/views/backoffice/Dashboard.vue"),
    children: [
      {
        path: "",
        redirect: {
          path: "login",
          name: "backoffice.login",
        },
      },
      {
        path: "login",
        name: "backoffice.login",
      },
      {
        path: "dashboard",
        name: "backoffice.dashboard",
        component: () => import("@/views/backoffice/Dashboard.vue"),
      },
      {
        path: "bakery",
        name: "backoffice.bakery",
      },
      {
        path: "vendor",
        name: "backoffice.vendor",
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

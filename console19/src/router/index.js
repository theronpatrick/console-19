import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import { APP_NAME } from "../constants/constants.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || APP_NAME;
  next();
});

export default router;

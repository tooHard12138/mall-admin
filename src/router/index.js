import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout";
import store from "@/store";
import { Message } from "element-ui";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login"),
    meta: { noAuth: true },
  },

  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/test"),
        meta: { title: "控制台", icon: "dashboard" },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const user = store.state.user.user;
  if (!to.meta.noAuth) {
    if (user.username && user.appkey) {
      next();
    } else {
      next({ name: "Login" });
      Message({
        message: "请先登录",
        type: "error",
      });
    }
  } else {
    next();
  }
});

export default router;

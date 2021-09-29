import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout";
import store from "@/store";
import { Message } from "element-ui";
import showPage from "@/utils/showPage";
import { queryCategory } from "@/api/category";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login"),
    meta: { noAuth: true, hide: true },
  },

  {
    path: "/",
    alias: "/home",
    name: "Home",
    component: Layout,
    redirect: "/statistics",
    meta: { title: "首页", icon: "el-icon-s-home" },
    children: [
      {
        path: "statistics",
        name: "Statistics",
        alias: "index",
        component: () => import("@/views/Home/Statistics"),
        meta: { title: "统计", icon: "el-icon-notebook-1" },
      },
    ],
  },

  {
    path: "/product",
    component: Layout,
    name: "Product",
    redirect: "/product/productList",
    meta: { title: "商品", icon: "el-icon-document-copy" },
    children: [
      {
        path: "productList",
        name: "ProductList",
        component: () => import("@/views/Product/ProductList"),
        meta: { title: "商品列表", icon: "el-icon-document" },
      },
      {
        path: "productEdit/:id",
        name: "ProductEdit",
        component: () => import("@/views/Product/ProductEdit"),
        meta: { title: "编辑商品", hide: true },
      },
      {
        path: "productAdd",
        name: "ProductAdd",
        component: () => import("@/views/Product/ProductAdd"),
        meta: { title: "添加商品", icon: "el-icon-document-add" },
      },
      {
        path: "productCate",
        name: "ProductCate",
        component: () => import("@/views/Product/ProductCate"),
        meta: { needAdmin: true, title: "类名管理", icon: "el-icon-mobile" },
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
      if (showPage(user.role, to.meta.needAdmin)) {
        queryCategory().then((resp) => {
          store.dispatch("user/asyncSetCategory", resp.data);
        });
        next();
      } else {
        next("/404");
      }
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

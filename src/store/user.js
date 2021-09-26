import { setUserCookie, getUserCookie, removeUserCookie } from "@/utils/cookie";

export default {
  namespaced: true,
  state: {
    // 用户信息
    user: getUserCookie(),
    // 类目列表
    category: [],
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setCategory(state, payload) {
      state.category = payload;
    },
  },
  actions: {
    userLogin(ctx, payload) {
      ctx.commit("setUser", payload);
      setUserCookie(payload);
    },
    userOut(ctx) {
      removeUserCookie();
      ctx.commit("setUser", {
        appkey: "",
        username: "",
        email: "",
        role: "",
      });
    },
    asyncSetCategory(ctx, payload) {
      ctx.commit("setCategory", payload);
    },
  },
};

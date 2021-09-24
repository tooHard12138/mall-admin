export default {
  namespaced: true,
  state: {
    // 侧边栏折叠状态
    isCollapse: false,
  },
  mutations: {
    setIsCollapse(state) {
      state.isCollapse = !state.isCollapse;
    },
  },
  actions: {
    asyncSetIsCollapse(ctx, payload) {
      ctx.commit("setIsCollapse", payload);
    },
  },
};

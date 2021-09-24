export default {
  namespaced: true,
  state: {
    // 侧边栏折叠状态
    isCollapse: false
  },
  mutations: {
    collapse(state) {
      state.isCollapse = !state.isCollapse;
    },
  },
};

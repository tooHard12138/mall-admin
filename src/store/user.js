export default {
  namespaced: true,
  state: {
    // 用户信息
    user: {},
  },
  setUser: {
    collapse(state, payload) {
      state.user = payload;
    },
  },
};

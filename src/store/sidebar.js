export default {
  namespaced: true,
  state: {
    isCollapse: false
  },
  mutations: {
    collapse(state, payload) {
      state.isCollapse = payload;
    },
  },
};

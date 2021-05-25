export default {
  state: {
    subPageView: false,
  },

  getters: {
    dealersList: (state) => state.list,
  },

  mutations: {
    setSubPageView(state, data) {
      state.list = data;
    },
  },

  actions: {
    async runSubPage({ commit }) {
      commit("setSubPageView");
    },
  },

  namespaced: true,
};

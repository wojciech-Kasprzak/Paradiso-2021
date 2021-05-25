import axios from "axios";

export default {
  state: {
    infoAboutEvent: [],
    safeFormResponse: null,
  },

  getters: {
    getInfoAboutEvent: (state) => state.infoAboutEvent,
    getSafeFormResponse: (state) => state.safeFormResponse,
  },

  mutations: {
    setInfoAboutEvent(state, data) {
      state.infoAboutEvent = data;
    },
    setSafeFormResponse(state, data) {
      state.safeFormResponse = data;
    },
  },

  actions: {
    async saveForm({commit}, payload) {
      const response = await axios.post(`/api/user/create`, payload);
      commit("setSafeFormResponse", response.data);
      return response;
    },

    async fetchInfoAboutEvent({commit}) {
      const response = await axios.get(`/api/user/registration`, this.inputs);
      let tmpDiet = response.data.diets;
      response.data.diets = [];
      for (const key in tmpDiet) {
        let obj = {id: key, value: tmpDiet[key]};
        response.data.diets.push(obj);
      }
      commit("setInfoAboutEvent", response.data);
    },
  },

  namespaced: true,
};

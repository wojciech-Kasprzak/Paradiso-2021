import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

// import Menu from "./menu/index.js";
import Registration from "./registration/index.js";

export default new Vuex.Store({
  modules: {
    Registration,
  },
});

import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./axios";
// import axios from "axios";
import router from "./router";
import store from "./store";

import SimpleVueValidation from "simple-vue-validator";     
Vue.use(SimpleVueValidation);     

// import Lightbox from "vue-my-photos";
// Vue.component("lightbox", Lightbox);
// Vue.use(Lightbox);

// import axios from "axios";
// import VueAxios from "vue-axios";

// axios.defaults.baseURL = `http://localhost:8000`;

// Vue.use(VueAxios, axios);

// import "@/fonts/stylesheet.scss"; 
import "@/style/scss/main.scss";


Vue.config.productionTip = false;

// template elements as global components
import Btn from "./components/elements/Btn.vue";
Vue.component("Btn", Btn);

import PageText from "./components/elements/PageText.vue";
Vue.component("PageText", PageText);

import { func } from "./globalFunc.js";
Vue.prototype.$func = func;

Vue.directive("click-outside", {
  bind: function(el, binding, vnode) {
    el.clickOutsideEvent = function(event) {
      // here I check that click was outside the el and his children
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unbind: function(el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  },
});

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title ? "PARADISO - " + to.meta.title : "PARADISO";
  });
});

// this.$axios({ url: "items", baseURL: "http://new-url.com" });
// const baseURL = "http://localhost:4000";
// if (typeof baseURL !== "undefined") {
//   Vue.axios.defaults.baseURL = baseURL;
// }

  // axios.defaults.baseURL = "http://localhost:8000";
  // Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

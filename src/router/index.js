import Vue from "vue";
import VueRouter from "vue-router";

import MainLayout from "../layouts/Main.vue";

import { func } from "./../globalFunc.js";

Vue.use(VueRouter);

     
const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "",
      layout: MainLayout,
    },
    component: () => import("../views/MainPage.vue"),
  },
  {
    path: "/co-to",
    name: "Co to?",
    meta: {
      title: "Co to?",
      layout: MainLayout,
    },
    component: () => import("../views/WhatIsIt.vue"),
  },
  {
    path: "/plan",
    name: "Plan",
    meta: {
      title: "Plan",
      layout: MainLayout,
    },
    component: () => import("../views/Plan.vue"),
  },
  {
    path: "/FAQ",
    name: "FAQ",
    meta: {
      title: "FAQ",
      layout: MainLayout,
    },
    component: () => import("../views/FAQ.vue"),
  },
  {
    path: "/informacje",
    name: "Informacje",
    meta: {
      title: "Informacje",
      layout: MainLayout,
    },
    component: () => import("../views/Information.vue"),
  },
  {
    path: "/galeria",
    name: "Galeria",
    meta: {
      title: "Galeria",
      layout: MainLayout,
    },
    component: () => import("../views/Gallery.vue"),
  },
  {
    path: "/patroni",
    name: "Patroni",
    meta: {
      title: "Patroni",
      layout: MainLayout,
    },
    component: () => import("../views/Patrons.vue"),
  },
  {
    path: "/koszulki",
    name: "Koszulki",
    meta: {
      title: "Koszulki",
      layout: MainLayout,
    },
    component: () => import("../views/Tshirt.vue"),
  },
  {
    path: "/rejestracja",
    name: "Rejestracja",
    meta: {
      title: "Rejestracja",
      layout: MainLayout,
    },
    component: () => import("../views/Registration.vue"),
    beforeEnter: (to, from, next) => {
      if (func.compareDate()) {
        next();
      } else {
        next('/');
      }
    },
  },
  // {
  //   path: "/rejestracja",
  //   name: "rejestracja",
  //   meta: {
  //     title: "rejestracja",
  //     layout: MainLayout,
  //   },
  //   component: () => import("../views/MainPage.vue"),
  //       beforeEnter: (to, from, next) => {
  //       next('/');
  //   },
  // },
  // {
  //   path: "/male-paradiso",
  //   name: "Małe Paradiso",
  //   meta: {
  //     title: "Małe Paradiso",
  //     layout: MainLayout,
  //   },
  //   component: () => import("../views/MainPage.vue"),
  //       beforeEnter: (to, from, next) => {
  //       next('/');
  //   },
  // },
  {
    path: "/kontakt",
    name: "Kontakt",
    meta: {
      title: "Kontakt",
      layout: MainLayout,
    },
    component: () => import("../views/Contact.vue"),
  },
  // {
  //   path: "/zaloguj",
  //   name: "Zaloguj",
  //   meta: {
  //     title: "Zaloguj się",
  //     layout: MainLayout,
  //   },
  //   component: () => import("../views/Login.vue"),
  // },
  // {
  //   path: "/konto",
  //   name: "Konto",
  //   meta: {
  //     title: "Twoje konto",
  //     layout: MainLayout,
  //   },
  //   component: () => import("../views/Account.vue"),
  // },
];



const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "lview",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LandingView.vue"),
  },
  {
    path: "/Fiction",
    name: "fiction",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FictionView.vue"),
  },
  {
    path: "/NonFiction",
    name: "non-fiction",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NonfictionView.vue"),
  },
  {
    path: "/YoungAdult",
    name: "ya",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/YngView.vue"),
  },
  {
    path: "/Kids",
    name: "kids",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/kidsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

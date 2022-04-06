import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "landing",
    component: () => import("../views/LandingView.vue"),
  },
  {
    path: "/Fiction",
    name: "fiction",
    component: () => import("../views/FictionView.vue"),
  },
  {
    path: "/NonFiction",
    name: "non-fiction",
    component: () => import("../views/NonfictionView.vue"),
  },
  {
    path: "/YoungAdult",
    name: "ya",
    component: () => import("../views/YngView.vue"),
  },
  {
    path: "/Kids",
    name: "kids",
    component: () => import("../views/kidsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

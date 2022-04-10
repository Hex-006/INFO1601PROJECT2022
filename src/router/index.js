import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import login from "../views/LoginView.vue";
import register from "../views/RegisterView.vue";
import passrecov from "../views/PassRecovView.vue";
const routes = [
  {
    path: "/",
    name: "landing",
    component: () => import("../views/LandingView.vue"),
    meta: {
      title: "Home",
    },
  },
  {
    path: "/fiction",
    name: "fiction",
    component: () => import("../views/FictionView.vue"),
    meta: {
      title: "Fiction",
    },
  },
  {
    path: "/nonfiction",
    name: "non-fiction",
    component: () => import("../views/NonfictionView.vue"),
    meta: {
      title: "Non-Fiction",
    },
  },
  {
    path: "/youngadult",
    name: "ya",
    component: () => import("../views/YngView.vue"),
    meta: {
      title: "Young Adult",
    },
  },
  {
    path: "/kids",
    name: "kids",
    component: () => import("../views/kidsView.vue"),
    meta: {
      title: "Kids",
    },
  },
  {
    path: "/login",
    name: "login",
    component: login,
    meta: {
      title: "Login",
    },
  },
  {
    path: "/register",
    name: "register",
    component: register,
    meta: {
      title: "Register",
    },
  },
  {
    path: "/password-recovery",
    name: "password-recovery",
    component: passrecov,
    meta: {
      title: "Password Recovery",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | LoNA`;
  next();
});
export default router;

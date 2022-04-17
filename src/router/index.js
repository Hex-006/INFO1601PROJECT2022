import { createRouter, createWebHistory } from "vue-router";
import login from "../views/LoginView.vue";
import register from "../views/RegisterView.vue";
import passrecov from "../views/PassRecovView.vue";
import userProfile from "../views/userProfile.vue";
import wishlist from "../views/WishList.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/LandingView.vue"),
    meta: {
      title: "Home",
      requiresAuth: false,
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
  {
    path: "/user",
    name: "user-profile",
    component: userProfile,
    meta: {
      title: "Profile",
    },
  },
  {
    path: "/wishlist",
    name: "wishlist",
    component: wishlist,
    meta: {
      title: "Wishlist",
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

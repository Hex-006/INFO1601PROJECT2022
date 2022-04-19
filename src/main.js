import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
let wapp;
firebase.auth().onAuthStateChanged(() => {
  if (!wapp) {
    createApp(App).use(store).use(router).mount("#app");
  }
});

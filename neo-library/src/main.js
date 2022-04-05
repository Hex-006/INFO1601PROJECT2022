import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKfoa432lUhXLpBwTyzcVF4YmchJyizpw",
  authDomain: "neo-library-of-alexandria.firebaseapp.com",
  projectId: "neo-library-of-alexandria",
  storageBucket: "neo-library-of-alexandria.appspot.com",
  messagingSenderId: "988392661656",
  appId: "1:988392661656:web:0214043d27c46586c126ed",
  measurementId: "G-FLZ4RDKR48",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount("#app");

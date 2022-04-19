import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKfoa432lUhXLpBwTyzcVF4YmchJyizpw",
  authDomain: "neo-library-of-alexandria.firebaseapp.com",
  projectId: "neo-library-of-alexandria",
  storageBucket: "neo-library-of-alexandria.appspot.com",
  messagingSenderId: "988392661656",
  appId: "1:988392661656:web:0214043d27c46586c126ed",
  measurementId: "G-FLZ4RDKR48",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { timestamp };
export default firebaseApp.firestore();

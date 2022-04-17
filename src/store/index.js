import { createStore } from "vuex";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import fdata from "../firebase/firebaseinit";
export default createStore({
  state: {
    user: null,
    profileemail: null,
    profilefname: null,
    profilelname: null,
    profileuname: null,
    profileID: null,
    profileinitial: null,
  },
  getters: {},
  mutations: {
    setProf(state, payload) {
      state.profileID = payload.id;
      state.profileemail = payload.data().email;
      state.profilefname = payload.data().firstName;
      state.profilelname = payload.data().lastName;
      state.profileuname = payload.data().userName;
      console.log(state.profileemail);
    },
    ushorthand(state) {
      state.profileinitial =
        state.profilefname.match(/(\b\S)?/g).join("") +
        state.profilelname.match(/(\b\S)?/g).join("");
    },
    haveUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async getCurUser({ commit }) {
      const udb = await fdata
        .collection("users")
        .doc(firebase.auth().currentUser.uid);
      const userRes = await udb.get();
      commit("setProf", userRes);
      commit("ushorthand");
    },
  },
  modules: {},
});

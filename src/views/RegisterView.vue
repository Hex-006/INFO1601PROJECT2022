<template>
  <div class="form-wrap">
    <form class="reg">
      <p class="page">
        Have an account?
        <router-link class="router-link" to="/login">Login</router-link>
      </p>
      <h2>Create Account</h2>
      <div class="userinfo">
        <div class="input">
          <input type="text" placeholder="first name" v-model="fname" />
        </div>
        <div class="input">
          <input type="text" placeholder="last name" v-model="lname" />
        </div>
        <div class="input">
          <input type="text" placeholder="user name" v-model="uname" />
        </div>
        <div class="input">
          <input type="text" placeholder="email" v-model="email" />
        </div>
        <div class="input">
          <input
            type="password"
            placeholder="password"
            v-model="password"
            minlength="8"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          />
        </div>
        <div v-show="error" class="error">{{ this.emsg }}</div>
      </div>
      <button class="sgin" @click.prevent="reguser">Sign Up</button>
      <!-- <br />
      <button @click.prevent="">Testing</button> -->
    </form>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import fdata from "../firebase/firebaseinit";

export default {
  name: "RegisterSec",
  data() {
    return {
      fname: "",
      lname: "",
      uname: "",
      email: "",
      password: null,
      error: null,
      emsg: "",
    };
  },
  methods: {
    async reguser() {
      if (
        this.fname !== "" &&
        this.lname !== "" &&
        this.uname !== "" &&
        this.email !== "" &&
        this.password !== ""
      ) {
        this.error = false;
        this.emsg = "";
        const uauth = await firebase.auth();
        const createUser = await uauth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        const res = await createUser;
        console.log(res.user.uid);
        const ubase = fdata.collection("users").doc(res.user.uid);
        await ubase.set({
          firstName: this.fname,
          lastName: this.lname,
          userName: this.uname,
          email: this.email,
        });
        this.$router.push({ path: "/" });
        return;
      } else {
        this.error = true;
        this.emsg = "Please fill out all fields";
      }
    },
  },
};
</script>

<style></style>

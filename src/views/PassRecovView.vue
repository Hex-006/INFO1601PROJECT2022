<template>
  <div class="reset-password">
    <Modal
      v-if="modalActive"
      :modalMessage="modalMessage"
      v-on:close-modal="closeModal"
    />
    <div class="form-wrap">
      <form class="reset">
        <p class="login-register">
          Return to
          <router-link class="router-link" to="/login">Login</router-link>
          /
          <router-link class="router-link" to="/">Home</router-link>
        </p>
        <h2>Reset Password</h2>
        <p>Forgot your passowrd? Enter your email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <email class="icon" />
          </div>
        </div>
        <button @click.prevent="resetPassword">Reset</button>
      </form>
    </div>
  </div>
</template>

<script>
import Modal from "../components/modalMes";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
export default {
  name: "forgot-password",
  data() {
    return {
      email: "",
      modalActive: false,
      modalMessage: "",
    };
  },
  components: {
    Modal,
  },
  methods: {
    resetPassword() {
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.modalMessage =
            "If your account exists, you will receive a email";
        })
        .catch((err) => {
          this.modalMessage = err.message;
          this.loading = false;
          this.modalActive = true;
        });
    },
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    },
  },
};
</script>

<style></style>

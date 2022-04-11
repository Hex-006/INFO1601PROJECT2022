<template>
  <div class="form-wrap">
    <form class="login">
      <p class="page">
        Don't Have an Account?
        <router-link class="router-link" to="/register">Register</router-link>
      </p>
      <h2>Login</h2>
      <div class="userinfo">
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
      <router-link class="forgot" to="/password-recovery">
        Forgot Password?
      </router-link>
      <button class="sgin" @click.prevent="signIn">Sign In</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
export default {
  name: "loginSection",
  data() {
    return {
      email: "",
      password: null,
      error: null,
      emsg: "",
    };
  },
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push({ name: "Home" });
          this.error = false;
          this.emsg = "";
          console.log(firebase.auth().currentUser.uid);
        })
        .catch((err) => {
          this.error = true;
          this.emsg = err.message;
        });
    },
  },
};
</script>

<style lang="scss">
.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 5% auto;
  @media (min-width: 900px) {
    width: 100%;
  }
}
.page {
  margin-bottom: 20px;
  .router-link {
    color: #bb4e0b;
  }
}
form {
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  @media (min-width: 900px) {
    padding: 0 50px;
  }
}
h2 {
  text-align: center;
  font-size: 20px;
  color: #303030;
  margin-bottom: 30px;
  @media (min-width: 900px) {
    font-size: 40px;
  }
}

.inputs {
  width: 100%;
  max-width: 360px;
}
</style>

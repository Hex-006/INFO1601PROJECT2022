<template>
  <div class="form-wrap">
    <form class="login">
      <p class="page">
        No Account?
        <router-link class></router-link>
      </p>
      <h2>Login</h2>
      <div class="userinfo">
        <div class="input">
          <input type="text" placeholder="email" />
        </div>
        <div class="input">
          <input
            type="password"
            placeholder="password"
            minlength="8"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          />
        </div>
      </div>
      <router-link class="forgot" : to="{name: 'password-recovery'}">
        Forgot Password?
      </router-link>
      <button class="sgin">Sign In</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "loginSection",
  data() {
    return {
      email: null,
      password: null,
    };
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
.user-info {
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
</style>

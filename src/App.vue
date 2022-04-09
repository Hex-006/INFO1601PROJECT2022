<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation />
      <nav class="nav">
        <li>
          <router-link class="link" to="/">Home</router-link>
          |
          <router-link to="/Fiction">Fiction</router-link>
          |
          <router-link to="/NonFiction">Non-Fiction</router-link>
          |
          <router-link to="/YoungAdult">Young-Adult</router-link>
          |
          <router-link to="/Kids">Kids</router-link>
        </li>
      </nav>
      <router-view />
      <Foot />
    </div>
  </div>
</template>

<script>
import Navigation from "/src/components/NaviSection";
import Foot from "/src/components/footerSection";
export default {
  name: "app",
  components: { Navigation, Foot },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss">
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.link {
  cursor: pointer;
  color: Black;
}
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1920px;
  margin: 0 auto;
}
</style>

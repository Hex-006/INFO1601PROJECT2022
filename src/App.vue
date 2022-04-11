<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation v-if="!navDis" />
      <nav class="nav" v-if="!navDis">
        <li>
          <router-link class="link" to="/">Home</router-link>
          |
          <router-link class="link" to="/fiction">Fiction</router-link>
          |
          <router-link class="link" to="/nonfiction">Non-Fiction</router-link>
          |
          <router-link class="link" to="/youngadult">Young-Adult</router-link>
          |
          <router-link class="link" to="/kids">Kids</router-link>
        </li>
      </nav>
      <router-view />
      <Foot v-if="!navDis" />
    </div>
  </div>
</template>

<script>
import Navigation from "/src/components/NaviSection";
import Foot from "/src/components/footerSection";
// import bandimg from "";
export default {
  name: "app",
  components: { Navigation, Foot },
  data() {
    return {
      navDis: null,
    };
  },
  created() {
    this.croute();
  },
  mounted() {},
  methods: {
    croute() {
      if (
        this.$route.path.startsWith("/log") ||
        this.$route.path.startsWith("/reg") ||
        this.$route.path.startsWith("/pass")
      ) {
        this.navDis = true;
        return;
      } else {
        this.navDis = false;
      }
    },
  },
  watch: {
    $route() {
      this.croute();
    },
  },
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
.nav {
  text-align: center;
  margin: auto;
  width: 50%;
}
</style>

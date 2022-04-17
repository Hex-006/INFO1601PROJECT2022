<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation v-if="!navDis" />
      <nav class="nav-links" v-if="!navDis">
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
    </div>
    <Foot v-if="!navDis" />
  </div>
</template>

<script>
import Navigation from "/src/components/NaviSection";
import Foot from "/src/components/footerSection";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
export default {
  name: "app",
  components: { Navigation, Foot },
  data() {
    return {
      navDis: null,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit("haveUser", user);
      if (user) {
        this.$store.dispatch("getCurUser").then(() => {
          this.$store.dispatch("getUserBooklist");
        });
        return;
        // console.log(this.$store.state.profileemail);
      }
    });
    this.croute();
  },
  mounted() {},
  methods: {
    croute() {
      if (
        this.$route.path.startsWith("/log") ||
        this.$route.path.startsWith("/reg") ||
        this.$route.path.startsWith("/pass") ||
        this.$route.path.startsWith("/user") ||
        this.$route.path.startsWith("/wishlist")
      ) {
        this.navDis = true;
        return;
      } else {
        this.navDis = false;
      }
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
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
  text-decoration: none;
  text-transform: uppercase;
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
.nav-links {
  text-align: center;
}
.link-light {
  color: #fff;
}
.arrow {
  margin-left: 8px;
  width: 12xp;
  path {
    fill: #000;
  }
}
.arrow-light {
  path {
    fill: #fff;
  }
}
.book-card-wrap {
  position: relative;
  padding: 80px 16px;
  background-color: #f1f1f1;
  @media (min-width: 512px) {
    padding: 100px 16px;
  }
}
.booksec {
  display: grid;
  gap: 32px;
  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>

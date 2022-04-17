<template>
  <header>
    <nav class="container">
      <div class="topbar">
        <ul>
          <router-link class="headlink" to="/">
            Library of Neo Alexadria
          </router-link>
          <input type="text" class="searchbar" placeholder="Search here" />
          <button class="btn btn-primary">Search</button>
          <router-link v-if="!user" class="link" to="/login">
            Login /
          </router-link>
          <router-link v-if="!user" class="link" to="/register">
            Register
          </router-link>
        </ul>
        <div v-if="user" @click="togprof" class="profiledropdown" ref="pdown">
          <span>{{ this.$store.state.profileinitial }}</span>
          <div v-show="pmenu" class="profmenu">
            <div class="uInfo">
              <p class="uinitials">{{ this.$store.state.profileinitial }}</p>
              <div class="rhs">
                <p>
                  {{ this.$store.state.profilefname }}
                  {{ this.$store.state.profilelname }}
                </p>
                <p>{{ this.$store.state.profileuname }}</p>
                <p>{{ this.$store.state.profileemail }}</p>
              </div>
            </div>
            <div class="dropdownroutes">
              <router-link class="ddown-link" to="/user">Profile</router-link>
              <router-link class="ddown-link" to="#">Wishlist</router-link>
              <button @click="signout" class="ddown logout">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import firebase from "firebase/compat/app";
export default {
  data() {
    return {
      pmenu: null,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    togprof(e) {
      if (e.target === this.$refs.pdown) {
        this.pmenu = !this.pmenu;
      }
    },
    signout() {
      firebase.auth().signOut();
      window.location.reload();
    },
  },
};
</script>
<style lang="scss" scoped>
header {
  background-color: rgb(177, 177, 177);
  padding: 0 25px;
  height: 20%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.6);
  z-index: 99;
}
.searchbar {
  padding: 0.5em 0.5em;
}
.link {
  font-weight: bold;
  padding: 0 8px;
  transition: 0.3s color ease;
  &:hover {
    color: rgb(10, 194, 240);
  }
}
nav {
  display: flex;
  padding: 0 25px;
  .headlink {
    font-size: 24px;
    font-weight: bold;
  }
  .topbar {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .profiledropdown {
      position: relative;
      justify-content: center;
      display: flex;
      align-items: center;
      color: #fff;
      width: 40px;
      height: 40px;
      border-radius: 30%;
      background-color: rgb(43, 42, 42);
      span {
        pointer-events: none;
      }
      .profmenu {
        position: absolute;
        top: 60px;
        background-color: rgb(43, 42, 42);
        right: 0;

        .uInfo {
          display: flex;
          border-bottom: 1px solid white;
          padding: 1.5em;

          .uinitials {
            position: initial;
            justify-content: center;
            display: flex;
            align-items: center;
            color: rgb(20, 20, 20);
            width: 40px;
            height: 40px;
            border-radius: 30%;
            padding: 1.5em;
            background-color: white;
          }
          .rhs {
            justify-content: right;
          }
        }
      }
    }
  }
}
</style>

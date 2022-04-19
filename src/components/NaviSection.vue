<template>
  <header>
    <div class="topbar">
      <router-link class="headlink" to="/">
        Library of Neo Alexandria
      </router-link>
      <nav class="nav-links">
        <ul>
          <router-link class="link" to="/">Home</router-link>
          |
          <router-link class="link" to="/fiction">Fiction</router-link>
          |
          <router-link class="link" to="/nonfiction"> Non-Fiction </router-link>
          |
          <router-link class="link" to="/youngadult"> Young-Adult </router-link>
          |
          <router-link class="link" to="/kids">Kids</router-link>
        </ul>
      </nav>
      <router-link v-if="!user" class="llink" to="/login">
        Login /
      </router-link>
      <router-link v-if="!user" class="llink" to="/register">
        Register
      </router-link>
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
            <router-link class="ddown-link" to="/wishlist">
              Wishlist
            </router-link>
            <button @click="signout" class="ddown-logout">Logout</button>
          </div>
        </div>
      </div>
    </div>
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
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;
  justify-content: space-between;
  flex-direction: row;
  background-color: #252525;
  .topbar {
    padding: 1.5em;
    transition: 0.3s color ease;

    .headlink {
      font-weight: 600;
      color: rgb(255, 255, 255);
      font-size: 32px;
      &:hover {
        color: #17cc17;
      }
    }

    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      ul {
        margin-right: 32px;
        .link-list {
          margin-right: 32px;
        }
        .link:last-child {
          margin-right: 0;
        }
      }
      .link {
        color: rgb(255, 255, 255);
        &:hover {
          color: #17cc17;
        }
      }
    }
    .llink {
      display: inline-flexbox;
      justify-content: right;
      color: rgb(255, 255, 255);
      &:hover {
        color: #17cc17;
      }
    }
    .profiledropdown {
      float: right;
      cursor: pointer;
      position: relative;
      justify-content: center;
      display: flex;
      align-items: center;
      color: #fff;
      width: 80px;
      height: 80px;
      border-radius: 30%;
      padding: 15px;
      background-color: rgb(17, 17, 17);

      span {
        pointer-events: none;
      }
      .profmenu {
        position: absolute;
        top: 60px;
        width: 350px;
        color: gb(43, 42, 42);
        background-color: rgb(43, 42, 42);
        right: 0;

        .uInfo {
          align-items: center;
          display: flex;
          border-bottom: 1px solid white;
          padding: 1.5em;

          .uinitials {
            position: initial;
            width: 40px;
            height: 40px;
            background-color: #fff;
            color: #303030;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
          }
          .rhs {
            flex: 1;
            margin-left: 24px;
          }
        }
      }
    }
    .dropdownroutes {
      padding: 5px;
      .ddown-link {
        font-size: 18px;
        color: white;
        padding: 1em;
        &:hover {
          color: #17cc17;
        }
      }
      .ddown-logout {
        width: 100px;
        height: 50px;
      }
    }
  }
}
</style>

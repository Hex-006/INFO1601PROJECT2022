<template>
  <footer>
    <div class="container">
      <div class="lhs">
        <div class="socials">
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com/library_neo_alexandria/">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div class="reglog">
          <ul>
            <router-link class="link" to="/">
              Library of Neo Alexandria</router-link
            >
            <router-link v-if="!user" class="link" to="#">
              Login/Register</router-link
            >
            <router-link v-if="user" class="link" to="/wishlist">
              Wishlist
            </router-link>
          </ul>
        </div>
      </div>
      <div class="rhs">
        <p>Int Elligence</p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
<style lang="scss" scoped>
footer {
  margin-top: auto;
  padding: 100px 25px;
  background-color: #303030;
  .container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media (min-width: 800px) {
      flex-direction: row;
      gap: 0px;
    }
    > div {
      display: flex;
      flex: 1;
    }
    .lhs {
      gap: 32px;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 800px) {
        flex-direction: row;
        align-items: initial;
        gap: 0;
      }
      ul {
        gap: 16px;
        list-style: none;
        display: flex;
      }
      .socials,
      .reglog {
        gap: 32px;
        display: flex;
        flex: 1;
        @media (min-width: 800px) {
          gap: 0;
        }
      }
      .socials {
        flex-direction: column;
        h2 {
          text-align: center;
          @media (min-width: 800px) {
            text-align: initial;
          }
        }
        ul {
          margin-top: auto;
          li {
            display: flex;
            align-items: center;
            .svg-icon {
              width: 24px;
              height: auto;
              color: #fff;
            }
          }
        }
      }
      .reglog {
        ul {
          height: 100%;
          justify-content: center;
          flex-direction: row;
          flex-wrap: wrap;
          @media (min-width: 800px) {
            flex-direction: column;
          }
          .link {
            font-size: 16px;
            font-weight: 500;
            color: #fff;
            text-decoration: none;
          }
        }
      }
    }
    .rhs {
      gap: 32px;
      color: #fff;
      align-items: center;
      flex-direction: column;
      @media (min-width: 800px) {
        align-items: flex-end;
        gap: 0;
      }
    }
    p {
      margin-top: auto;
      font-size: 24px;
    }
  }
  a {
    color: #fff;
  }
}
</style>

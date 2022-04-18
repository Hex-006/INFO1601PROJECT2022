<template>
  <div class="wlist">
    <div class="info">
      <h2>Wishlist</h2>
      <div class="booksec">
        <wishcards
          :post="post"
          v-for="(post, index) in userBookList"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import wishcards from "../components/wishlistBookcard";
export default {
  name: "wishList",
  components: { wishcards },
  computed: {
    user() {
      return this.$store.state.user;
    },
    userBookList() {
      return this.$store.getters.userBookList;
    },
  },
};
</script>

<style lang="scss" scoped></style>

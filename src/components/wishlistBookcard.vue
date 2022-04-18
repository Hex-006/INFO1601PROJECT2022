<template>
  <div class="card">
    <div class="inf">
      <img :src="post.bookImg" />
      <h4>{{ post.bookTitle }}</h4>
      <router-link class="link" to="#"> <h6>view book</h6> </router-link>
      <button @click.prevent="wishlistremove" class="wishbttn">
        Remove from Wishlish
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "wishlistbookCard",
  props: ["post"],
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    wishlistremove() {
      // console.log(this.post.bookListindex);
      this.$store.dispatch("wishlistremove", this.post.bookListindex);
    },
  },
};
</script>

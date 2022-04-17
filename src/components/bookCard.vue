<template>
  <div class="card">
    <div class="inf">
      <img :src="post.bookCoverimg" />
      <h4>{{ post.bookTitle }}</h4>
      <router-link class="link" to="#"> <h6>view book</h6> </router-link>
      <button @click="wishlistadd" class="wishbttn">Add to Wishlish</button>
    </div>
  </div>
</template>

<script>
// import fdata from "../firebase/firebaseinit";
export default {
  name: "bookCard",
  props: ["post"],
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    wishlistadd() {
      console.log(this.$store.state.user.uid); //users/(this)/"user library"
      const posturl = this.post.bookdetails;
      fetch(posturl)
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  min-height: 320px;
  transition: 0.5s ease all;
  background-color: rgb(150, 142, 142); //<<alter color of book card here
  &:hover {
    transform: rotateZ(1deg) scale(1.05);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.6);
  }
}
.inf {
  display: flex;
  flex-direction: column;
  height: 100%;
  z-index: 3;
  padding: 32px 16px;
  color: #000;
}
</style>

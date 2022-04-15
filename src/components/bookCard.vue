<template>
  <div class="card">
    <!-- <h2>hello</h2> -->
    <div class="inf">
      <h4>{{ post.bookTitle }}</h4>
      <router-link class="link" to="#"> <h6>view book</h6> </router-link>
    </div>
  </div>
</template>

<script>
// import fav from "../assets/projicons/basic-favorite-star-svgrepo-com.svg";
// import arrow from "../assets/projicons/arrow-forward-ui-svgrepo-com.svg";
export default {
  name: "bookCard",
  props: ["post"],
  components: {
    // fav,
    // arrow,
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
  background-color: rgb(163, 33, 33); //<<alter color of book card here
  &:hover {
    transform: rotateZ(1deg) scale(1.05);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.6);
  }
}
.info {
  display: flex;
  flex-direction: column;
  height: 100%;
  z-index: 3;
  padding: 32px 16px;
  color: #000;
}
</style>

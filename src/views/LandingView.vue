<template>
  <div class="home">
    <div class="book-card-wrap">
      <div class="container">
        <h2>Recommended Books</h2>
        <div class="booksec">
          <bkcards v-for="(post, index) in samplebooks" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bkcards from "../components/bookCard";
// import subSec from "../components/subSec";

export default {
  components: { bkcards },
  data() {
    return {
      recBooks: {
        title: "Recommended Books",
        subSec: "A wealth of knowledge at your hands and control",
        recBooks: true,
        photo: "easter",
      },
      samplebooks: [
        { bookTitle: "book 1", subSec: "Astra" },
        { bookTitle: "book 2", subSec: "supernova" },
        { bookTitle: "book 3", subSec: "quasar" },
        { bookTitle: "book 4", subSec: "blackhole" },
        { bookTitle: "book 5", subSec: "megastructures" },
        { bookTitle: "book 6", subSec: "kardishev scale" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.book-card-wrap {
  h2 {
    font-size: 24px;
    margin-bottom: 32px;
    font-weight: 300;
  }
}
</style>

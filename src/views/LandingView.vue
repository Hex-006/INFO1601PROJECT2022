<template>
  <div class="home">
    <div class="book-card-wrap">
      <div class="container">
        <h2>Recommended Books</h2>
        <div class="booksec">
          <bkcards
            :post="post"
            v-for="(post, index) in recBooks"
            :key="index"
          />
        </div>
        <h2>New Arrivals</h2>
        <div class="booksec">
          <bkcards
            :post="post"
            v-for="(post, index) in arriveNew"
            :key="index"
          />
        </div>
        <h2>Coming Soon</h2>
        <div class="booksec">
          <bkcards
            :post="post"
            v-for="(post, index) in comingSoon"
            :key="index"
          />
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
      recBooks: [
        { bookTitle: "Astra" },
        { bookTitle: "supernova" },
        { bookTitle: "quasar" },
        { bookTitle: "blackhole" },
        { bookTitle: "megastructures" },
        { bookTitle: "kardishev scale" },
      ],
      arriveNew: [
        { bookTitle: "Astra2" },
        { bookTitle: "supernova2" },
        { bookTitle: "quasar2" },
        { bookTitle: "blackhole2" },
        { bookTitle: "megastructures2" },
        { bookTitle: "kardishev scale2" },
      ],
      comingSoon: [
        { bookTitle: "Astra2" },
        { bookTitle: "supernova2" },
        { bookTitle: "quasar2" },
        { bookTitle: "blackhole2" },
        { bookTitle: "megastructures2" },
        { bookTitle: "kardishev scale2" },
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
.booksec {
  padding: 1.5em;
}
</style>

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
export default {
  name: "LandingHome",
  components: { bkcards },
  methods: {
    async loadrec(name) {
      const url = "https://www.googleapis.com/books/v1/volumes?q=";
      fetch(
        url + "subject:" + name + "&key=AIzaSyCKfoa432lUhXLpBwTyzcVF4YmchJyizpw"
      )
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          for (let i = 0; i < 6; i++) {
            console.log(resData.items[i].selfLink);
            this.recBooks[i].bookTitle = resData.items[i].volumeInfo.title;
            this.recBooks[i].bookCoverimg =
              resData.items[i].volumeInfo.imageLinks.thumbnail;
            this.recBooks[i].bookdetails = resData.items[i].selfLink;
          }
        });
    },
    async loadarrivenew(name) {
      const url = "https://www.googleapis.com/books/v1/volumes?q=";
      fetch(
        url +
          "subject:" +
          name +
          "&orderBy=newest&key=AIzaSyCKfoa432lUhXLpBwTyzcVF4YmchJyizpw"
      )
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          for (let i = 0; i < 6; i++) {
            // console.log(resData.items[i].selfLink);
            this.arriveNew[i].bookTitle = resData.items[i].volumeInfo.title;
            this.arriveNew[i].bookCoverimg =
              resData.items[i].volumeInfo.imageLinks.thumbnail;
            this.arriveNew[i].bookdetails = resData.items[i].selfLink;
          }
        });
    },
    async loadcomesoon(name) {
      const url = "https://www.googleapis.com/books/v1/volumes?q=";
      fetch(url + "subject:" + name)
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          for (let i = 0; i < 6; i++) {
            this.comingSoon[i].bookTitle = resData.items[i].volumeInfo.title;
            this.comingSoon[i].bookCoverimg =
              resData.items[i].volumeInfo.imageLinks.thumbnail;
            this.comingSoon[i].bookdetails = resData.items[i].selfLink;
          }
        });
    },
  },
  beforeMount() {
    this.loadrec("self help money");
    this.loadarrivenew("fantasy");
    this.loadcomesoon("romance");
  },
  data() {
    return {
      recBooks: [
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
      ],
      arriveNew: [
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
      ],
      comingSoon: [
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
      ],
    };
  },
};
</script>
<style lang="scss">
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

<template>
  <div class="kids">
    <div class="book-card-wrap">
      <div class="container">
        <h2>Architecture</h2>
        <div class="booksec">
          <bkcards
            :post="post"
            v-for="(post, index) in AAPBooks"
            :key="index"
          />
        </div>
        <h2>Christian Living</h2>
        <div class="booksec">
          <bkcards
            :post="post"
            v-for="(post, index) in BCLBooks"
            :key="index"
          />
        </div>
        <h2>Cookbooks</h2>
        <div class="booksec">
          <bkcards
            :post="post"
            v-for="(post, index) in cookBooks"
            :key="index"
          />
        </div>
        <h2>Health & Fitness</h2>
        <div class="booksec">
          <bkcards
            :post="post"
            v-for="(post, index) in DHFBooks"
            :key="index"
          />
        </div>
        <h2>History</h2>
        <div class="booksec">
          <bkcards
            :post="post"
            v-for="(post, index) in historyBooks"
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
  components: { bkcards },
  methods: {
    async loadAAPBooks(name) {
      const url = "https://www.googleapis.com/books/v1/volumes?q=";
      fetch(
        url +
          name +
          "&printType=books" +
          "&orderBy=relevance&key=AIzaSyCKfoa432lUhXLpBwTyzcVF4YmchJyizpw"
      )
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          for (let i = 0; i < 6; i++) {
            // console.log(resData.items[i].selfLink);
            this.AAPBooks[i].bookTitle = resData.items[i].volumeInfo.title;
            this.AAPBooks[i].bookCoverimg =
              resData.items[i].volumeInfo.imageLinks.thumbnail;
            this.AAPBooks[i].bookdetails = resData.items[i].selfLink;
          }
        });
    },
    async loadbclBooks(name) {
      const url = "https://www.googleapis.com/books/v1/volumes?q=";
      fetch(
        url +
          name +
          "&printType=books" +
          "&orderBy=relevance&key=AIzaSyCKfoa432lUhXLpBwTyzcVF4YmchJyizpw"
      )
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          for (let i = 0; i < 6; i++) {
            // console.log(resData.items[i].selfLink);
            this.BCLBooks[i].bookTitle = resData.items[i].volumeInfo.title;
            this.BCLBooks[i].bookCoverimg =
              resData.items[i].volumeInfo.imageLinks.thumbnail;
            this.BCLBooks[i].bookdetails = resData.items[i].selfLink;
          }
        });
    },
    async loadcookBooks(name) {
      const url = "https://www.googleapis.com/books/v1/volumes?q=";
      fetch(
        url +
          name +
          "&printType=books" +
          "&orderBy=relevance&key=AIzaSyCKfoa432lUhXLpBwTyzcVF4YmchJyizpw"
      )
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          for (let i = 0; i < 6; i++) {
            // console.log(resData.items[i].selfLink);
            this.cookBooks[i].bookTitle = resData.items[i].volumeInfo.title;
            this.cookBooks[i].bookCoverimg =
              resData.items[i].volumeInfo.imageLinks.thumbnail;
            this.cookBooks[i].bookdetails = resData.items[i].selfLink;
          }
        });
    },
    async loaddhfBooks(name) {
      const url = "https://www.googleapis.com/books/v1/volumes?q=";
      fetch(
        url +
          name +
          "&printType=books" +
          "&orderBy=relevance&key=AIzaSyCKfoa432lUhXLpBwTyzcVF4YmchJyizpw"
      )
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          for (let i = 0; i < 6; i++) {
            // console.log(resData.items[i].selfLink);
            this.DHFBooks[i].bookTitle = resData.items[i].volumeInfo.title;
            this.DHFBooks[i].bookCoverimg =
              resData.items[i].volumeInfo.imageLinks.thumbnail;
            this.DHFBooks[i].bookdetails = resData.items[i].selfLink;
          }
        });
    },
    async loadhistBooks(name) {
      const url = "https://www.googleapis.com/books/v1/volumes?q=";
      fetch(
        url +
          name +
          "&printType=books" +
          "&orderBy=relevance&key=AIzaSyCKfoa432lUhXLpBwTyzcVF4YmchJyizpw"
      )
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          for (let i = 0; i < 6; i++) {
            // console.log(resData);
            this.historyBooks[i].bookTitle = resData.items[i].volumeInfo.title;
            this.historyBooks[i].bookCoverimg =
              resData.items[i].volumeInfo.imageLinks.thumbnail;
            this.historyBooks[i].bookdetails = resData.items[i].selfLink;
          }
        });
    },
  },
  beforeMount() {
    this.loadAAPBooks("Architecture");
    this.loadbclBooks("christianity");
    this.loadcookBooks("cooking");
    this.loaddhfBooks("Health and fitness");
    this.loadhistBooks("history");
  },
  data() {
    return {
      AAPBooks: [
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
      ],
      BCLBooks: [
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
      ],
      cookBooks: [
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
      ],
      DHFBooks: [
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
      ],
      historyBooks: [
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

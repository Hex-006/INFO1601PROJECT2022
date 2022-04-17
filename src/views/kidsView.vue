<template>
  <div class="kids">
    <div class="book-card-wrap">
      <div class="container">
        <h2>Best Selling</h2>
        <div class="booksec">
          <bkcards
            :post="post"
            v-for="(post, index) in bestBooks"
            :key="index"
          />
        </div>
        <h2>Comics</h2>
        <div class="booksec">
          <bkcards
            :post="post"
            v-for="(post, index) in comicBooks"
            :key="index"
          />
        </div>
        <h2>Kid's Classics</h2>
        <div class="booksec">
          <bkcards
            :post="post"
            v-for="(post, index) in kclasBooks"
            :key="index"
          />
        </div>
        <h2>Picture Books</h2>
        <div class="booksec">
          <bkcards
            :post="post"
            v-for="(post, index) in picBooks"
            :key="index"
          />
        </div>
        <h2>Disney</h2>
        <div class="booksec">
          <bkcards
            :post="post"
            v-for="(post, index) in disneyBooks"
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
    async loadbestchildBooks(name) {
      const url = "https://www.googleapis.com/books/v1/volumes?q=";
      fetch(
        url +
          name +
          "&orderBy=relevance&key=AIzaSyCKfoa432lUhXLpBwTyzcVF4YmchJyizpw"
      )
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          for (let i = 0; i < 6; i++) {
            // console.log(resData.items[i].selfLink);
            this.bestBooks[i].bookTitle = resData.items[i].volumeInfo.title;
            this.bestBooks[i].bookCoverimg =
              resData.items[i].volumeInfo.imageLinks.thumbnail;
            this.bestBooks[i].bookdetails = resData.items[i].selfLink;
          }
        });
    },
    async loadcomicBooks(name) {
      const url = "https://www.googleapis.com/books/v1/volumes?q=";
      fetch(
        url +
          name +
          "&orderBy=relevance&key=AIzaSyCKfoa432lUhXLpBwTyzcVF4YmchJyizpw"
      )
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          for (let i = 0; i < 6; i++) {
            // console.log(resData.items[i].selfLink);
            this.comicBooks[i].bookTitle = resData.items[i].volumeInfo.title;
            this.comicBooks[i].bookCoverimg =
              resData.items[i].volumeInfo.imageLinks.thumbnail;
            this.comicBooks[i].bookdetails = resData.items[i].selfLink;
          }
        });
    },
    async loadkclassicsBooks(name) {
      const url = "https://www.googleapis.com/books/v1/volumes?q=";
      fetch(url + name + "&key=AIzaSyCKfoa432lUhXLpBwTyzcVF4YmchJyizpw")
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          for (let i = 0; i < 6; i++) {
            // console.log(resData.items[i].selfLink);
            this.kclasBooks[i].bookTitle = resData.items[i].volumeInfo.title;
            this.kclasBooks[i].bookCoverimg =
              resData.items[i].volumeInfo.imageLinks.thumbnail;
            this.kclasBooks[i].bookdetails = resData.items[i].selfLink;
          }
        });
    },
    async loadpicBooks(name) {
      const url = "https://www.googleapis.com/books/v1/volumes?q=";
      fetch(url + name + "&key=AIzaSyCKfoa432lUhXLpBwTyzcVF4YmchJyizpw")
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          for (let i = 0; i < 6; i++) {
            // console.log(resData.items[i].selfLink);
            this.picBooks[i].bookTitle = resData.items[i].volumeInfo.title;
            this.picBooks[i].bookCoverimg =
              resData.items[i].volumeInfo.imageLinks.thumbnail;
            this.picBooks[i].bookdetails = resData.items[i].selfLink;
          }
        });
    },
    async loadDisneyBooks(name) {
      const url = "https://www.googleapis.com/books/v1/volumes?q=";
      fetch(
        url +
          "inpublisher: " +
          name +
          "&key=AIzaSyCKfoa432lUhXLpBwTyzcVF4YmchJyizpw"
      )
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          for (let i = 0; i < 6; i++) {
            // console.log(resData);
            this.disneyBooks[i].bookTitle = resData.items[i].volumeInfo.title;
            this.disneyBooks[i].bookCoverimg =
              resData.items[i].volumeInfo.imageLinks.thumbnail;
            this.disneyBooks[i].bookdetails = resData.items[i].selfLink;
          }
        });
    },
  },
  beforeMount() {
    this.loadbestchildBooks("children's bestsellers");
    this.loadcomicBooks("comics");
    this.loadkclassicsBooks("kids classics");
    this.loadpicBooks("childrens picture books");
    this.loadDisneyBooks("Disney");
  },
  data() {
    return {
      bestBooks: [
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
      ],
      comicBooks: [
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
      ],
      kclasBooks: [
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
      ],
      picBooks: [
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
      ],
      disneyBooks: [
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

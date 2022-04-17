<template>
  <div class="fiction">
    <div class="book-card-wrap">
      <div class="container">
        <h2>Classic</h2>
        <div class="booksec">
          <bkcards
            :post="post"
            v-for="(post, index) in clasBooks"
            :key="index"
          />
        </div>
        <h2>Mystery & Crime</h2>
        <div class="booksec">
          <bkcards
            :post="post"
            v-for="(post, index) in mcrimeBooks"
            :key="index"
          />
        </div>
        <h2>Manga</h2>
        <div class="booksec">
          <bkcards
            :post="post"
            v-for="(post, index) in mangaBooks"
            :key="index"
          />
        </div>
        <h2>Romance</h2>
        <div class="booksec">
          <bkcards
            :post="post"
            v-for="(post, index) in romBooks"
            :key="index"
          />
        </div>
        <h2>Sci-Fi</h2>
        <div class="booksec">
          <bkcards
            :post="post"
            v-for="(post, index) in basedBooks"
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
  name: "fictionSec",
  components: { bkcards },
  methods: {
    async loadclasBooks(name) {
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
            this.clasBooks[i].bookTitle = resData.items[i].volumeInfo.title;
            this.clasBooks[i].bookCoverimg =
              resData.items[i].volumeInfo.imageLinks.thumbnail;
            this.clasBooks[i].bookdetails = resData.items[i].selfLink;
          }
        });
    },
    async loadcrimeBooks(name) {
      const url = "https://www.googleapis.com/books/v1/volumes?q=";
      fetch(
        url + "subject:" + name + "&key=AIzaSyCKfoa432lUhXLpBwTyzcVF4YmchJyizpw"
      )
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          for (let i = 0; i < 6; i++) {
            // console.log(resData.items[i].selfLink);
            this.mcrimeBooks[i].bookTitle = resData.items[i].volumeInfo.title;
            this.mcrimeBooks[i].bookCoverimg =
              resData.items[i].volumeInfo.imageLinks.thumbnail;
            this.mcrimeBooks[i].bookdetails = resData.items[i].selfLink;
          }
        });
    },
    async loadmangaBooks(name) {
      const url = "https://www.googleapis.com/books/v1/volumes?q=";
      fetch(
        url + "subject:" + name + "&key=AIzaSyCKfoa432lUhXLpBwTyzcVF4YmchJyizpw"
      )
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          for (let i = 0; i < 6; i++) {
            // console.log(resData.items[i].selfLink);
            this.mangaBooks[i].bookTitle = resData.items[i].volumeInfo.title;
            this.mangaBooks[i].bookCoverimg =
              resData.items[i].volumeInfo.imageLinks.thumbnail;
            this.mangaBooks[i].bookdetails = resData.items[i].selfLink;
          }
        });
    },
    async loadromBooks(name) {
      const url = "https://www.googleapis.com/books/v1/volumes?q=";
      fetch(
        url + "subject:" + name + "&key=AIzaSyCKfoa432lUhXLpBwTyzcVF4YmchJyizpw"
      )
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          for (let i = 0; i < 6; i++) {
            // console.log(resData.items[i].selfLink);
            this.romBooks[i].bookTitle = resData.items[i].volumeInfo.title;
            this.romBooks[i].bookCoverimg =
              resData.items[i].volumeInfo.imageLinks.thumbnail;
            this.romBooks[i].bookdetails = resData.items[i].selfLink;
          }
        });
    },
    async loadsciBooks() {
      const url = "https://www.googleapis.com/books/v1/volumes?q=";
      fetch(url + "scifi &key=AIzaSyCKfoa432lUhXLpBwTyzcVF4YmchJyizpw")
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          for (let i = 0; i < 6; i++) {
            // console.log(resData.items[i]);
            this.basedBooks[i].bookTitle = resData.items[i].volumeInfo.title;
            this.basedBooks[i].bookCoverimg =
              resData.items[i].volumeInfo.imageLinks.thumbnail;
            this.basedBooks[i].bookdetails = resData.items[i].selfLink;
          }
        });
    },
  },
  beforeMount() {
    this.loadclasBooks("classic");
    this.loadcrimeBooks("crime");
    this.loadmangaBooks("manga");
    this.loadromBooks("romance");
    this.loadsciBooks();
  },
  data() {
    return {
      clasBooks: [
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
      ],
      mcrimeBooks: [
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
      ],
      mangaBooks: [
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
      ],
      romBooks: [
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
      ],
      basedBooks: [
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

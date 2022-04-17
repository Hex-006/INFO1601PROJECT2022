<template>
  <div class="kids">
    <div class="book-card-wrap">
      <div class="container">
        <h2>Adventure</h2>
        <div class="booksec">
          <bkcards
            :post="post"
            v-for="(post, index) in advBooks"
            :key="index"
          />
        </div>
        <h2>Fantasy</h2>
        <div class="booksec">
          <bkcards
            :post="post"
            v-for="(post, index) in fanBooks"
            :key="index"
          />
        </div>
        <h2>Action</h2>
        <div class="booksec">
          <bkcards
            :post="post"
            v-for="(post, index) in actBooks"
            :key="index"
          />
        </div>
        <h2>Romance</h2>
        <div class="booksec">
          <bkcards
            :post="post"
            v-for="(post, index) in yaromBooks"
            :key="index"
          />
        </div>
        <h2>Mystery</h2>
        <div class="booksec">
          <bkcards
            :post="post"
            v-for="(post, index) in yaMysbooks"
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
    async loadadvbooks(name) {
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
          for (let i = 0; i < resData.items.length; i++) {
            // console.log(resData.items[i].selfLink);
            this.advBooks[i].bookTitle = resData.items[i].volumeInfo.title;
            this.advBooks[i].bookCoverimg =
              resData.items[i].volumeInfo.imageLinks.thumbnail;
          }
        });
    },
    async loadfantasybk(name) {
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
          for (let i = 0; i < resData.items.length; i++) {
            // console.log(resData.items[i].selfLink);
            this.fanBooks[i].bookTitle = resData.items[i].volumeInfo.title;
            this.fanBooks[i].bookCoverimg =
              resData.items[i].volumeInfo.imageLinks.thumbnail;
          }
        });
    },
    async loadactbooks(name) {
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
          for (let i = 0; i < resData.items.length; i++) {
            // console.log(resData.items[i].selfLink);
            this.actBooks[i].bookTitle = resData.items[i].volumeInfo.title;
            this.actBooks[i].bookCoverimg =
              resData.items[i].volumeInfo.imageLinks.thumbnail;
          }
        });
    },
    async loadyaromance(name) {
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
          for (let i = 0; i < resData.items.length; i++) {
            // console.log(resData.items[i].selfLink);
            this.yaromBooks[i].bookTitle = resData.items[i].volumeInfo.title;
            this.yaromBooks[i].bookCoverimg =
              resData.items[i].volumeInfo.imageLinks.thumbnail;
          }
        });
    },
    async loadmysbooks(name) {
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
          for (let i = 0; i < resData.items.length; i++) {
            // console.log(resData);
            this.yaMysbooks[i].bookTitle = resData.items[i].volumeInfo.title;
            this.yaMysbooks[i].bookCoverimg =
              resData.items[i].volumeInfo.imageLinks.thumbnail;
          }
        });
    },
  },
  beforeMount() {
    this.loadadvbooks("Young Adult + adventure");
    this.loadfantasybk("young Adult + fantasy");
    this.loadactbooks("young Adult + action");
    this.loadyaromance("young Adult + romance");
    this.loadmysbooks("young Adult + mystery");
  },
  data() {
    return {
      advBooks: [
        { bookTitle: "", bookCoverimg: "" },
        { bookTitle: "", bookCoverimg: "" },
        { bookTitle: "", bookCoverimg: "" },
        { bookTitle: "", bookCoverimg: "" },
        { bookTitle: "", bookCoverimg: "" },
        { bookTitle: "", bookCoverimg: "" },
      ],
      fanBooks: [
        { bookTitle: "", bookCoverimg: "" },
        { bookTitle: "", bookCoverimg: "" },
        { bookTitle: "", bookCoverimg: "" },
        { bookTitle: "", bookCoverimg: "" },
        { bookTitle: "", bookCoverimg: "" },
        { bookTitle: "", bookCoverimg: "" },
      ],
      actBooks: [
        { bookTitle: "", bookCoverimg: "" },
        { bookTitle: "", bookCoverimg: "" },
        { bookTitle: "", bookCoverimg: "" },
        { bookTitle: "", bookCoverimg: "" },
        { bookTitle: "", bookCoverimg: "" },
        { bookTitle: "", bookCoverimg: "" },
      ],
      yaromBooks: [
        { bookTitle: "", bookCoverimg: "" },
        { bookTitle: "", bookCoverimg: "" },
        { bookTitle: "", bookCoverimg: "" },
        { bookTitle: "", bookCoverimg: "" },
        { bookTitle: "", bookCoverimg: "" },
        { bookTitle: "", bookCoverimg: "" },
      ],
      yaMysbooks: [
        { bookTitle: "", bookCoverimg: "" },
        { bookTitle: "", bookCoverimg: "" },
        { bookTitle: "", bookCoverimg: "" },
        { bookTitle: "", bookCoverimg: "" },
        { bookTitle: "", bookCoverimg: "" },
        { bookTitle: "", bookCoverimg: "" },
      ],
    };
  },
};
</script>

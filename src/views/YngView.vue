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
          for (let i = 0; i < 6; i++) {
            // console.log(resData.items[i].selfLink);
            this.advBooks[i].bookTitle = resData.items[i].volumeInfo.title;
            this.advBooks[i].bookCoverimg =
              resData.items[i].volumeInfo.imageLinks.thumbnail;
            this.advBooks[i].bookdetails = resData.items[i].selfLink;
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
          for (let i = 0; i < 6; i++) {
            // console.log(resData.items[i].selfLink);
            this.fanBooks[i].bookTitle = resData.items[i].volumeInfo.title;
            this.fanBooks[i].bookCoverimg =
              resData.items[i].volumeInfo.imageLinks.thumbnail;
            this.fanBooks[i].bookdetails = resData.items[i].selfLink;
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
          for (let i = 0; i < 6; i++) {
            // console.log(resData.items[i].selfLink);
            this.actBooks[i].bookTitle = resData.items[i].volumeInfo.title;
            this.actBooks[i].bookCoverimg =
              resData.items[i].volumeInfo.imageLinks.thumbnail;
            this.actBooks[i].bookdetails = resData.items[i].selfLink;
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
          for (let i = 0; i < 6; i++) {
            // console.log(resData.items[i].selfLink);
            this.yaromBooks[i].bookTitle = resData.items[i].volumeInfo.title;
            this.yaromBooks[i].bookCoverimg =
              resData.items[i].volumeInfo.imageLinks.thumbnail;
            this.yaromBooks[i].bookdetails = resData.items[i].selfLink;
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
          for (let i = 0; i < 6; i++) {
            // console.log(resData);
            this.yaMysbooks[i].bookTitle = resData.items[i].volumeInfo.title;
            this.yaMysbooks[i].bookCoverimg =
              resData.items[i].volumeInfo.imageLinks.thumbnail;
            this.yaMysbooks[i].bookdetails = resData.items[i].selfLink;
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
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
      ],
      fanBooks: [
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
      ],
      actBooks: [
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
      ],
      yaromBooks: [
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
        { bookTitle: "", bookCoverimg: "", bookdetails: "" },
      ],
      yaMysbooks: [
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

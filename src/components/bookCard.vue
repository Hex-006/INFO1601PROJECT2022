<template>
  <div class="card">
    <div class="inf">
      <img :src="post.bookCoverimg" />
      <h4>{{ post.bookTitle }}</h4>
      <router-link class="link" to="#"> <h6>view book</h6> </router-link>
      <button @click.prevent="wishlistload" class="wishbttn">
        Add to Wishlish
      </button>
    </div>
  </div>
</template>

<script>
import fdata from "../firebase/firebaseinit";
// import { addDoc } from "firebase/firestore";
export default {
  name: "bookCard",
  props: ["post"],
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      bookListindex: null,
      bookId: "",
      bookTitle: "",
      bookAuthor: "",
      bookDes: "",
      bookImg: "",
    };
  },
  methods: {
    async wishlistload() {
      const posturl = this.post.bookdetails;
      console.log(posturl);
      fetch(posturl)
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          console.log(res);
          this.bookId = res.id;
          this.bookTitle = res.volumeInfo.title;
          this.bookAuthor = res.volumeInfo.authors[0];
          this.bookDes = res.volumeInfo.description;
          this.bookImg = res.volumeInfo.imageLinks.thumbnail;
          // this.bookPagelen = res.volumeInfo.pageCount;
          // this.bookCat1 = res.volumeInfo.categories[0];
          // this.bookCat2 = res.volumeInfo.categories[1];/
          const databasedest = fdata
            .collection("users")
            .doc(this.$store.state.user.uid)
            .collection("Booklist")
            .doc();
          const books = {
            bookListindex: databasedest.id,
            bookId: this.bookId,
            bookTitle: this.bookTitle,
            bookAuthor: this.bookAuthor,
            bookDes: this.bookDes,
            bookImg: this.bookImg,
            // bookPagelen: this.bookPagelen,
            // BookCat1: this.bookCat1,
            // BookCat2: this.bookCat2,
          };
          databasedest.set(books).then(() => {
            console.log("added");
          });
          return;
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

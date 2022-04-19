<template>
  <div class="bdetail">
    <img src="" alt="" class="detimglhs" />
    <div class="bookconrhs">
      <h3>Title{{ post.bookTitle }}</h3>
      <h3>Author</h3>
      <h3>Publisher</h3>
      <h3>Publish Date</h3>
      <h3>Desciption</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      bookPub: null,
      bookPubdate: "",
      bookTitle: "",
      bookAuthor: "",
      bookDes: "",
      bookImg: "",
    };
  },
  methods: {
    async ldet() {
      const posturl = this.bookdetails;
      console.log(posturl);
      fetch(posturl)
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          this.bookTitle = resData.volumeInfo.title;
          this.bookAuthor = resData.volumeInfo.authors[0];
          this.bookPub = resData.volumeInfo.publisher;
          this.bookPubdate = resData.volumeInfo.publishedDate;
          this.bookDes = resData.volumeInfo.description;
          this.bookImg = resData.volumeInfo.imageLinks.thumbnail;
        });
    },
  },
  beforeMount() {
    this.ldet();
  },
};
</script>

<style></style>

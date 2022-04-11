<template>
  <div class="home">
    <section class="blog-card-wrap">
      <h1><i>RECOMMENDED BOOKS</i></h1>
      <span>
        <div class="book-cards">
          <bkcards v-for="(post, index) in samplebooks" :key="index" />
        </div>
      </span>
    </section>
    <p></p>
    <section id="Newest-arrivals">
      <h1><i>OUR NEWEST ARRIVALS</i></h1>
      <span>
        <div id="NewBooks">
          <!-- insert bookCard here -->
        </div>
      </span>
    </section>
    <p></p>
    <section id="Coming-soon">
      <h1><i>COMING SOON</i></h1>
      <span>
        <div id="ComBooks">
          <!-- insert bookCard here -->
        </div>
      </span>
    </section>

    <section id="Last-Img"></section>
  </div>
</template>
<script>
import bkcards from "../components/bookCard";
export default {
  components: bkcards,
  data() {
    return {
      samplebooks: [
        { bookTitle: "book 1" },
        { bookTitle: "book 2" },
        { bookTitle: "book 3" },
        { bookTitle: "book 4" },
        { bookTitle: "book 5" },
        { bookTitle: "book 6" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@media screen {
  body {
    color: white;
    background-color: #b75811;
    margin: 0;
    padding: 0;
    min-height: 100%;
  }

  .firstimg {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    height: 500px;
    border: solid white 1px;
  }

  #Recommended-books {
    border: solid white 1px;
    color: black;
    padding: 10px;
    margin: 10px;
    height: 400px;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }

  #Recbooks {
    display: flex;
    flex-direction: rows;
    float: left;
    border: solid white 1px;
    width: 220px;
    height: 300px;
    margin-right: 10px;
    margin-left: 7px;
  }

  #Newest-arrivals {
    border: solid white 1px;
    color: black;
    padding: 10px;
    margin: 10px;
    height: 400px;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }

  #NewBooks {
    display: flex;
    flex-direction: row;
    float: left;
    border: solid white 1px;
    width: 220px;
    height: 300px;
    margin-right: 10px;
    margin-left: 7px;
  }

  #Coming-soon {
    border: solid white 1px;
    color: black;
    padding: 10px;
    margin: 10px;
    height: 400px;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }

  #ComBooks {
    display: flex;
    flex-direction: row;
    float: left;
    border: solid white 1px;
    width: 220px;
    height: 300px;
    margin-right: 10px;
    margin-left: 7px;
  }

  .lastimg {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    height: 500px;
    border: solid white 1px;
  }
}
.blog-card-wrap {
  position: relative;
  padding: 80px 16px;
  background-color: #f1f1f1;
  @media (min-width: 500px) {
    padding: 100px 16px;
  }
  .blog-cards {
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;
    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>

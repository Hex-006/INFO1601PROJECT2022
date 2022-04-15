<template>
  <div class="subsec-wrapper">
    <div class="subsec-content">
      <div>
        <!-- <div class="subsec-img">
          <img
            v-if="post.recBooks"
            :src="require(`../assets/${post.photo}.png`)"
            alt=""
          />
        </div> -->
        <h2 class="subsec-title" v-if="post.recBooks">{{ post.title }}</h2>
        <!-- <h2 v-else>{{ post.bookTitle }}</h2> -->
        <p v-if="post.recBooks">{{ post.subSec }}</p>
        <p class="book-content-preview" v-else>{{ post.subSec }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "subSec",
  props: ["post"],
};
</script>

<style lang="scss" scoped>
.subsec-wrapper {
  .subsec-title {
    text-align: center;
  }
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media (min-width: 700px) {
    min-height: 650px;
    max-height: 650px;
    flex-direction: row;
  }
}
p {
  font-size: 15px;
  font-weight: 300;
  line-height: 1.7;
}
.subsec-img {
  order: 1;
  flex: 3;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media (min-width: 700px) {
    order: 2;
  }
  @media (min-width: 800px) {
    flex: 4;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>

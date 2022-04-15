<template>
  <div class="wlist">
    <section id="Wishlist">
      <h1><i>MY WISHLIST</i></h1>
      <section id="sec">
        <span>
          <div id="WListbooks"></div>
          <div id="WListbook">
            <p class="title">Title:</p>
            <p class="author">Author:</p>
            <p class="price">Price:</p>
          </div>
        </span>
      </section>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media screen {
  body {
    color: white;
    background-color: #b75811;
    margin: 0;
    padding: 0;
  }

  #Wishlist {
    background-color: white;
    border: solid white 1px;
    color: black;
    padding: 10px;
    margin: 10px;
    height: 100%;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }

  #WListbooks {
    display: flex;
    flex-direction: column;
    float: left;
    border: solid grey 1px;
    width: 220px;
    height: 300px;
    margin-right: 10px;
    margin-left: 7px;
  }

  #WListbook {
    position: relative;
    float: bottom;
    width: 220px;
    height: 75px;
    padding-left: 7px;
    margin-bottom: 350px;
  }

  #sec {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 5px;
  }
}
</style>

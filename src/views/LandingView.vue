<template>
  <div class="landing">
    <section id="Recommended-books">
      <h1><i>RECOMMENDED BOOKS</i></h1>
      <span>
        <div id="Recbooks"></div>
      </span>
    </section>
    <p></p>
    <section id="Newest-arrivals">
      <h1><i>OUR NEWEST ARRIVALS</i></h1>
      <span>
        <div id="NewBooks"></div>
      </span>
    </section>
    <p></p>
    <section id="Coming-soon">
      <h1><i>COMING SOON</i></h1>
      <span>
        <div id="ComBooks"></div>
      </span>
    </section>

    <section id="Last-Img"></section>
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
</style>

<template>
  <header>
    <nav class="container">
      <div class="topbar">
        <router-link to="/">Library of Neo Alexadria</router-link>
        <input type="text" class="searchbar" placeholder="Search here" />
        <router-link class="link" to="#">Login/Register</router-link>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: rgb(177, 177, 177);
  padding: 0 25px;
  height: 20%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.6);
  z-index: 99;
}
.searchbar {
  align-content: right;
}
.link {
  font-weight: bold;
  padding: 0 8px;
  transition: 0.3s color ease;
  &:hover {
    color: rgb(10, 194, 240);
  }
}
nav {
  display: flex;
  padding: 0 8px;

  .topbar {
    display: flex;
    align-items: center;

    .header {
      font-weight: 600;
      font-size: 24px;
      color: black;
      text-decoration: none;
    }
  }
}
</style>

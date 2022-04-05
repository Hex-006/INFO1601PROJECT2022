<template>
  <header>
    <span id="logo">Logo </span>
    <input type="text" id="searchbar" name="sbar" placeholder="Search Here" />
    <nav>
      <router-link to="/">Landing</router-link> |
      <router-link to="/fiction">Fiction</router-link> |
      <router-link to="/nonfiction">Non-Fiction</router-link> |
      <router-link to="/YoungAdult">Young-Adult</router-link> |
      <router-link to="/kids">Kids</router-link>
    </nav>
    <router-view />
  </header>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

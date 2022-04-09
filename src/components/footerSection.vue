<template>
  <footer>
    <div class="container">
      <section class="missionstatement">
        <h3>Mission statement</h3>
      </section>
      <div class="lhs">
        <div class="socials">
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
        <div class="reglog">
          <ul>
            <router-link class="link" to="/">
              Library of Neo Alexadria</router-link
            >
            <router-link v-if="!user" class="link" to="#">
              Login/Register</router-link
            >
            <router-link v-if="user" class="link" to="#">Account</router-link>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style></style>

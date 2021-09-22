<template>
  <div class="nav">
    <router-link to="/">Todos</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <center>
    <router-view />
  </center>
</template>

<style scoped>
.nav {
  margin-top: 60px;
  text-align: center;
}

a {
  text-decoration: none;
  font-size: 24px;
  color: cornflowerblue;
}
a:hover {
  color: tomato;
}
</style>

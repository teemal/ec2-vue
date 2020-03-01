<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        <img src="@/assets/logo.png" height="200" @click="$router.push('/')" />
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">SPORKIFY</a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <!-- <a class="button is-light" @click="logOut">Log Out</a> -->
            <router-link to="/">Log Out</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// import router from 'vue-router'
export default {
  methods: {
    logOut() {
      this.$firebase
        .auth()
        .signOut()
        .then(function() {
          // Sign-out successful.
          console.log('YEET!');
        })
        .catch(function(error) {
          // An error happened.
        });
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #b2dfdb;
}
</style>
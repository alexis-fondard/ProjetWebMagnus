<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link to="/" class="navbar-brand">Magnus</router-link>
      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">
              <font-awesome-icon icon="home" /> Accueil
            </router-link>
          </li>
          <li class="nav-item dropdown" v-if="this.loggedIn">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <font-awesome-icon icon="user" /> Utilisateur
            </a>
            <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
              <router-link class="nav-item nav-link link-light" v-if="this.loggedIn" to="/profile">
                {{ currentUser.username }}
              </router-link>
              <router-link to="/user/list" class="nav-link dropdown-item bg-dark">
                Liste
              </router-link>
              <router-link to="/user/add" class="nav-link dropdown-item bg-dark">
                Ajouter
              </router-link>
            </div>
          </li>
          <!-- <li class="nav-item">
            <router-link to="/user/add" class="nav-link">Ajouter</router-link>
          </li> -->
          <li v-if="!this.loggedIn">
            <router-link class="nav-item nav-link link-light" to="/login">
              <font-awesome-icon icon="user-plus" /> Se connecter
            </router-link>
          </li>
          <li>
            <router-link class="nav-item nav-link link-light" v-if="!this.loggedIn" to="/register">
              <font-awesome-icon icon="sign-in-alt" /> S'inscrire
            </router-link>
            <router-link class="nav-item nav-link link-light" v-if="this.loggedIn" to="/logout">
              <font-awesome-icon icon="sign-out-alt" /> Se déconnecter
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
    <!-- TODO: -->
  </div>
</template>
<script>
export default {
  name: "app",
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    currentUser() {
        if(this.loggedIn){
            return this.$store.state.auth.user;
        } else {
            return null
        }
    },
    methods: {
      logOut() {
        this.$store.dispatch('auth/logout');
        this.$router.push('/login');
      }
    }
  }
}
</script>

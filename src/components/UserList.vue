<template>
  <div class="list row">
    <div class="col-md-8">
      <div class=" input-group mb-3">
        <input
          type="text"
          class="Gabriola form-control"
          placeholder="Rechercher par nom de ville"
          v-model="userCity"
        />
        <div class="input-group-append">
          <button
            class="Gabriola btn btn-outline-secondary"
            type="buttonr"
            @click="searchUserCity()"
          >
            Rechercher
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Liste des utilisateurs</h4>
      <ul class="list-group">
        <li
          class="Gabriola list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(user, index) in users"
          :key="index"
          @click="setActiveUser(user, index)"
        >
          {{ user.userFirstName + " " + user.userLastName }}
        </li>
      </ul>
      <!-- <button class="m-3 btn btn-sm btn-danger" @click="removeAllUsers">
        Remove All
      </button> -->
    </div>
    <div class="col-md-6">
      <div class="Gabriola" v-if="currentUser">
        <h4>Utilisateur</h4>
        <div>
          <label><strong>Nom:</strong></label> {{ currentUser.userLastName }}
        </div>
        <div>
          <label><strong>Prénom:</strong></label>
          {{ currentUser.userFirstName }}
        </div>
        <div>
          <label><strong>Mail:</strong></label> {{ currentUser.userEmail }}
        </div>
        <div>
          <label><strong>Membre du CA:</strong></label>
          {{ currentUser.isCA ? "Oui" : "Non" }}
        </div>
        <div>
          <label><strong>Est membre:</strong></label>
          {{ currentUser.isMember ? "Oui" : "Non" }}
        </div>
        <div>
          <label><strong>Ville:</strong></label> {{ currentUser.userCity }}
        </div>
        <div>
          <label><strong>Numéro de téléphone:</strong></label>
          {{ currentUser.phoneNumber }}
        </div>
        <!-- <div>
          <label><strong>Mot de passe:</strong></label>
          {{ currentUser.pwdUser }}
        </div> -->
        <router-link :to="'/user/' + currentUser.id" class="badge badge-warning"
          >Modifier</router-link
        >
      </div>
      <div v-else>
        <br />
        <p class="Gabriola">Veuillez sélectionner un utilisateur...</p>
      </div>
    </div>
  </div>
</template>
<script>
import UserDataService from "../services/UserDataService";
export default {
  name: "users-list",
  data() {
    return {
      users: [],
      currentUser: null,
      currentIndex: -1,
      userCity: "",
    };
  },
  methods: {
    retrieveUsers() {
      UserDataService.getAll()
        .then((response) => {
          this.users = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveUsers();
      this.currentUser = null;
      this.currentIndex = -1;
    },
    setActiveUser(user, index) {
      this.currentUser = user;
      this.currentIndex = user ? index : -1;
    },
    // removeAllUsers() {
    //   UserDataService.deleteAll()
    //     .then(response => {
    //       console.log(response.data);
    //       this.refreshList();
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // },
    searchUserCity() {
      UserDataService.getAll(this.userCity)
        .then((response) => {
          this.users = response.data;
          this.setActiveUser(null);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveUsers();
  },
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
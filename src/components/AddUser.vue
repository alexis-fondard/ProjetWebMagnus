<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="userLastName">Nom</label>
        <input
          type="text"
          class="form-control"
          id="userLastName"
          placeholder="DUPONT"
          required
          v-model="user.userLastName"
          name="userLastName"
        />
      </div>
      <div class="form-group">
        <label for="userFirstName">Prénom</label>
        <input
          class="form-control"
          id="userFirstName"
          placeholder="Jean"
          required
          v-model="user.userFirstName"
          name="userFirstName"
        />
      </div>
      <div class="form-group">
        <label for="userEmail">Mail</label>
        <input
          type="mail"
          class="form-control"
          id="userEmail"
          placeholder="votremail@domaine.com"
          required
          v-model="user.userEmail"
          name="userEmail"
        />
      </div>
      <div class="form-group">
        <label for="userCity">Ville</label>
        <input
          type="text"
          class="form-control"
          id="userCity"
          placeholder="Buis les baronnies"
          required
          v-model="user.userCity"
          name="userCity"
        />
      </div>
      <div class="form-group">
        <label for="phoneNumber">Numéro de téléphone</label>
        <input
          type="tel"
          class="form-control"
          id="phoneNumber"
          pattern="[+]{1}[0-9]{11,14}"
          placeholder="+33123456789"
          required
          v-model="user.phoneNumber"
          name="phoneNumber"
        />
      </div>
      <div class="form-group">
        <label for="pwdUser">Mot de passe</label>
        <input
          type="password"
          class="form-control"
          id="pwdUser"
          required
          v-model="user.pwdUser"
          name="pwdUser"
        />
      </div>
      <button @click="saveUser" class="btn btn-success">Soumettre</button>
    </div>
    <div v-else>
      <h4>Réponse soumise avec succès !</h4>
      <button class="btn btn-success" @click="newUser">Ajouter un autre utilisateur</button>
    </div>
  </div>
</template>
<script>
import UserDataService from "../services/UserDataService";
export default {
  name: "add-user",
  data() {
    return {
      user: {
        id: null,
        userLastName: "",
        userFirstName: "",
        userEmail: "",
        isCA: false,
        isMember: false,
        userCity: "",
        phoneNumber: "",
        pwdUser: ""
      },
      submitted: false
    };
  },
  methods: {
    saveUser() {
      var data = {
        userLastName: this.user.userLastName,
        userFirstName: this.user.userFirstName,
        userEmail: this.user.userEmail,
        isCA: this.user.isCA,
        isMember: this.user.isMember,
        userCity: this.user.userCity,
        phoneNumber: this.user.phoneNumber,
        pwdUser: this.user.pwdUser
      };
      UserDataService.create(data)
        .then(response => {
          this.user.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newUser() {
      this.submitted = false;
      this.user = {};
    }
  }
};
</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
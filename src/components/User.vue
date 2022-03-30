<template>
  <div v-if="currentUser" class="edit-form">
    <h4>User</h4>
    <form>
      <div class="form-group">
        <label for="userLastName">Nom</label>
        <input type="text" class="form-control" id="userLastName"
          v-model="currentUser.userLastName"
        />
      </div>
      <div class="form-group">
        <label for="userFirstName">Prénom</label>
        <input type="text" class="form-control" id="userFirstName"
          v-model="currentUser.userFirstName"
        />
      </div>
      <div class="form-group">
        <label for="userEmail">Mail</label>
        <input type="text" class="form-control" id="userEmail"
          v-model="currentUser.userEmail"
        />
      </div>
      <div class="form-group">
        <label for="userCity">Ville</label>
        <input type="text" class="form-control" id="userCity"
          v-model="currentUser.userCity"
        />
      </div>
      <div class="form-group">
        <label for="phoneNumber">Numéro de téléphone</label>
        <input type="text" class="form-control" id="phoneNumber"
          v-model="currentUser.phoneNumber"
        />
      </div>
      <div class="form-group">
        <label><strong>Membre du CA:</strong></label>
        {{ currentUser.isCA ? "Oui" : "Non" }}
      </div>
      <div class="form-group">
        <label><strong>Est membre:</strong></label>
        {{ currentUser.isMember ? "Oui" : "Non" }}
      </div>
    </form>
    <button class="badge badge-primary mr-2"
      v-if="currentUser.isCA"
      @click="updateCAStatus(false)"
    >
      Enlever du CA
    </button>
    <button v-else class="badge badge-primary mr-2"
      @click="updateCAStatus(true)"
    >
      Mettre au CA
    </button>
    <button class="badge badge-primary mr-2"
      v-if="currentUser.isMember"
      @click="updateMemberStatus(false)"
    >
      Enlever des membres
    </button>
    <button v-else class="badge badge-primary mr-2"
      @click="updateMemberStatus(true)"
    >
      Ajouter aux membres
    </button>
    <button class="badge badge-danger mr-2"
      @click="deleteUser"
    >
      Supprimer
    </button>
    <button type="submit" class="badge badge-success"
      @click="updateUser"
    >
      Mettre à jour
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Cliquez sur un utilisateur...</p>
  </div>
</template>
<script>
import UserDataService from "../services/UserDataService";
export default {
  name: "user-data",
  data() {
    return {
      currentUser: null,
      message: ''
    };
  },
  methods: {
    getUser(id) {
      UserDataService.get(id)
        .then(response => {
          this.currentUser = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateCAStatus(CAStatus) {
      var data = {
        id: this.currentUser.id,
        isCA: CAStatus
      };
      UserDataService.update(this.currentUser.id, data)
        .then(response => {
          console.log(response.data);
          this.currentUser.isCA = CAStatus;
          this.message = 'Le statut de membre du CA a été mis à jour avec succès !';
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateMemberStatus(MemberStatus) {
      var data = {
        id: this.currentUser.id,
        isMember: MemberStatus
      };
      UserDataService.update(this.currentUser.id, data)
        .then(response => {
          console.log(response.data);
          this.currentUser.isMember = MemberStatus;
          this.message = 'Le statut de membre a été mis à jour avec succès !';
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateUser() {
      console.log(this.currentUser)
      console.log(this.currentUser.userFirstName)
      UserDataService.update(this.currentUser.id, this.currentUser)
        .then(response => {
          console.log(response.data);
          this.message = 'L\'utilisateur a été mis à jour avec succès !';
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteUser() {
      UserDataService.delete(this.currentUser.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "users" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getUser(this.$route.params.id);
  }
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
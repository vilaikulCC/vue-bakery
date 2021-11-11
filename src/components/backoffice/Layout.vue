<template>
  <div>
    <h1>Backoffice ..</h1>
    <button @click="signOut" type="submit">Sign Out</button>
    <v-main> <slot></slot> </v-main>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import firebase from "../../db";
@Component({})
export default class LayoutBO extends Vue {
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$router.replace("/backoffice/login");
        alert("You don't have a permission");
      }
    });
  }
  signOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.$router.replace("/backoffice/");
      });
  }
}
</script>

<style></style>

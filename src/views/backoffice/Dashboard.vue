<template>
  <div>
    <h1>Dashboard</h1>
    <button @click="signOut" type="submit"></button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Layout from "@/components/backoffice/Layout.vue";
import firebase from "firebase/compat/app";

@Component({
  components: {
    Layout,
  },
})
export default class Dashboard extends Vue {
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$router.replace("/backoffice/");
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

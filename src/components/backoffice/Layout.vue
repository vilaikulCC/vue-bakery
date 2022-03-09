<template>
  <div>
    <div v-if="{ isLoggedIn }">
      <div class="header">
        <div>
          <h3>Bakery Management System</h3>
        </div>
        <!-- <div>
        Bakery</div> -->
        <div><v-btn @click="signOut" type="submit">Sign Out</v-btn></div>
      </div>
      <v-main> <slot></slot> </v-main>

      <v-footer>
        <v-container fluid> @ 2021 Vilaikul </v-container>
      </v-footer>
    </div>

    <div v-else>
      <slot name="login"> </slot>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import firebase from "../../db";

@Component({})
export default class BoLayout extends Vue {
  isLoggedIn = false;
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(`User : ${user}`);
      if (!user) {
        this.isLoggedIn = false;
        this.$router.replace("/backoffice/login");
        // alert("You don't have a permission");
      } else {
        this.isLoggedIn = true;
        this.$router.replace("/backoffice/");
      }
    });
  }
  signOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.$router.replace("/backoffice/login");
      })
      .catch((err) => console.log(`Error : ${err}`));
  }
}
</script>

<style lang="scss">
.header {
  background-color: $color-secondary-darker;
  color: $white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 25px;
  position: relative;
  h3 {
    font-size: 1.5rem;
    margin: 0;
  }
}

footer.theme--light.v-sheet {
  color: $white;
  background-color: $color-secondary-darker;
  color: $white;
  display: flex;
  height: 50px;
  padding-top: 0;
  padding-bottom: 0;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.v-main {
  // height: calc(100% - 130px);
}
</style>

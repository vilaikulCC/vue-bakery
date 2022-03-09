<template>
  <div class="seciton-login">
    <div class="box-login">
      <h1>Login</h1>
      <div v-if="error" class="alert alert-danger">{{ error }}</div>
      <form action="#" @submit.prevent="submit">
        <div class="form-group row">
          <label for="email" class="col-12 col-form-label text-center"
            >Email</label
          >
          <div class="col-12">
            <input
              id="email"
              type="email"
              class="form-control"
              name="email"
              value
              required
              autofocus
              v-model="form.email"
            />
          </div>
        </div>

        <div class="form-group row">
          <label for="password" class="col-12 col-form-label text-center"
            >Password</label
          >

          <div class="col-12">
            <input
              id="password"
              type="password"
              class="form-control"
              name="password"
              required
              v-model="form.password"
            />
          </div>
        </div>

        <div class="form-group row mb-0">
          <div class="col-12">
            <v-btn
              elevation="2"
              plain
              type="submit"
              :loading="loading"
              :ripple="false"
              >Login</v-btn
            >
          </div>
        </div>
      </form>
      <!-- <div><span>or</span></div>
      <v-btn
        elevation="2"
        plain
        id="google"
        @click="loginWithGoogle"
        class=""
        :loading="loading"
        :ripple="false"
        ><i class="fab fa-google"></i> Sign in with Google</v-btn
      > -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import firebase from "../../db";

@Component({})
export default class Login extends Vue {
  form = { email: "", password: "" };
  error = "";
  loading = false;

  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(`User : ${user}`);
      if (!user) {
        this.$router.replace("/backoffice/login");
        // alert("You don't have a permission");
      } else {
        this.$router.replace("/backoffice/");
      }
    });
  }

  submit() {
    console.log("submit");
    this.loading = true;
    firebase
      .auth()
      .signInWithEmailAndPassword(this.form.email, this.form.password)
      .then((data) => {
        // this.$router.replace({ name: "/backoffice/dashboard" });
        this.loading = false;

        this.$router.replace({ path: "/backoffice/dashboard" });
      })
      .catch((err) => {
        this.loading = false;
        var errorCode = err.code;
        var errorMessage = err.message;
        this.error = "Invalid username or password";
      });
  }

  resetInput() {
    this.form.email = "";
    this.form.password = "";
  }

  loginWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((data) => {
        this.$router.replace({ path: "/backoffice/dashboard" });
      })
      .catch((err) => {
        this.loading = false;
        // this.error = "Invalid";
      });
  }
}
</script>

<style lang="scss">
.seciton-login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  .box-login {
    padding: 20px 35px;
    flex-basis: 500px;
    background-color: $color-primary-lighter;
    color: $color-secondary-darker;
    border: 1px solid $black;
    animation: slideOut 3s ease-in-out;
    text-align: center;
    h1 {
      margin: 15px 0 35px;
    }
    label {
      font-weight: bold;
      color: $color-secondary;
    }
    input {
      height: 48px;
      border: 1px solid $color-secondary-darker;
      width: 100%;
      margin-bottom: 20px;
      text-align: center;
      &:focus {
        border-radius: 0;
        outline: 0;
        padding: 0 15px;
      }
    }
    .v-btn:not(.v-btn--round).v-size--default {
      @include btn;
      padding: 0 35px;
      background-color: $black;
      color: $white;
      margin-bottom: 20px;
      width: 100%;
      height: 48px;
      #google {
        color: $color-secondary-darker;
        i {
          margin-right: 15px;
        }
      }
    }
    .alert {
      &.alert-danger {
        color: #cc0000;
        font-weight: 500;
      }
    }
  }
}
@keyframes slideOut {
  0% {
    opacity: 0;
  }
  80% {
    opacity: 1;
  }
}
</style>

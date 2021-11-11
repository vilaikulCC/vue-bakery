<template>
  <div id="login" class="main-box">
    <LoginAuth />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginAuth from "@/components/backoffice/Login.vue";

@Component({
  components: {
    LoginAuth,
  },
})
export default class Login extends Vue {}
</script>

<style></style>

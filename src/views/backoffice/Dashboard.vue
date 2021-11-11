<template>
  <Layout>
    <v-container> <h1>Dashboard..</h1></v-container>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Layout from "@/components/backoffice/Layout.vue";

@Component({
  components: {
    Layout,
  },
})
export default class Dashboard extends Vue {}
</script>

<style></style>

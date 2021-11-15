<template>
  <Layout>
    <v-container>
      <div class="section-head">
        <h1><i class="fas fa-bread-slice"></i> Dashboard</h1>
        <v-btn elevation="2" plain class="btn-primary" :ripple="false"
          ><i class="fas fa-plus"></i> Add</v-btn
        >
      </div>
    </v-container>
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
export default class BakeryLists extends Vue {}
</script>

<style></style>

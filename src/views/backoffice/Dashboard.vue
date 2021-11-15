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
export default class Dashboard extends Vue {}
</script>

<style lang="scss">
h1 {
  margin: 15px 0 35px;
  font-size: 1.5rem;
  color: $color-secondary-darker;
}
.section-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    i {
      margin-right: 10px;
    }
  }
}
</style>

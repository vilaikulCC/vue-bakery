<template>
  <Layout>
    <bo-dashboard></bo-dashboard>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Layout from "@/components/backoffice/Layout.vue";
import BoDashboard from "@/components/backoffice/Dashboard.vue";

@Component({
  components: {
    Layout,
    BoDashboard,
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

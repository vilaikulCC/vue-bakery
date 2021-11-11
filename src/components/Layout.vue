<template>
  <div>
    <v-container class="header">
      <AppHeader />
    </v-container>
    <v-main> <slot></slot> </v-main>
    <v-footer class="footer">
      <v-container fluid>
        <AppFooter />
      </v-container>

      <v-container fluid class="bottom-bar">
        <v-container>
          <CreditResource />
        </v-container>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import AppHeader from "@/components/Header.vue";
import AppFooter from "@/components/Footer.vue";
import CreditResource from "@/components/CreditResource.vue";

@Component({
  components: {
    AppHeader,
    AppFooter,
    CreditResource,
  },
})
export default class Layout extends Vue {}
</script>

<style lang="scss">
.container.header,
footer.footer {
  @include reset-frame-section;
}
.bottom-bar {
  background-color: $black;
}
</style>

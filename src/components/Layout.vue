<template>
  <div>
    <v-container class="header">
      <AppHeader />
    </v-container>

    <v-main> <slot></slot> </v-main>
    <v-footer>
      <v-container class="footer">
        <AppFooter />
      </v-container>
    </v-footer>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Layout extends Vue {}
</script>

<style lang="scss">
.container.header {
  padding-top: 0;
  padding-bottom: 0;
}
</style>

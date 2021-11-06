<template>
  <div class="banner-top">
    <img src="/img/Head-Banner-1.jpg" alt="" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class BannerHome extends Vue {}
</script>
<style lang="scss" scoped>
.banner-top {
  width: 100%;
  max-height: 420px;
  img {
    width: 100%;
    max-height: 420px;
    object-fit: cover;
  }
}
</style>

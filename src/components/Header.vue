<template>
  <div class="header-top">
    <div>
      <a href="/">
        <img src="/img/logo_125Bakery.svg" alt="" class="brand-logo" />
      </a>
    </div>
    <div class="top-menu">
      <ul>
        <li><a href="">สินค้าของเรา</a></li>
        <li><a href="">ติดต่อเรา</a></li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.header-top {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand-logo {
    height: 30px;
  }
  .top-menu {
    ul {
      list-style: none;
      display: flex;
      justify-content: end;

      li {
        margin-left: 25px;
      }
    }
  }
}
</style>

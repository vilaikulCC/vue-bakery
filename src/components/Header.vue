<template>
  <div class="header-top">
    <a href="/" class="brand-logo">
      <img src="/img/logo_125Bakery.svg" alt="" />
    </a>
    <div class="top-menu">
      <ul>
        <li><a href="">สินค้าของเรา</a></li>
        <li><a href="">ติดต่อเรา</a></li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.header-top {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand-logo {
    img {
      height: 30px;
    }
  }
  .top-menu {
    ul {
      list-style: none;
      display: flex;
      justify-content: end;

      li {
        margin-left: 25px;
        a {
          color: $color-secondary;
          text-decoration: none;
          &:hover {
            color: $color-primary;
          }
        }
      }
    }
  }
}
</style>

<template>
  <v-container class="inner-footer">
    <v-row>
      <v-col> <hr /> </v-col>
    </v-row>

    <v-row>
      <v-col class="widget-1" md="2">
        <a href="/" class="brand-logo">
          <img src="/img/logo_125Bakery.svg" alt="" />
        </a>
        <p>@2021 125 Bakery</p>
      </v-col>
      <v-col class="widget-2" md="8">
        <ul class="list-contact">
          <li><i class="fas fa-phone-alt"></i> 0899999999</li>
          <li><i class="fas fa-envelope"></i> test@test.com</li>
          <li><i class="fab fa-line"></i> @idline</li>
        </ul>
      </v-col>
      <v-col class="widget-3" md="2">
        <div>
          <p>สั่งผ่านแอปฯ ได้แล้ววันนี้</p>
          <div class="app-download">
            <a href="" title="App-Lineman"
              ><img src="/img/logo-lineman.png" alt="App-Lineman"
            /></a>
            <a href="" title="App-Grab"
              ><img src="/img/logo-grab.png" alt="App-Grab"
            /></a>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Footer extends Vue {}
</script>
<style lang="scss" scoped>
.inner-footer {
  @include frame-section;
  hr {
    height: 2px;
    background-color: $black;
    margin-bottom: 35px;
    border: 0;
  }
  img {
    max-width: 155px;
  }
  p {
    color: $color-secondary;
    font-size: 15px;
  }
  ul.list-contact {
    color: $color-secondary;
    list-style: none;
    font-size: 15px;
    i {
      color: $color-primary;
      margin-right: 7px;
      font-size: 20px;
      text-align: center;
      width: 25px;
    }
    li {
      margin-bottom: 10px;
    }
  }
  .app-download {
    img {
      width: 65px;
    }
  }

  .widget-3 {
    > div {
      text-align: center;
    }
  }
}
</style>

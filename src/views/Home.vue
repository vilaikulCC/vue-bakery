<template>
  <Layout>
    <v-container fluid class="section-banner">
      <BannerHome />
    </v-container>
    <v-container fluid class="section-bestseller">
      <v-container>
        <v-row>
          <v-col md="3">
            <div class="bestseller-left">
              <div>
                <h2>สินค้าขายดี</h2>
                <p>
                  ขนมอบใหม่ หลากหลายเมนู<br />
                  ราคากันเอง ส่งตรงถึงบ้าน
                </p>
              </div>
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
            </div>
          </v-col>

          <v-col md="9">
            <hr />
            <v-row>
              <v-col
                md="4"
                v-for="(item, index) in bakeList"
                :key="index"
                :value="item.id"
              >
                <div class="pd-card">
                  <img src="/img/pd-croissant.jpg" alt="" />
                  <h6>{{ item.name }}</h6>
                  <p>ราคา {{ item.selling_price }} บาท/{{ item.unit }}</p>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <v-container fluid class="section-product">
      <v-container>
        <v-row>
          <v-col>
            <h3><span>สินค้าของเรา</span></h3>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <div class="section-filter">
              <span>ค้นหาขนม</span>
              <v-select
                v-model="value"
                :items="items"
                chips
                label="ทั้งหมด"
                multiple
                solo
                class="select-status"
              ></v-select>
              <v-text-field
                solo
                label="พิมพ์ค้นหา"
                append-icon="fas fa-search"
                class="txt-search"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            md="4"
            v-for="(item, index) in bakeList"
            :key="index"
            :value="item.id"
          >
            <div class="pd-card-inline">
              <img src="/img/pd-croissant.jpg" alt="" />
              <div class="pd-card-body">
                <h6>{{ item.name }}</h6>
                <p>ราคา {{ item.selling_price }} บาท/{{ item.unit }}</p>
                <div
                  v-for="(statusItem, index) in statusList"
                  :key="index"
                  :value="statusItem.id"
                >
                  <span
                    v-if="statusItem.id == item.status && statusItem.id"
                    :class="`badge-${statusItem.id}`"
                  >
                    {{ statusItem.name }}</span
                  >
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Layout from "@/components/Layout.vue";
import BannerHome from "@/components/BannerHome.vue";
import { db } from "../db";

@Component({
  components: {
    Layout,
    BannerHome,
  },
})
export default class Home extends Vue {
  bakeList = {};
  statusList = {};
  status = "";

  mounted() {
    this.getBakeryList();
    this.getStatus();
  }

  getBakeryList() {
    db.collection("bakery")
      .get()
      .then((querySnapshot) => {
        this.bakeList = querySnapshot.docs.map((doc) => doc.data());
      });
  }

  getStatus() {
    db.collection("status_badge")
      .get()
      .then((querySnapshot) => {
        this.statusList = querySnapshot.docs.map((doc) => doc.data());
      });
  }
}
</script>

<style lang="scss">
.section-banner {
  padding: 0;
}
.section-bestseller {
  background-color: $color-primary-lighter;
  @include frame-section;
  h2 {
    color: $black;
  }
  hr {
    height: 2px;
    background-color: $color-primary-light;
    margin-bottom: 35px;
    border: 0;
  }
  .bestseller-left {
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .app-download {
      img {
        width: 65px;
      }
    }
  }
}
.section-product {
  h3 {
    position: relative;
    color: $black;
    &::after {
      content: "";
      height: 2px;
      width: 100%;
      background-color: $black;
      display: block;
      position: absolute;
      top: 50%;
      right: 0;
      width: calc(100% - 170px);
    }
  }
  @include frame-section;
  hr {
    height: 2px;
    background-color: $black;
    margin-bottom: 35px;
    border: 0;
  }
  .section-filter {
    display: flex;
    span {
      margin-top: 15px;
    }
    .select-status {
      max-width: 250px;
    }
    .txt-search {
      max-width: 340px;
    }
    .select-status,
    .txt-search {
      margin-left: 30px;
      &:focus {
        caret-color: $color-primary !important;
      }
      > .v-input__control > .v-input__slot {
        box-shadow: none !important;
        border: 1px solid $color-primary-light;
        border-radius: 0;
        i {
          color: $color-primary-light;
          &.primary--text {
            color: $color-primary !important;
            caret-color: $color-primary !important;
          }
          &:hover,
          &:focus {
            color: $color-primary;
          }
        }
      }
    }
  }
}
.pd-card {
  text-align: center;
  line-clamp: 2;
  h6 {
    padding: 0 15%;
    color: $black;
  }
  img {
    width: 100%;
    max-height: max-width;
    border-radius: 5px;
    animation: fadeIn 5s;
  }
}
.pd-card-inline {
  display: flex;
  h6 {
    color: $black;
  }
  img {
    width: 120px;
    object-fit: cover;
    border-radius: 5px;
  }
  .pd-card-body {
    padding-left: 20px;
    padding-right: 15px;
    .status-badge {
      color: red;
    }
  }
}

.badge-1 {
  @include small-badge;
  color: $color-warning;
  background-color: $color-warning-light;
}
.badge-2 {
  @include small-badge;
  color: $white;
  background-color: $color-danger;
}
.badge-3 {
  @include small-badge;
  color: $color-secondary-light;
  background-color: $color-secondary-lighter;
}

@include img-animate;
</style>

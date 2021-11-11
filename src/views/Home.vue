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
                v-for="(item, index) in bakeBSList"
                :key="index"
                :value="item.id"
              >
                <div class="pd-card">
                  <img
                    :src="item.img_url"
                    :alt="item.name"
                    :title="item.name"
                  />
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
                item-value="id"
                item-text="name"
                v-model="selectedStatus"
                :items="selStatus"
                chips
                multiple
                solo
                class="select-status"
                @change="changeSelectedStatus"
              >
                <template v-slot:prepend-item>
                  <v-list-item ripple @click="toggle">
                    <v-list-item-action
                      ><v-icon
                        :color="
                          selectedStatus.length > 0 ? 'indigo darken-4' : ''
                        "
                      >
                        {{ icon }}
                      </v-icon></v-list-item-action
                    >
                    <v-list-item-content>
                      <v-list-item-title> ทั้งหมด </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-select>
              <v-text-field
                solo
                label="พิมพ์ค้นหาจากชื่อขนม"
                class="txt-search"
                v-model="textSearch"
                v-on:keyup.enter="searchBake(textSearch)"
              ></v-text-field>
              <v-btn
                elevation="0"
                plain
                class="btn-primary"
                :ripple="false"
                @click="searchBake(textSearch)"
                ><i class="fas fa-search mr-2"></i> ค้นหา</v-btn
              >
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
              <img :src="item.img_url" :alt="item.name" :title="item.name" />
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

// interface status {
//   id: string;
//   name: string;
// }
@Component({
  components: {
    Layout,
    BannerHome,
  },
})
export default class Home extends Vue {
  bakeList = {};
  bakeBSList = {};
  statusList = {};
  selStatus = [];
  // selStatus = [
  //   { id: "1", name: "มาใหม่" },
  //   { id: "2", name: "ขายดี" },
  //   { id: "3", name: "สินค้าหมด" },
  // ];
  selectedStatus = [{ id: "1" }, { id: "2" }, { id: "3" }];
  checkStatus: Array<string> = ["0", "1", "2", "3"];
  textSearch = "";

  mounted() {
    this.getBakeryList(this.checkStatus);
    this.getBakeryBestSellerList();
    this.getStatus();
  }

  getBakeryBestSellerList() {
    db.collection("bakery")
      .where("status", "==", "2")
      .get()
      .then((querySnapshot) => {
        this.bakeBSList = querySnapshot.docs.map((doc) => doc.data());
      });
  }
  getBakeryList(status: Array<string>) {
    db.collection("bakery")
      .where("status", "in", status)
      .get()
      .then((querySnapshot) => {
        this.bakeList = querySnapshot.docs.map((doc) => doc.data());
      });
  }
  getBakerySearch(keyword: string) {
    db.collection("bakery")
      .where("name", ">=", keyword)
      .get()
      .then((querySnapshot) => {
        this.bakeList = querySnapshot.docs.map((doc) => doc.data());
      });
  }

  getStatus() {
    db.collection("status_badge")
      .where("id", "!=", "0")
      .get()
      .then((querySnapshot) => {
        this.statusList = querySnapshot.docs.map((doc) => doc.data());
        this.selStatus = JSON.parse(JSON.stringify(this.statusList));
      });
  }
  toggle() {
    this.$nextTick(() => {
      if (this.checkAllStatus) {
        this.selectedStatus = [];
        this.getBakeryList(["-1"]);
      } else {
        this.selectedStatus = this.selStatus;
        this.getBakeryList(this.checkStatus);
      }
    });
  }
  get checkAllStatus() {
    return this.selectedStatus.length === this.selStatus.length;
  }
  get checkSomeStatus() {
    return this.selectedStatus.length > 0 && !this.checkAllStatus;
  }
  get icon() {
    if (this.checkAllStatus) return "far fa-check-square";
    if (this.checkSomeStatus) return "far fa-minus-square";
    return "far fa-square";
  }
  changeSelectedStatus(selected: Array<string>) {
    if (selected.length == 3) this.getBakeryList(this.checkStatus);
    else this.getBakeryList(selected.slice());
  }
  searchBake(textSearch: string) {
    if (textSearch != "") {
      console.log(textSearch);
      this.getBakerySearch(textSearch);
    }
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
    > span {
      margin-top: 15px;
    }
    .select-status {
      max-width: 300px;
    }
    .txt-search {
      max-width: 300px;
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
    margin-bottom: 20px;
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

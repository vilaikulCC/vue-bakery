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
            <h3>สินค้าของเรา</h3>
          </v-col>
        </v-row>

        <v-row>
          <v-col> </v-col>
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

  mounted() {
    // const bake = this.$bind("documents", db.collection("bakery")).then(
    //   (res) => {
    //     // console.log(res.map((item) => item));
    //     // res.map((item) => {
    //     //   console.log(`R ${item.name} ${item.selling_price} บาท/${item.unit}`);
    //     // });
    //   }
    // );

    db.collection("bakery")
      .get()
      .then((querySnapshot) => {
        const documents = querySnapshot.docs.map((doc) => doc.data());
        this.bakeList = querySnapshot.docs.map((doc) => doc.data());

        documents.map((item) => {
          console.log(`M ${item.name} ${item.selling_price} บาท/${item.unit}`);
        });
      });
  }
}
</script>

<style lang="scss">
.section-banner {
  padding: 0;
}
.pd-card {
  text-align: center;
  img {
    width: 100%;
    border-radius: 5px;
  }
}
.section-bestseller {
  background-color: $color-primary-lighter;
  @include frame-section;
  hr {
    height: 2px;
    background-color: $color-primary-light;
    margin-bottom: 35px;
    border: 0;
  }
  .bestseller-left {
    display: flex;
    height: 100%;
    display: flex;
    align-content: space-between;
    flex-direction: column;
    .app-download {
      img {
        width: 65px;
      }
    }
  }
}
.section-product {
  @include frame-section;
  hr {
    height: 2px;
    background-color: $black;
    margin-bottom: 35px;
    border: 0;
  }
}
</style>

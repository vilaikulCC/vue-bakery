<template>
  <div>
    <v-container>
      <Header />
    </v-container>
    <v-container>
      <BannerHome />
    </v-container>
    <v-container>
      <h2>Today List</h2>
      <v-row>
        <v-col>
          <div v-for="(item, index) in bakeList" :key="index" :value="item.id">
            {{ item.name }} ราคา {{ item.selling_price }} บาท/{{ item.unit }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import BannerHome from "@/components/BannerHome.vue";
import { db } from "../db";

@Component({
  components: {
    Header,
    BannerHome,
  },
})
export default class Home extends Vue {
  bakeList = {};

  mounted() {
    const bake = this.$bind("documents", db.collection("bakery")).then(
      (res) => {
        // console.log(res.map((item) => item));
        // res.map((item) => {
        //   console.log(`R ${item.name} ${item.selling_price} บาท/${item.unit}`);
        // });
      }
    );

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

<style scoped></style>

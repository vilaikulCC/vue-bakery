<template>
  <v-container>
    <h1>Bakery Home</h1>
    <h2>Today List</h2>
    <v-row>
      <v-col>
        <div v-for="(item, index) in bakeList" :key="index" :value="item.id">
          {{ item.name }} ราคา {{ item.selling_price }} บาท/{{ item.unit }}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { db } from "../db";

@Component({})
export default class Home extends Vue {
  bakeList = {};

  mounted() {
    console.log("Homepage loaded");
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

        // documents.map((item) => {
        //   console.log(`M ${item.name} ${item.selling_price} บาท/${item.unit}`);
        // });
      });
  }
}
</script>

<style scoped></style>

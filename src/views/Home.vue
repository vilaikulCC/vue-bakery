<template>
  <div class="show">
    <h1>Bakery Home</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

export default class Home extends Vue {
  async created() {
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "bakery"));

    querySnapshot.forEach((doc) => {
      console.log(`Test DB ${doc.id} => ${doc.data()}`);
    });
  }

  mounted() {
    console.log("pageload");
  }
}
</script>

<style scoped>
.show {
  background: green;
}
</style>

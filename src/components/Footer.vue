<template>
  <div>
    <CreditResource></CreditResource>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CreditResource from "@/components/CreditResource.vue";

@Component({
  components: {
    CreditResource,
  },
})
export default class Footer extends Vue {}
</script>
<style lang="scss" scoped></style>

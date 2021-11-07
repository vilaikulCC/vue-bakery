<template>
  <div class="section-credit">
    <v-row>
      <v-col>
        <h6>Credit Resource</h6>
        <ul>
          <li>
            Photo by
            <a
              href="https://unsplash.com/@minkmingle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              >Mink Mingle</a
            >
            on
            <a
              href="https://unsplash.com/s/photos/bakery?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              >Unsplash</a
            >
          </li>
          <li>
            Photo by
            <a
              href="https://unsplash.com/@molnj?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              >Jocelyn Morales</a
            >
            on
            <a
              href="https://unsplash.com/s/photos/bakery?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              >Unsplash</a
            >
          </li>
          <li>
            Photo by
            <a
              href="https://unsplash.com/@nsdoyle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              >Nicholas Doyle</a
            >
            on
            <a
              href="https://unsplash.com/s/photos/bakery?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              >Unsplash</a
            >
          </li>
          <li>
            Photo by
            <a
              href="https://unsplash.com/@fallonmichaeltx?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              >Fallon Michael</a
            >
            on
            <a
              href="https://unsplash.com/s/photos/bakery?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              >Unsplash</a
            >
          </li>
          <li>
            Photo by
            <a
              href="https://unsplash.com/@frederickjmedina?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              >Frederick Medina</a
            >
            on
            <a
              href="https://unsplash.com/s/photos/bakery?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              >Unsplash</a
            >
          </li>
          <li>
            Photo by
            <a
              href="https://unsplash.com/@dreamcatchlight?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              >Diana Akhmetianova</a
            >
            on
            <a
              href="https://unsplash.com/s/photos/bakery?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              >Unsplash</a
            >
          </li>
        </ul>
      </v-col>
      <v-col > <h6 class="text-right">*Demo Version*</h6></v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class CreditResource extends Vue {}
</script>

<style lang="scss" scoped>
.section-credit {
  & {
    color: $white;
    font-size: 0.7rem;
  }
  a {
    @include default-link;
    color: $white;
  }
  ul {
    list-style: none;
    padding: 0;
  }
}
</style>

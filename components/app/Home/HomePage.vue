<template>
  <div>
    <v-app class="d-none d-sm-flex">
      <slide-page style="position: relative"></slide-page>

      <popular-brands></popular-brands>
      <hr>

      <best-brands></best-brands>
      <hr>

      <slogan-page></slogan-page>

      <footer-product></footer-product>


    </v-app>


  </div>

</template>

<script>

import SlidePage from "@/components/app/Slide/Slide";
import FooterProduct from "@/components/app/Footer/FooterProduct";
import PopularBrands from "@/components/app/Brands/PopularBrands";
import BestBrands from "@/components/app/Brands/BestBrands";
import SloganPage from "@/components/app/Slogan/SloganPage";

export default {
    layout:'main',
    components: {
          SlidePage:SlidePage,
          FooterProduct:FooterProduct,
          PopularBrands:PopularBrands,
          BestBrands:BestBrands,
          SloganPage:SloganPage,
    },

}
</script>

<style scoped>

  hr{
    color: dimgrey;
    margin-top: 4vw;
  }

</style>


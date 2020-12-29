<template>

<div>
  <product-page-xs class="d-flex d-sm-none"></product-page-xs>

</div>
  
</template>

<script>

import ProductPage from '@/components/app/Product/ProductPage.vue'
import ProductPageXs from '@/components/app/Mobile/Product/ProductPageXs.vue'


export default {


  components:{
    ProductPage,
    ProductPageXs,
  }
  
}
</script>

<style scoped>

</style>
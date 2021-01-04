<template>
  <div>
      <home-page></home-page>
      <home-page-xs class="d-flex d-sm-none"></home-page-xs>
  </div>

</template>

<script>

import HomePage from "@/components/app/Home/HomePage";
import HomePageXs from "@/components/app/Mobile/Home/HomePageXs";


export default {
    layout:'main',
    components: {
          HomePage:HomePage,
          HomePageXs:HomePageXs,
    },

}
</script>

<style scoped>

  hr{
    color: dimgrey;
    margin-top: 4vw;
  }

</style>


<template>
  <div>
        <nav-page></nav-page>
        <Nuxt />





  </div>
</template>

<script>
  import NavPage from "@/components/NavPage";
    export default {
        name: "tets_layout",
        components:{
            NavPage:NavPage,
        }
    }
</script>

<style scoped>

</style>

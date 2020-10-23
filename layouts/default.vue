<template>
  <div>
    <v-app>
       <menu-page class=""></menu-page>
        <Nuxt />
<!--    <FooterPage></FooterPage>-->
    </v-app>




  </div>
</template>


<script>
  import MenuPage from "@/components/Menu";

export default {
    components: {
        MenuPage:MenuPage,
    },


}
</script>

<style>

</style>

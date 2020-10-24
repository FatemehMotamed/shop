<template>
  <div>
    <v-app>
       <logo-page></logo-page>
        <nav-page class="nav_box"></nav-page>
        <Nuxt />
<!--    <FooterPage></FooterPage>-->
    </v-app>




  </div>
</template>


<script>
  import LogoPage from "@/components/Logo";
  import NavPage from "@/components/NavPage";

export default {
    components: {
        LogoPage:LogoPage,
        NavPage:NavPage,
    },


}
</script>

<style>
  .nav_box{
    position: absolute;
    top: 15%;
    left: 29%;
  }

</style>

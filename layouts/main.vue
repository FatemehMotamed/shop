<template>
  <div>
    <v-app>
       <logo-page class="d-none d-sm-flex"></logo-page>
        <nav-page class="nav_box d-none d-sm-flex"></nav-page>
<!--      <header-page class="nav_box"></header-page>-->
        <Nuxt />
      <footer-page class="d-none d-sm-flex"></footer-page>
    </v-app>




  </div>
</template>


<script>
  import LogoPage from "@/components/app/Header/Logo";
  import NavPage from "@/components/app/Header/NavPage";
  import FooterPage from "@/components/app/Footer/FooterPage";


export default {
    name:'main',
    components: {
        LogoPage:LogoPage,
        NavPage:NavPage,
        FooterPage:FooterPage,

    },


}
</script>

<style>
  .nav_box{
    position: absolute;
    top: 8vw;
    left: 18vw;
  }
  html{
    font-family: 'Markazi Text', serif;
  }

</style>

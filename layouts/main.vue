<template>
  <div>
    <v-app>
       <logo-page></logo-page>
        <nav-page class="nav_box"></nav-page>
<!--      <header-page class="nav_box"></header-page>-->
        <Nuxt />
      <footer-page></footer-page>
    </v-app>




  </div>
</template>


<script>
  import LogoPage from "@/components/Logo";
  import NavPage from "@/components/NavPage";
  import FooterPage from "@/components/FooterPage";


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
    left: 29vw;
  }
  html{
    font-family: 'Markazi Text', serif;
  }

</style>

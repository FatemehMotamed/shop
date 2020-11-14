<template>
  <div>
    <v-app>
       <logo-page class="d-none d-sm-flex"></logo-page>
        <nav-page class="nav_box2 d-none d-sm-flex"></nav-page>

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
    components: {
        LogoPage:LogoPage,
        NavPage:NavPage,
        FooterPage:FooterPage,

    },


}
</script>

<style >
.nav_box2{
  margin-top: 8vw;
  margin-left: 18vw;
}

</style>

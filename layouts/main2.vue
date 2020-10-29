<template>
  <div>
    <v-app>
        <logo2></logo2>
        <nav-page2 class="nav_box2"></nav-page2>

        <Nuxt />
      <footer-page></footer-page>
    </v-app>




  </div>
</template>


<script>
  import LogoPage from "@/components/Logo";
  import NavPage2 from "@/components/NavPage2";
  import FooterPage from "@/components/FooterPage";
  import Logo2 from "../components/Logo2";


export default {
    components: {
        Logo2,
        LogoPage:LogoPage,
        NavPage2:NavPage2,
        FooterPage:FooterPage,

    },


}
</script>

<style >
.nav_box2{
  margin-top: 8vw;
  margin-left: 28vw;
}

</style>

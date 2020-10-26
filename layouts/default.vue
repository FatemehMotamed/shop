<template>
  <div>
    <v-app>
       <logo-page></logo-page>
        <nav-page class="nav_box2"></nav-page>

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
  margin-left: 28vw;
}

</style>

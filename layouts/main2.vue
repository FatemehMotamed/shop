<template>
  <div>
    <v-app>
        <logo2></logo2>


        <Nuxt />
      <footer-page></footer-page>
    </v-app>




  </div>
</template>


<script>
  import LogoPage from "@/components/Logo";

  import FooterPage from "@/components/FooterPage";
  import Logo2 from "../components/Logo2";


export default {
    components: {
        Logo2,
        LogoPage:LogoPage,
        FooterPage:FooterPage,

    },


}
</script>

<style >


</style>

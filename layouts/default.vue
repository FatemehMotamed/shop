<template>
  <div>
    <v-app>
       <logo-page class=""></logo-page>
        <Nuxt />
<!--    <FooterPage></FooterPage>-->
    </v-app>




  </div>
</template>


<script>
  import LogoPage from "@/components/Logo";

export default {
    components: {
        LogoPage:LogoPage,
    },


}
</script>

<style>

</style>

<template>
  <div>

       <headerpage></headerpage>
        <Nuxt />
<!--    <FooterPage></FooterPage>-->




  </div>
</template>


<script>
  import HeaderPage from "@/components/HeaderPage";

export default {
    components: {
        headerpage:HeaderPage,
    },


}
</script>

<style>

</style>

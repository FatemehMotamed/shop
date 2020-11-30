<template>
  <home-page></home-page>
</template>

<script>
  import HomePage from "@/components/app/Dashboard/Home/HomePage";
    export default {
        name: "index",
        layout: "dashboard_layout",
        components:{
            HomePage:HomePage,
        }

    }
</script>

<style scoped>

</style>

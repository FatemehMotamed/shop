<template>
  <home-page></home-page>

</template>

<script>
   import{ mapGetters } from 'vuex'
   import HomePage from '@/components/app/Dashboard/Home/HomePage'
    export default {
        middleware: 'authDashboard',
        name: "index",
        layout: "dashboard_layout",
        components:{
          HomePage:HomePage
        }
    }

</script>

<style scoped>

</style>

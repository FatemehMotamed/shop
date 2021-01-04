<template>
<div><a @click="set()">AllUSER</a></div>
</template>

<script>
   import{ mapGetters } from 'vuex'
    export default {
        middleware: 'authDashboard',
        name: "index",
        layout: "dashboard_layout",
        methods:{
          set(){
            let self=this;
              this.$axios.post('/user/usersList').then(function(response){
              console.log(response);
        })
          }
        },
        computed: {
              ...mapGetters(['getToken'])
              }

    }
</script>

<style scoped>

</style>

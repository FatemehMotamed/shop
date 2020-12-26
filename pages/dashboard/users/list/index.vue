<template>
  <custom-table :desserts="table_data"></custom-table>
</template>

<script>

import CustomTable from '@/components/core/dashboard/CustomTable'
export default {
  name: "index",

  layout: "dashboard_layout",
  components:{
    CustomTable:CustomTable,
  },

    data(){
        return{
            table_data: []
        }
    },

    created(){
        this.fetchSomething();
    },
    methods: {
      async fetchSomething() {
          let self = this;

          this.$axios.$post('/user/usersList').then(function(response) {
              self.table_data = response.data[0];
              console.log(self.table_data);
          });
      }
    },


}
</script>

<style scoped>

</style>

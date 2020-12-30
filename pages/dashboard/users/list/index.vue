<template>
  <div class="main rounded-xl">
    <div class="form_box rounded-lg">

      <search-form ></search-form>
    </div>

    <custom-table  :list="table_data" :table_title="headers" ></custom-table>

  </div>
</template>

<script>

import CustomTable from '@/components/core/dashboard/CustomTable'
import SearchForm from '@/components/app/Dashboard/Users/SearchForm'
import EventBuss from '@/assets/js/eventBus'
export default {
  name: "index",

  layout: "dashboard_layout",
  components:{
    CustomTable:CustomTable,
    SearchForm:SearchForm,
  },

    data(){
        return{
            table_data: [],
            headers: [
        { text: 'نام کاربری', value: 'username', align: 'start'},
        { text: 'نام', value: 'f_name'},
        { text: 'نام خانوادگی', value: 'l_name' },
        { text: 'شماره تماس', value: 'mobile' },
        { text: 'کدملی', value: 'national_code' },
        { text: 'شهر', value: 'city' },
        { text: 'کدپستی', value: 'postal_code' },
        // { text: 'عکس', value: 'avatar' },
        { text: 'ایمیل', value: 'email' },



        { text: 'Actions', value: 'actions', sortable: false },

      ],
        }
    },

    created(){
        this.fetchSomething();
    },
    methods: {
      async fetchSomething() {
          let self = this;

          this.$axios.$post('/user/usersList').then(function(response) {
              self.table_data = response.data;
              // console.log("Alllllll",response.data);
          });

      },
       set_search_result(item){
          this.table_data=item
         // console.log("filtttter",item)
        }

    },
    mounted(){
        EventBuss.$on('search-result',item =>{this.set_search_result(item)})
      }


}
</script>

<style scoped>
.main{
  width: 80vw;
  background-color: ghostwhite;
  margin-right: auto;
  margin-left: auto;
  padding-left: 2vw;
  padding-right: 2vw;
  padding-top: 0.5vw;
  padding-bottom: 2vw;
  }
  *{
  font-family: 'Markazi Text', serif !important;
}
  .v-select{
  color: #0ad3f7!important;
}
  .form_box{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    /*background-color: #b8ebe3;*/
    margin-top: 1vw;
  }


</style>

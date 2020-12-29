<template>
  <div class="main rounded-xl">
    <div class="form_box rounded-xl">
      <h1 dir="rtl" class="pt-10 pr-5">جستجوی کاربر</h1>
      <search-form ></search-form>
    </div>

    <custom-table  :list="table_data" :table_title="headers"></custom-table>

  </div>
</template>

<script>

import CustomTable from '@/components/core/dashboard/CustomTable'
import SearchForm from '@/components/app/Dashboard/Users/SearchForm'
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
              console.log(self.table_data[1].id);
          });
      }
    },


}
</script>

<style scoped>
.main{
  width: 80vw;
  background-color: ghostwhite;
  margin-right: auto;
  margin-left: auto;
  }
  *{
  font-family: 'Markazi Text', serif !important;
}
  .v-select{
  color: #0ad3f7!important;
}
  .form_box{
    /*width: 80%;*/
    margin-left: auto;
    margin-right: auto;
    background-color: #b8ebe3;
  }

</style>

<template>
<<<<<<< HEAD
  <div class="mt-10 main rounded-lg" style="box-shadow: 5px 5px 5px #BDBDBD; float:left">
    <div class="form_box rounded-lg">

      <search-form ></search-form>
    </div>

    <custom-table style="box-shadow: 5px 5px 5px #BDBDBD;" table_name="users" :list="table_data" :table_title="headers" ></custom-table>

  </div>
=======
  <custom-table :list="table_data"></custom-table>
>>>>>>> d046394869a9d0b117824b16e0c205c13535da61
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
<<<<<<< HEAD
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
=======
            table_data: []
>>>>>>> d046394869a9d0b117824b16e0c205c13535da61
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
<<<<<<< HEAD
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
=======
              // console.log(self.table_data);
          });
      }
    },
>>>>>>> d046394869a9d0b117824b16e0c205c13535da61


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

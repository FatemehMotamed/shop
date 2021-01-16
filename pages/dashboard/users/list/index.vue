<template>
  <div class="mt-10 main rounded-lg" style="box-shadow: 5px 5px 5px #BDBDBD; float:left">
    <div class="form_box rounded-lg">

      <search-form ></search-form>
    </div>

    <custom-table class="table_box mt-3"  table_name="users" :list="table_data" :table_title="headers" ></custom-table>
    <br>
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
          { text: 'نام کاربری', value: 'username', align: 'start',class: 'white--text indigo accent-2--text'},
          { text: 'نام', value: 'f_name',class: 'white--text indigo accent-2--text'},
          { text: 'نام خانوادگی', value: 'l_name',class: 'white--text indigo accent-2--text' },
          { text: 'شماره تماس', value: 'mobile',class: 'white--text indigo accent-2--text' },
          { text: 'کدملی', value: 'national_code',class: 'white--text indigo accent-2--text' },
          { text: 'شهر', value: 'city',class: 'white--text indigo accent-2--text' },
          { text: 'کدپستی', value: 'postal_code',class: 'white--text indigo accent-2--text' },
          // { text: 'عکس', value: 'avatar' },
          { text: 'ایمیل', value: 'email',class: 'white--text indigo accent-2--text' },



          { text: 'Actions', value: 'actions', sortable: false,class: 'white--text indigo accent-2--text' },

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
    width: 70vw;
    background-color: ghostwhite;
    float:left;
    margin-left: 5vw;
    margin-top: 1.5vw!important;
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
  .table_box{
    /*box-shadow: 5px 5px 5px #BDBDBD;*/
    width: 94%;
    margin-right: 3%;
    border: solid #7F828B 1px;
    box-shadow: 5px 5px 5px #BDBDBD;
  }


</style>

<template>
  <div class="mt-10 main rounded-lg" style="box-shadow: 5px 5px 5px #BDBDBD; float:left">
    <div class="form_box rounded-lg">

      <search-form></search-form>
    </div>

    <custom-table class="table_box" table_name="branch"  :list="table_data" :table_title="headers" ></custom-table>
    <br>
  </div>
</template>

<script>

  import CustomTable from '@/components/core/dashboard/CustomTable'
  import SearchForm from '@/components/app/Dashboard/Branch/SearchForm'
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
          { text: 'نام شعبه', value: 'name', align: 'start',class: 'white--text indigo accent-2--text'},
          { text: 'شناسه شعبه', value: 'id',class: 'white--text indigo accent-2--text'},
          { text: 'شماره تلفن', value: 'phones',class: 'white--text indigo accent-2--text'},
          { text: 'استان', value: 'county',class: 'white--text indigo accent-2--text' },
          { text: 'شهر', value: 'city',class: 'white--text indigo accent-2--text' },
          { text: 'آدرس', value: 'address',class: 'white--text indigo accent-2--text' },
          { text: 'فکس', value: 'fax',class: 'white--text indigo accent-2--text', },
          { text: 'کدپستی', value: 'postal_code',class: 'white--text indigo accent-2--text' },
          { text: 'وضعیت', value: 'status',class: 'white--text indigo accent-2--text' },


          { text: 'Actions', value: 'actions', sortable: false,class: 'white--text indigo accent-2--text' },

        ],
      }
    },

    created(){
      this.fetchSomething();
    },
    methods: {
      set_eye_icon(st){
        if (st=='active'){
          return 'mdi-eye'
        }
        else{
          return 'mdi-eye-off'
        }
      },
      set_status_boolan(st){
        if (st=='active'){
          return true
        }
        else{
          return false
        }
      },
      async fetchSomething() {
        let self = this;


        this.$axios.get('/branch/search').then(function(response) {

          self.table_data = response.data.data;
          // self.table_data.forEach(item => {item.icon=self.set_eye_icon(item.status) ;item.status_bool=self.set_status_boolan(item.status)});
          // console.log("Alllllll",response.data);
        });

      },
      set_search_result(item){
        this.table_data=item
        // console.log("filtttter",item)
      },
      async change_status(item){
        console.log(item)
        try {
          await this.$axios.put('branch/'+str(item[1]), {status:item[0]}).then(function(response){
            console.log(response.data);
          })
          // this.$router.push('/')
        } catch (e) {
          this.error = e.response.data.message
        }
      }

    },
    mounted(){
      EventBuss.$on('search-result',item =>{this.set_search_result(item)})
      EventBuss.$on('change-status',item =>{this.change_status(item)})
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


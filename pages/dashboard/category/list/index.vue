<template>
  <div class="main rounded-xl">
    <div class="form_box rounded-lg">

      <search-form ></search-form>
    </div>

<!--    <custom-table table_name="branch"  :list="table_data" :table_title="headers" ></custom-table>-->
    <expandable-table table_name="branch"  :list="table_data" :table_title="headers"></expandable-table>

  </div>
</template>

<script>

  import ExpandableTable from '@/components/core/dashboard/ExpandableTable'
  import SearchForm from '@/components/app/Dashboard/Branch/SearchForm'
  import EventBuss from '@/assets/js/eventBus'
  export default {
    name: "index",

    layout: "dashboard_layout",
    components:{
      ExpandableTable:ExpandableTable,
      SearchForm:SearchForm,
    },

    data(){
      return{
        table_data: [],
        headers: [
          { text: 'نام دسته بندی', value: 'name', align: 'start'},
          { text: 'دسته بندی مادر', value: 'parent'},

          { text: 'Actions', value: 'actions', sortable: false },

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


        this.$axios.post('/category/search/').then(function(response) {

          // self.table_data=response.data.data
          response.data.data.forEach(item => {
            if(item.parent != null){
              self.table_data.push({name:item.name, parent:item.parent.name})
            }
            else{
              self.table_data.push({name:item.name, parent:'ندارد'})
            }
          });
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


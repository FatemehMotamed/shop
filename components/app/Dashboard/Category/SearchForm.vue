<template>

    <form>
    <v-container>
      <h1 class="pt-5 form_head" >لیست دسته بندی ها</h1>
      <v-row>
        <v-col cols="12" md="6" sm="6" lg="6" xs="6">
          <v-text-field color="#3f6ad8" outlined dense label="نام دسته بندی" v-model="form_data.name"></v-text-field>
        </v-col>
        <v-col cols="12" md="6" lg="6" sm="6">
          <v-btn class="btn_form"  @click="searchCategory">جستجوی کاربر</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </form>


</template>

<script>
    import CustomButton from '@/components/core/dashboard/CustomButton'
    import CustomTextbox from '@/components/core/dashboard/CustomTextbox'
    import CustomSelect from '@/components/core/dashboard/CustomSelect'
    import SelectboxBranch from '@/components/app/Dashboard/Branch/SelectboxBranch'
    import SelectboxRole from '@/components/app/Dashboard/Users/SelectboxRole'
    import EventBuss from '@/assets/js/eventBus'
    export default {
        name: "SearchForm",
        components:{
          CustomButton:CustomButton,
          CustomTextbox:CustomTextbox,
          CustomSelect:CustomSelect,
          SelectboxBranch:SelectboxBranch,
          SelectboxRole:SelectboxRole,
        },
        data(){
            return{
              result_data:[],
              form_data:{
                name:'',
              }
            }
           },
        methods:{
          async searchCategory(){
            let self=this;
            this.$axios.post('/category/search', self.form_data).then(function(response){
            self.result_data=response.data
            EventBuss.$emit("search-result",self.result_data.data)
            })

          },


        },

        mounted() {
        },
    }

</script>

<style scoped>
  .form_head{
    color:#3f6ad8;
    text-align: center;
    margin-bottom: 1vw;
  }
  .btn_form{
    background-color: #2955c8!important;
    border-color: #2651be!important;
    color: white;
    width: 10vw;
    font-size: 1vw;

  }


</style>

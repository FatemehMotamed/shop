<template>

    <form @submit.prevent="searchCategory">
    <v-container>
<!--      {{form_data}}-->
      <v-row dir="rtl">
        <v-col cols="12" md="6" sm="6" lg="6" xs="6">
            <custom-textbox txt="نام دسته بندی" v-model="form_data.name"></custom-textbox>
        </v-col>
        <v-col cols="12" md="6" lg="6" sm="6">
          <custom-button class="mt-6 float-right" txt="جستجو" bgcolor="black" fontcolor="white" fontsize="1.3" icon="mdi-magnify" iconcolor="white" width="10vw" height="3vw"></custom-button>
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



</style>

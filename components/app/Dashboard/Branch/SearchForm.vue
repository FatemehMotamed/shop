<template>

    <form @submit.prevent="searchBranch">
    <v-container>
<!--      {{form_data}}-->
      <v-row>
        <v-col cols="12" md="4" sm="4" lg="4" xs="3">
            <custom-textbox txt="وضعیت" v-model="form_data.status"></custom-textbox>
        </v-col>
        <v-col cols="12" md="4" sm="4" lg="4" xs="3">
            <custom-textbox txt="نام شعبه" v-model="form_data.name"></custom-textbox>
        </v-col>
        <v-col cols="12" md="4" sm="4" lg="4" xs="3">
            <custom-textbox txt="شناسه شعبه" v-model="form_data.id"></custom-textbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12" sm="12" lg="12" xs="12">
          <custom-select></custom-select>
        </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" md="2" lg="2" sm="2" offset-lg="5">
            <custom-button txt="جستجو" bgcolor="black" fontcolor="white" fontsize="1.3" icon="mdi-magnify" iconcolor="white" width="10vw" height="3vw"></custom-button>
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
                id:'',
                name:'',
                phones:'',
                county:'',
                city:'',
                address:'',
                postal_code:'',
                fax:'',
                status:'',
              }
            }
           },
        methods:{
          async searchBranch(){
            let self=this;
            this.$axios.get('/branch/search/',{
              params:{
                id:self.form_data.id,
                name:self.form_data.name,
                status:self.form_data.status,
                county:self.form_data.county,
                city:self.form_data.city,

              }
            }).then(function(response){
            self.result_data=response.data
            EventBuss.$emit("search-result",self.result_data.data)
            })

          },

          set_state_city(item){
            this.form_data.county=item[0]
            this.form_data.city=item[1]
          },
          set_branch(item){
            console.log(item)
            this.form_data.branch_id=item
          },
          set_role(item){
            this.form_data.role_id=item
            console.log(item)
          },

        },

        mounted(item) {
            EventBuss.$on('set-city',item =>{this.set_state_city(item)})
            EventBuss.$on('set-branch',item =>{this.set_branch(item)})
            EventBuss.$on('set-role',item =>{this.set_role(item)})
        },
    }

</script>

<style scoped>



</style>

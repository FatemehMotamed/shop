<template>

    <form >
    <v-container>
<!--      {{form_data}}-->
      <h1 class="pt-5 form_head" >لیست شعب</h1>
      <v-row>
        <v-col  cols="12" md="4" sm="4" lg="4" xs="3">
          <v-text-field color="#3f6ad8" outlined dense label="وضعیت" v-model="form_data.status"></v-text-field>
        </v-col>
        <v-col cols="12" md="4" sm="4" lg="4" xs="3">
          <v-text-field color="#3f6ad8" outlined dense label="نام شعبه" v-model="form_data.name"></v-text-field>
        </v-col>
        <v-col cols="12" md="4" sm="4" lg="4" xs="3">
          <v-text-field color="#3f6ad8" outlined dense label="شناسه شعبه" v-model="form_data.id"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12" sm="12" lg="12" xs="12">
          <custom-select></custom-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12" lg="12" xl="12" sm="12" xs="12">
            <v-btn class="btn_form" style="margin-right: 20vw" @click="searchBranch">جستجوی شعبه</v-btn>
          </v-col>
        </v-row>
    </v-container>
  </form>


</template>

<script>
    import CustomButton from '@/components/core/dashboard/CustomButton'
    import CustomSelect from '@/components/core/dashboard/CustomSelect'
    import SelectboxBranch from '@/components/app/Dashboard/Branch/SelectboxBranch'
    import SelectboxRole from '@/components/app/Dashboard/Users/SelectboxRole'
    import EventBuss from '@/assets/js/eventBus'
    export default {
        name: "SearchForm",
        components:{
          CustomButton:CustomButton,
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
            this.$axios.get('/branch/search',{
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

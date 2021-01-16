<template>

    <form @submit.prevent="searchUser">
      <h1 class="pt-5 form_head" >لیست کاربران</h1>
    <v-container>
<!--      {{form_data}}-->
      <v-row>
        <v-col cols="12" md="3" sm="3" lg="3" xs="3">
          <v-text-field color="#3f6ad8" outlined dense label="نام خانوادگی" v-model="form_data.l_name"></v-text-field>
        </v-col>
        <v-col cols="12" md="3" sm="3" lg="3" xs="3">
          <v-text-field color="#3f6ad8" outlined dense label="شماره ملی" v-model="form_data.national_code"></v-text-field>
        </v-col>
        <v-col cols="12" md="3" sm="3" lg="3" xs="3">
          <v-text-field color="#3f6ad8" outlined dense label="شماره موبایل" v-model="form_data.mobile"></v-text-field>
        </v-col>
        <v-col cols="12" md="3" sm="3" lg="3" xs="3">
          <v-text-field color="#3f6ad8" outlined dense label="وضعیت" v-model="form_data.status"></v-text-field>
        </v-col>



      </v-row>
      <v-row>
        <v-col cols="12" md="6" sm="6" lg="6" xs="6">
          <custom-select></custom-select>
        </v-col>
        <v-col cols="12" md="3" sm="3" lg="3" xs="3">
          <selectbox-role class="mt-3"></selectbox-role>
        </v-col>
        <v-col cols="12" md="3" sm="3" lg="3" xs="3">
          <selectbox-branch class="mt-3"></selectbox-branch>
        </v-col>

      </v-row>
      <v-row>
        <v-btn class="btn_form mt-2" style="margin-right: 23vw" @click="searchUser">جستجوی کاربر</v-btn>
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
                f_name:'',
                l_name:'',
                username:'',
                password:'',
                email:'',
                city:'',
                county:'',
                address:'',
                postal_code:'',
                national_code:'',
                mobile:'',
                branch_id: '',
                role_id:'',
                status:'',
              }
            }
           },
        methods:{
          async searchUser(){
            let self=this;
            this.$axios.post('/user/userSearch',self.form_data).then(function(response){
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

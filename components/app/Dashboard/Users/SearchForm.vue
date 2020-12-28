<template>

    <form @submit.prevent="searchUser">
    <v-container>
      <v-row>
        <v-col cols="12" md="3" sm="3" lg="3" xs="3">
            <custom-textbox txt="وضعیت" v-model="form_data.l_name"></custom-textbox>
        </v-col>
        <v-col cols="12" md="3" sm="3" lg="3" xs="3">
            <custom-textbox txt="نام خانوادگی" v-model="form_data.l_name"></custom-textbox>
        </v-col>
        <v-col cols="12" md="3" sm="3" lg="3" xs="3">
            <custom-textbox txt="شماره موبایل" v-model="form_data.l_name"></custom-textbox>
        </v-col>
        <v-col cols="12" md="3" sm="3" lg="3" xs="3">
            <custom-textbox txt="شماره ملی" v-model="form_data.l_name"></custom-textbox>
        </v-col>
      </v-row>
      <v-row>

      </v-row>
    </v-container>
  </form>


</template>

<script>
    import CustomButton from '@/components/core/dashboard/CustomButton'
    import CustomTextbox from '@/components/core/dashboard/CustomTextbox'
    import CustomSelect from '@/components/core/dashboard/CustomSelect'
    import EventBuss from '@/assets/js/eventBus'
    export default {
        name: "SearchForm",
        components:{
          CustomButton:CustomButton,
          CustomTextbox:CustomTextbox,
          CustomSelect:CustomSelect
        },
        data(){
            return{
              role:[],
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
              }
            }
           },
    }

</script>

<style scoped>



</style>

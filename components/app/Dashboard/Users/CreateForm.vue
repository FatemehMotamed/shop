<template>
  <div class="main rounded-xl">
    <v-container >
      <form @submit.prevent="registerUser">
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="نام خانوادگی" v-model="form_data.lname"></custom-textbox>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="نام" v-model="form_data.fname"></custom-textbox>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="رمز عبور" v-model="form_data.password"></custom-textbox>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="نام کاربری" v-model="form_data.username"></custom-textbox>
          </v-col>
        </v-row>
        <custom-select></custom-select>
        <v-row>
          <v-col cols="12" md="12" lg="12" sm="12">
            <custom-textbox txt="آدرس" textarea=true v-model="form_data.address"></custom-textbox>
          </v-col>

        </v-row>
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="کدملی" v-model="form_data.national_code"></custom-textbox>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="کد پستی" v-model="form_data.postal_code"></custom-textbox>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="شناسه شعبه" v-model="form_data.id_branch"></custom-textbox>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="شماره موبایل" v-model="form_data.phone"></custom-textbox>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" sm="6" lg="6"></v-col>
          <v-col cols="12" md="6" sm="6" lg="6">
            <v-select
              v-on:change="fill_role($event)"
              color="#0ad3f7"
              align-center
              :items="role"
              menu-props="auto"
              label="نقش کاربر"
              hide-details
              prepend-icon="mdi-account"
              single-line
            ></v-select>
          </v-col>
        </v-row>


        <v-row>
          <v-col cols="12" md="2" lg="2" sm="2" offset-lg="5">
            <custom-button txt="ثبت کاربر" bgcolor="#0ad3f7" fontcolor="black" fontsize="1.3" icon="mdi-plus" iconcolor="black" width="10vw" height="3vw"></custom-button>
          </v-col>
        </v-row>


      </form>
    </v-container>

  </div>

</template>

<script>
import CustomButton from '@/components/core/dashboard/CustomButton'
import CustomTextbox from '@/components/core/dashboard/CustomTextbox'
import CustomSelect from '@/components/core/dashboard/CustomSelect'
import EventBuss from '@/assets/js/eventBus'
export default {
  name: "CreateForm",
  components:{
    CustomButton:CustomButton,
    CustomTextbox:CustomTextbox,
    CustomSelect:CustomSelect
  },
  data(){
    return{
      role:['ادمین','کانتر فروش','حسابدار'],
      form_data:{
        fname:'',
        lname:'',
        username:'',
        password:'',
        city:'',
        state:'',
        address:'',
        postal_code:'',
        national_code:'',
        phone:'',
        id_branch:'',
        role_user:'',
      }
    }
  },

  methods:{
    async registerUser(){
      console.log(this.form_data)
      // console.log("dsda")
    },
    set_state_city(item){
      // console.log('test',item)
      this.form_data.state=item[0]
      this.form_data.city=item[1]
    },
    fill_role(event){
      this.form_data.role_user=event
    }

  },
  mounted(item) {
    EventBuss.$on('set-city',item =>{this.set_state_city(item)})
  }
}
</script>

<style scoped>
.main{
  width: 60vw;
  background-color: ghostwhite;
  margin-right: auto;
  margin-left: auto;
}
*{
  font-family: 'Markazi Text', serif !important;
}
.v-select{
  color: #0ad3f7!important;
}

</style>

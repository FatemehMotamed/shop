<template>
  <div class="main rounded-xl">
<!--    {{form_data}}-->
    <v-container >
      <form @submit.prevent="updateUser">
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="نام خانوادگی" v-model="form_data[0].l_name" v-if="form_data[0]" :data_txt="form_data[0].l_name"></custom-textbox>
<!--            <input placeholder="نام خانوادگی" v-model="form_data.l_name">-->
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="نام" v-model="form_data[0].f_name" v-if="form_data[0]" :data_txt="form_data[0].f_name"></custom-textbox>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
<!--            <custom-textbox txt="رمز عبور" v-model="form_data[0].password" v-if="form_data[0]" :data_txt="form_data[0].password"></custom-textbox>-->
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="نام کاربری" v-model="form_data[0].username" v-if="form_data[0]" :data_txt="form_data[0].username" ></custom-textbox>
          </v-col>
        </v-row>
        <custom-select></custom-select>
        <v-row>
          <v-col cols="12" md="12" lg="12" sm="12">
            <custom-textbox txt="آدرس" textarea=true v-model="form_data[0].address" v-if="form_data[0]" :data_txt="form_data[0].address"></custom-textbox>
          </v-col>

        </v-row>
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="کدملی" v-model="form_data[0].national_code" v-if="form_data[0]" :data_txt="form_data[0].national_code"></custom-textbox>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="کد پستی" v-model="form_data[0].postal_code" v-if="form_data[0]" :data_txt="form_data[0].postal_code" ></custom-textbox>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="شناسه شعبه" v-model="form_data[0].branch_id" v-if="form_data[0]" :data_txt="form_data[0].branch_id"></custom-textbox>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="شماره موبایل" v-model="form_data[0].mobile" v-if="form_data[0]" :data_txt="form_data[0].mobile"></custom-textbox>
          </v-col>
        </v-row>
        <v-row>

          <v-col cols="12" md="6" sm="6" lg="6">
            <v-select
              v-on:change="fill_role($event)"
              color="#0ad3f7"
              align-center
              :items="role"
               item-value="id"
              item-text="name"
              menu-props="auto"
              label="نقش کاربر"
              hide-details
              prepend-icon="mdi-account"
              single-line
            ></v-select>
          </v-col>
          <v-col cols="12" md="6" sm="6" lg="6">
            <custom-textbox txt="ایمیل" v-model="form_data[0].email" v-if="form_data[0]" :data_txt="form_data[0].email"></custom-textbox>
          </v-col>
        </v-row>


        <v-row>
          <v-col cols="12" md="2" lg="2" sm="2" offset-lg="5">
            <custom-button txt="ویرایش کاربر" bgcolor="green" fontcolor="black" fontsize="1.3" icon="mdi-pencil" iconcolor="black" width="10vw" height="3vw"></custom-button>
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
  props:['id_user'],
  data(){
    return{
      temp_data:[],
      role:[],
      form_data:{
        id:'',
        f_name:'',
        l_name:'',
        username:'',
        // password:'',
        email:'',
        city:'',
        county:'',
        address:'',
        postal_code:'',
        national_code:'',
        mobile:'',
        branch_id: '',
        role_id:'',
        status:'active',
      }
    }
  },

  methods:{
     async updateUser() {
       // console.log(this.form_data[0])
       try {
        await this.$axios.post('user/userModify/', this.form_data[0])
      } catch (e) {
        this.error = e.response.data.message
      }


    },
    set_state_city(item){
      // console.log('test',item)
      this.form_data[0].county=item[0]
      this.form_data[0].city=item[1]
    },
    fill_role(event){
      this.form_data.role_id=event
    },
    get_contry_city(){
       let self=this;
       let r=[];
       this.$axios.get('/roles').then(function(response){
         // console.log(response.data.data[0].name);
         response.data.forEach(item => r.push({id:item.id,name:item.name}));
        })
        this.role=r;

    },
    set_form_data(){
        this.form_data=this.temp_data
      },
    get_data(){
      let self=this;
      let d=[];
      this.$axios.post('/user/userSearch/',{id:this.id_user}).then(function(response){
      // console.log(response.data.data);
      response.data.data.forEach(item => d.push({id:item.id,f_name:item.f_name,l_name:item.l_name,username:item.username,email:item.email,county:item.county,city:item.city,address: item.address,postal_code:item.postal_code,national_code:item.national_code,mobile:item.mobile,branch_id: item.branch_id,role_id:item.role_id,status: item.status}));
      })
      this.temp_data=d
      this.set_form_data();
    }

  },
  mounted(item) {
    EventBuss.$on('set-city',item =>{this.set_state_city(item)})
  },
  created() {
    this.get_contry_city()
    this.get_data()
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

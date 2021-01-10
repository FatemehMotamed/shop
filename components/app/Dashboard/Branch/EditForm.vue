<template>
  <div class="main rounded-xl">
<!--{{form_data}}-->
    <v-container >
<!--      <v-alert :value="alert_success" color="green" type="success" dark border="top" transition="scale-transition" dir="rtl" align="center">-->
<!--        شعبه با موفقیت ثبت شد-->
<!--      </v-alert>-->
<!--      <v-alert :value="alert_error" color="red" type="error" dark border="top" transition="scale-transition" dir="rtl" align="center">-->
<!--        لطفا فیلدها را به درستی پر کنید-->
<!--      </v-alert>-->

      <form @submit.prevent="updateBranch">
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="نام شعبه" v-model="name" :data_txt="name" ></custom-textbox>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="شماره تلفن"   v-model="phones" :data_txt="phones"></custom-textbox>
          </v-col>
        </v-row>
        <custom-select></custom-select>
        <v-row>
          <v-col cols="12" md="12" lg="12" sm="12">
            <custom-textbox txt="آدرس" textarea=true v-model="address"  :data_txt="address"></custom-textbox>
          </v-col>

        </v-row>
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="شماره فکس"  v-model="fax" :data_txt="fax"></custom-textbox>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="کد پستی"   v-model="postal_code" :data_txt="postal_code"></custom-textbox>
          </v-col>
        </v-row>


        <v-row>
          <v-col cols="12" md="2" lg="2" sm="2" offset-lg="5">
            <custom-button txt="ویرایش شعبه" bgcolor="green" fontcolor="black" fontsize="1.3" icon="mdi-pencil" iconcolor="black" width="10vw" height="3vw"></custom-button>
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
    name: "EditForm",
    props:['id_branch'],
    components:{
      CustomButton:CustomButton,
      CustomTextbox:CustomTextbox,
      CustomSelect:CustomSelect
    },
    data(){
      return{
        temp_data:[],
        name:'',
        phones:'',
        county:'',
        city:'',
        address:'',
        postal_code:'',
        fax:'',

      }
    },

    methods:{
      updateBranch() {
      let self = this;
      this.$axios.put('branch/'+String(this.id_branch), self.form_data[0]).then(function(response){
          console.log(response);
        })
        console.log(this.form_data[0])
    },
      set_state_city(item){
        // console.log('test',item)
        this.form_data[0].county=item[0]
        this.form_data[1].city=item[1]
      },

    },
    created() {
      let self=this;
      this.$axios.get('/branch/search?id='+this.id_branch).then(function(response){
      // console.log(response.data.data[0]);
      response.data.data.forEach(item => (
        self.name=item.name,
        self.phones=item.phones,
        self.county=item.county,
        self.city=item.city,
        self.address=item.address,
        self.postal_code=item.postal_code,
        self.fax=item.fax));
      })
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

</style>

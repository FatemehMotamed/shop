<template>
  <div class="main rounded-lg">
    <v-container >
      <form @submit.prevent="registerBranch" v-model="valid" >
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
            <v-text-field  dir="rtl"  label="" placeholder="نام شعبه" v-model="form_data.name" :rules="txtRules" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <v-text-field  dir="rtl"  label="" placeholder="شماره تلفن" v-model="form_data.phones"  :rules="numRules"  required></v-text-field>
          </v-col>
        </v-row>
        <custom-select></custom-select>
        <v-row>
          <v-col cols="12" md="12" lg="12" sm="12">
            <v-textarea rows="3" row-height="25" dir="rtl" label="" placeholder="آدرس" v-model="form_data.address"  :rules="txtRules"  required></v-textarea>
          </v-col>

        </v-row>
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
            <v-text-field  dir="rtl"  label="" placeholder="شماره فکس" v-model="form_data.fax"  :rules="numRules"  required></v-text-field>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <v-text-field  dir="rtl"  label="" placeholder="کد پستی" v-model="form_data.postal_code"  :rules="postalRules"  required></v-text-field>
          </v-col>
        </v-row>


        <v-row>
          <v-col cols="12" md="2" lg="2" sm="2" offset-lg="5">
            <custom-button txt="ثبت شعبه" bgcolor="#0ad3f7" fontcolor="black" fontsize="1.3" icon="mdi-source-fork" iconcolor="black" width="10vw" height="3vw"></custom-button>
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
        valid:false,
        form_data:{
          name:'',
          phones:'',
          county:'',
          city:'',
          address:'',
          postal_code:'',
          fax:'',
        },
        txtRules: [
          v => !!v || 'این فیلد الزامی است',
          v => v.length >=6 || 'لطفا بیشتر از 6 کاراکتر وارد کنید',
        ],
        numRules: [
          v => !!v || 'این فیلد الزامی است',
          v => v.length >=11 || 'لطفا 11 رقم وارد کنید',
          v => v.length <=11 || 'لطفا 11 رقم وارد کنید',
        ],
        postalRules: [
          v => !!v || 'این فیلد الزامی است',
          v => v.length >=10 || 'لطفا 10 رقم وارد کنید',
          v => v.length <=10 || 'لطفا 10 رقم وارد کنید',
        ],
      }
    },

    methods:{
      registerBranch() {
        let self = this;
        this.$axios.post('/branch', self.form_data).then((res)=>{
          console.log(res);
        })
      },
      set_state_city(item){
        // console.log('test',item)
        this.form_data.county=item[0]
        this.form_data.city=item[1]
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

.v-text-field ::before {
  border-color: black !important;
  color: #7F828B !important;
}

.v-text-field ::after {
  border-color: #0ad3f7 !important;
  color: black !important;
}

</style>

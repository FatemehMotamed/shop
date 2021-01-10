<template>
  <div class="main rounded-lg">
    <v-container >
      <v-alert :value="alert_success" color="green" type="success" dark border="top" transition="scale-transition" dir="rtl" align="center">
        شعبه با موفقیت ثبت شد
      </v-alert>
      <v-alert :value="alert_error" color="red" type="error" dark border="top" transition="scale-transition" dir="rtl" align="center">
        لطفا فیلدها را به درستی پر کنید
      </v-alert>
      <form>
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
            <v-text-field  dir="rtl"  label="" placeholder="نام شعبه" v-model="name"  :error-messages="nameErrors" @input="$v.name.$touch()" @blur="$v.name.$touch()"  required></v-text-field>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <v-text-field  dir="rtl"  label="" placeholder="شماره تلفن" v-model="phones"  :error-messages="phonesErrors" @input="$v.phones.$touch()" @blur="$v.phones.$touch()" ></v-text-field>
          </v-col>
        </v-row>
        <custom-select></custom-select>
        <div class="validation_message" :value="city_validation">{{city_validation}}</div>
        <v-row>
          <v-col cols="12" md="12" lg="12" sm="12">
            <v-textarea rows="3" row-height="25" dir="rtl" label="" placeholder="آدرس" v-model="address"    :error-messages="addressErrors" @input="$v.address.$touch()" @blur="$v.address.$touch()"  ></v-textarea>
          </v-col>

        </v-row>
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
            <v-text-field  dir="rtl"  label="" placeholder="شماره فکس" v-model="fax"  :error-messages="faxErrors" @input="$v.fax.$touch()" @blur="$v.fax.$touch()"></v-text-field>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <v-text-field  dir="rtl"  label="" placeholder="کد پستی" v-model="postal_code"    :error-messages="postalErrors" @input="$v.postal_code.$touch()" @blur="$v.postal_code.$touch()"></v-text-field>
          </v-col>
        </v-row>


        <v-row>
          <v-col cols="12" md="4" lg="4" sm="4" xs="4"></v-col>
          <v-col cols="12" md="6" lg="6" sm="6" xs="6">
            <v-btn class="ml-6">
              <nuxt-link style="text-decoration: none;color: black" to="/dashboard">بازگشت</nuxt-link>
            </v-btn>
            <v-btn class="ml-2" @click="submit">ثبت شعبه</v-btn>
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
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email, minLength, numeric } from 'vuelidate/lib/validators'
  export default {
    name: "CreateForm",
    components:{
      CustomButton:CustomButton,
      CustomTextbox:CustomTextbox,
      CustomSelect:CustomSelect
    },
    mixins: [validationMixin],

    validations: {
      name: { required, minLength: minLength(6) },
      phones: { minLength: minLength(11), maxLength: maxLength(11),numeric },
      address: { minLength: minLength(6) },
      postal_code: { minLength: minLength(10), maxLength: maxLength(10),numeric },
      fax: { minLength: minLength(11), maxLength: maxLength(11),numeric },

    },
    data: () => ({
        alert_success:false,
        alert_error:false,
        city_validation:'',
        name:'',
        phones:'',
        county:'',
        city:'',
        address:'',
        postal_code:'',
        fax:'',
  }),

    methods:{
      set_state_city(item){
        // console.log('test',item)
        this.county=item[0]
        this.city=item[1]
        this.city_validation=""
      },
      submit () {
        this.$v.$touch()
        if (this.county=='' || this.city==''){
          this.city_validation="لطفا شهر و استان را انتخاب کنید"
        }

        if (this.$v.$pendding || this.$v.$error || this.county=='' || this.city==''){
          this.alert_error=!this.alert_error;
          return
        }
        this.alert_error=!this.alert_error
        this.alert_success=!this.alert_success
        this.$v.$reset();
        let form_data={
          name:this.name,
          phones:this.phones,
          county:this.county,
          city:this.city,
          address:this.address,
          postal_code:this.postal_code,
          fax:this.fax,
        }
        let self = this;
        this.$axios.post('/branch', form_data).then((res)=>{
          console.log(res);
        })
      },

    },
    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.minLength && errors.push('نام شعبه باید حداقل 6 کاراکتر باشد')
        !this.$v.name.required && errors.push('این فیلد الزامی است')
        return errors
      },
      phonesErrors () {
        const errors = []
        if (!this.$v.phones.$dirty) return errors
        !this.$v.phones.minLength && errors.push('لطفا 11 رقم وارد کنید')
        !this.$v.phones.maxLength && errors.push('لطفا 11 رقم وارد کنید')
        !this.$v.phones.numeric && errors.push('لطفا فقط عدد وارد کنید')
        return errors
      },
      addressErrors () {
        const errors = []
        if (!this.$v.address.$dirty) return errors
        !this.$v.address.minLength && errors.push('آدرس باید حداقل 6 کاراکتر باشد')
        return errors
      },
      postalErrors () {
        const errors = []
        if (!this.$v.postal_code.$dirty) return errors
        !this.$v.postal_code.minLength && errors.push('لطفا 10 رقم وارد کنید')
        !this.$v.postal_code.maxLength && errors.push('لطفا 10 رقم وارد کنید')
        !this.$v.postal_code.numeric && errors.push('لطفا فقط عدد وارد کنید')
        return errors
      },

      faxErrors () {
        const errors = []
        if (!this.$v.fax.$dirty) return errors
        !this.$v.fax.minLength && errors.push('لطفا 11 رقم وارد کنید')
        !this.$v.fax.maxLength && errors.push('لطفا 11 رقم وارد کنید')
        !this.$v.fax.numeric && errors.push('لطفا فقط عدد وارد کنید')
        return errors
      },

    },
    mounted(item) {
      EventBuss.$on('set-city',item =>{this.set_state_city(item)})
    },


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
  .validation_message{
    color:#ff5252 !important;
    font-size: 12px;
  }

</style>

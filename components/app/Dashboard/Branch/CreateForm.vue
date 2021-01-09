<template>
  <div class="main rounded-lg">
    <v-container >
      <form>
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
            <v-text-field  dir="rtl"  label="" placeholder="نام شعبه" v-model="name"  :error-messages="nameErrors" @input="$v.name.$touch()" @blur="$v.name.$touch()"  required></v-text-field>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <v-text-field  dir="rtl"  label="" placeholder="شماره تلفن" v-model="phones"  :error-messages="phonesErrors" @input="$v.phones.$touch()" @blur="$v.phones.$touch()"   required></v-text-field>
          </v-col>
        </v-row>
        <custom-select></custom-select>
        <div v-bind="city_validation">{{city_validation}}</div>
        <v-row>
          <v-col cols="12" md="12" lg="12" sm="12">
            <v-textarea rows="3" row-height="25" dir="rtl" label="" placeholder="آدرس" v-model="address"    :error-messages="addressErrors" @input="$v.address.$touch()" @blur="$v.address.$touch()"   required></v-textarea>
          </v-col>

        </v-row>
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
            <v-text-field  dir="rtl"  label="" placeholder="شماره فکس" v-model="fax"  :error-messages="faxErrors" @input="$v.fax.$touch()" @blur="$v.fax.$touch()"   required></v-text-field>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <v-text-field  dir="rtl"  label="" placeholder="کد پستی" v-model="postal_code"    :error-messages="postalErrors" @input="$v.postal_code.$touch()" @blur="$v.postal_code.$touch()"   required></v-text-field>
          </v-col>
        </v-row>


        <v-row>
          <v-col cols="12" md="2" lg="2" sm="2" offset-lg="5">
<!--            <custom-button txt="ثبت شعبه" bgcolor="#0ad3f7" fontcolor="black" fontsize="1.3" icon="mdi-source-fork" iconcolor="black" width="10vw" height="3vw"></custom-button>-->
            <v-btn
              class="mr-4"
              @click="submit"
            >
              submit
            </v-btn>
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
  import { required, maxLength, email, minLength } from 'vuelidate/lib/validators'
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
      phones: { required, minLength: minLength(11) },
      address: { required, minLength: minLength(6) },
      postal_code: { required, minLength: minLength(10) },
      fax: { required, minLength: minLength(11) },
      // select: { required },
    },
    data: () => ({
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

        if (this.$v.$pendding || this.$v.$error || this.county=='' || this.city=='') return;
        alert('Data Submit');
        // this.$v.$reset();
        // this.resetData();
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

      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.minLength && errors.push('min 6')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      phonesErrors () {
        const errors = []
        if (!this.$v.phones.$dirty) return errors
        !this.$v.phones.minLength && errors.push('Name must be at most 10 characters long')
        !this.$v.phones.required && errors.push('Name is required.')
        return errors
      },
      addressErrors () {
        const errors = []
        if (!this.$v.address.$dirty) return errors
        !this.$v.address.minLength && errors.push('Name must be at most 10 characters long')
        !this.$v.address.required && errors.push('Name is required.')
        return errors
      },
      postalErrors () {
        const errors = []
        if (!this.$v.postal_code.$dirty) return errors
        !this.$v.postal_code.minLength && errors.push('Name must be at most 10 characters long')
        !this.$v.postal_code.required && errors.push('Name is required.')
        return errors
      },

      faxErrors () {
        const errors = []
        if (!this.$v.fax.$dirty) return errors
        !this.$v.fax.minLength && errors.push('Name must be at most 10 characters long')
        !this.$v.fax.required && errors.push('Name is required.')
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

</style>

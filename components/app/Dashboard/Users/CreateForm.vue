<template>
  <div class="main rounded">
    <h1 class="pt-5 form_head" >ثبت کاربر</h1>
    <v-container >
      <v-alert :value="alert_success" color="green" type="success" dark border="top" transition="scale-transition" dir="rtl" align="center">
        کاربر با موفقیت ثبت شد
      </v-alert>
      <v-alert :value="alert_error" color="red" type="error" dark border="top" transition="scale-transition" dir="rtl" align="center">
        لطفا فیلدها را به درستی پر کنید
      </v-alert>
      <form>
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
            <v-text-field color="#3f6ad8" outlined dense label="نام" v-model="f_name"  :error-messages="fnameErrors" @input="$v.f_name.$touch()" @blur="$v.f_name.$touch()"></v-text-field>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <v-text-field color="#3f6ad8" outlined dense label="نام خانوادگی" v-model="l_name"  :error-messages="lnameErrors" @input="$v.l_name.$touch()" @blur="$v.l_name.$touch()"></v-text-field>
          </v-col>

        </v-row>
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
            <v-text-field color="#3f6ad8" outlined dense label="نام کاربری" v-model="username"  :error-messages="usernameErrors" @input="$v.username.$touch()" @blur="$v.username.$touch()"></v-text-field>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <v-text-field
              color="#3f6ad8" outlined dense
              dir="rtl"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              name="input-10-2"
              label="رمز عبور"
              class="input-group--focused"
              @click:append="show = !show"
              v-model="password"
              :error-messages="passwordErrors" @input="$v.password.$touch()" @blur="$v.password.$touch()"
            ></v-text-field>
          </v-col>
        </v-row>
        <custom-select></custom-select>
        <v-row>
          <v-col cols="12" md="12" lg="12" sm="12">
            <v-textarea color="#3f6ad8" outlined dense label="آدرس" v-model="address"  :error-messages="addressErrors" @input="$v.address.$touch()" @blur="$v.address.$touch()"></v-textarea>
          </v-col>

        </v-row>
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
            <v-text-field color="#3f6ad8" outlined dense label="کد ملی" v-model="national_code"  :error-messages="nationalCodeErrors" @input="$v.national_code.$touch()" @blur="$v.national_code.$touch()"></v-text-field>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <v-text-field color="#3f6ad8" outlined dense label="کد پستی" v-model="postal_code"  :error-messages="postalCodeErrors" @input="$v.postal_code.$touch()" @blur="$v.postal_code.$touch()"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
            <selectbox-branch></selectbox-branch>
            <div class="validation_message" :value="branch_validation">{{branch_validation}}</div>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <v-text-field color="#3f6ad8" outlined dense label="شماره موبایل" v-model="mobile"  :error-messages="mobileErrors" @input="$v.mobile.$touch()" @blur="$v.mobile.$touch()"></v-text-field>
          </v-col>
        </v-row>
        <v-row>

          <v-col cols="12" md="6" sm="6" lg="6">
            <selectbox-role></selectbox-role>
            <div class="validation_message" :value="role_validation">{{role_validation}}</div>
          </v-col>
          <v-col cols="12" md="6" sm="6" lg="6">
            <v-text-field color="#3f6ad8" outlined dense label="ایمیل" v-model="email" :error-messages="emailErrors" @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
          </v-col>
        </v-row>


        <v-row>
          <v-col cols="12" md="12" lg="12" xl="12" sm="12" xs="12">

            <v-btn class="btn_form" style="margin-right: 20vw" @click="submit">ثبت کاربر</v-btn>
            <v-btn class=" mr-lg-3 mr-xl-3 mr-md-3 mr-sm-1 btn_form">
              <nuxt-link style="text-decoration: none;color: white" to="/dashboard">بازگشت</nuxt-link>
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
import SelectboxBranch from '@/components/app/Dashboard/Branch/SelectboxBranch'
import SelectboxRole from '@/components/app/Dashboard/Users/SelectboxRole'
import { validationMixin } from 'vuelidate'
import { required, maxLength, email, minLength, numeric } from 'vuelidate/lib/validators'
export default {
  name: "CreateForm",
  components:{
    CustomButton:CustomButton,
    CustomTextbox:CustomTextbox,
    CustomSelect:CustomSelect,
    SelectboxBranch:SelectboxBranch,
    SelectboxRole:SelectboxRole,
  },
  mixins: [validationMixin],

  validations: {
    f_name: { minLength: minLength(6) },
    l_name: { minLength: minLength(6) },
    username: { required, minLength: minLength(6) },
    password: { required, minLength: minLength(6) },
    email: { email },
    mobile: { required ,minLength: minLength(11), maxLength: maxLength(11),numeric },
    address: { minLength: minLength(6) },
    national_code: { minLength: minLength(10), maxLength: maxLength(10),numeric },
    postal_code: { minLength: minLength(10), maxLength: maxLength(10),numeric },

  },
  data(){
    return{
      role_validation:'',
      branch_validation:'',
      alert_success:false,
      alert_error:false,
      show:false,
      role:[],
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
  },

  methods:{
    set_state_city(item){
      // console.log('test',item)
      this.county=item[0]
      this.city=item[1]
    },
    set_branch(item){
      console.log(item)
      this.branch_id=item
      this.branch_validation=''
    },
    set_role(item){
      this.role_id=item
      this.role_validation=''
      console.log(item)
    },
    submit () {
      this.$v.$touch()
      if (this.role_id==''){
        this.role_validation="لطفا نقش کاربر را انتخاب کنید"
      }
      if (this.branch_id==''){
        this.branch_validation="لطفا شعبه کاربر را انتخاب کنید"
      }

      if (this.$v.$pendding || this.$v.$error || this.role_id=='' || this.branch_id==''){
        this.alert_error=!this.alert_error;
        return
      }
      this.alert_error=!this.alert_error
      this.alert_success=!this.alert_success
      this.$v.$reset();
      let form_data={
        f_name:this.f_name,
        l_name:this.l_name,
        username:this.username,
        password:this.password,
        email:this.email,
        county:this.county,
        city:this.city,
        address:this.address,
        mobile:this.mobile,
        postal_code:this.postal_code,
        national_code:this.national_code,
        role_id:this.role_id,
        branch_id:this.branch_id,
      }
      let self = this;
      this.$axios.post('register', form_data).then(function(response){
        console.log(response);
      })
    },

  },

  computed: {
    fnameErrors () {
      const errors = []
      if (!this.$v.f_name.$dirty) return errors
      !this.$v.f_name.minLength && errors.push('نام باید حداقل 6 کاراکتر باشد')
      return errors
    },
    lnameErrors () {
      const errors = []
      if (!this.$v.l_name.$dirty) return errors
      !this.$v.l_name.minLength && errors.push('نام خانوادگی باید حداقل 6 کاراکتر باشد')
      return errors
    },
    usernameErrors () {
      const errors = []
      if (!this.$v.username.$dirty) return errors
      !this.$v.username.minLength && errors.push('نام کاربری باید حداقل 6 کاراکتر باشد')
      !this.$v.username.required && errors.push('این فیلد الزامی است')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.minLength && errors.push('رمز عبور باید حداقل 6 کاراکتر باشد')
      !this.$v.password.required && errors.push('این فیلد الزامی است')
      return errors
    },
    mobileErrors () {
      const errors = []
      if (!this.$v.mobile.$dirty) return errors
      !this.$v.mobile.minLength && errors.push('لطفا 11 رقم وارد کنید')
      !this.$v.mobile.maxLength && errors.push('لطفا 11 رقم وارد کنید')
      !this.$v.mobile.numeric && errors.push('لطفا فقط عدد وارد کنید')
      !this.$v.mobile.required && errors.push('این فیلد الزامی است')
      return errors
    },
    addressErrors () {
      const errors = []
      if (!this.$v.address.$dirty) return errors
      !this.$v.address.minLength && errors.push('آدرس باید حداقل 6 کاراکتر باشد')
      return errors
    },
    postalCodeErrors () {
      const errors = []
      if (!this.$v.postal_code.$dirty) return errors
      !this.$v.postal_code.minLength && errors.push('لطفا 10 رقم وارد کنید')
      !this.$v.postal_code.maxLength && errors.push('لطفا 10 رقم وارد کنید')
      !this.$v.postal_code.numeric && errors.push('لطفا فقط عدد وارد کنید')
      return errors
    },

    nationalCodeErrors () {
      const errors = []
      if (!this.$v.national_code.$dirty) return errors
      !this.$v.national_code.minLength && errors.push('لطفا 10 رقم وارد کنید')
      !this.$v.national_code.maxLength && errors.push('لطفا 10 رقم وارد کنید')
      !this.$v.national_code.numeric && errors.push('لطفا فقط عدد وارد کنید')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('لطفا یک ایمیل معتبر وارد کنید')
      // !this.$v.email.required && errors.push('E-mail is required')
      return errors
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
  .main{
    width: 60vw;
    background-color: ghostwhite;
    float:left;
    margin-left: 10vw;
    margin-top: 1.5vw!important;
  }
*{
  font-family: 'Markazi Text', serif !important;
}

.validation_message{
  color:#ff5252 !important;
  font-size: 12px;
}
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
  }
</style>

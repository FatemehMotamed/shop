<template>

    <v-container >
      <v-stepper class="main rounded" v-model="e1" >

        <h1 class="pt-5 form_head" >ثبت محصول</h1>
        <v-alert :value="alert_success" color="green" type="success" dark border="top" transition="scale-transition" dir="rtl" align="center">
          شعبه با موفقیت ثبت شد
        </v-alert>
        <v-alert :value="alert_error" color="red" type="error" dark border="top" transition="scale-transition" dir="rtl" align="center">
          لطفا فیلدها را به درستی پر کنید
        </v-alert>

        <v-stepper-header dir="rtl">
          <v-stepper-step @click="e1=1" :complete="e1 > 1" step="1" color="#3f6ad8">
            <label class="mr-2">ثبت محصول</label>
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2" color="#3f6ad8">
            <label class="mr-2">آپلود تصویر</label>
          </v-stepper-step>

          <v-divider></v-divider>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card class="mb-12">
<!--              {{form_data}}-->
              <form>
                <category-select></category-select>
                <v-row>
                  <v-col cols="12" md="6" lg="6" sm="6" xs="6" >
                    <selectbox-branch v-if="show"></selectbox-branch>
                    <div class="validation_message" :value="branch_validation">{{branch_validation}}</div>
                  </v-col>
                  <v-col cols="12" md="6" lg="6" sm="6" xs="6">
                    <v-text-field color="#3f6ad8"  outlined dense label="قیمت" v-if="show" v-model="price" :error-messages="priceErrors" @input="$v.price.$touch()" @blur="$v.price.$touch()"  required></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="6" lg="6" sm="6" xs="6">
                    <v-text-field color="#3f6ad8"  outlined dense label="عنوان محصول" v-if="show" v-model="title" :error-messages="titleErrors" @input="$v.title.$touch()" @blur="$v.title.$touch()"  required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="6" sm="6" xs="6">
                    <v-text-field color="#3f6ad8"  outlined dense label="موجودی" v-if="show" v-model="count" ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="12" lg="12" sm="12" xs="12">
                    <v-textarea  color="#3f6ad8"  outlined dense label="توضیحات" v-if="show" v-model="description" rows="3" row-height="25" :error-messages="descriptionErrors" @input="$v.description.$touch()" @blur="$v.description.$touch()"  required></v-textarea>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col v-for="(item, key) in fields" cols="12" md="6" lg="6" sm="6" xs="6">

                    <v-text-field  color="#3f6ad8"  outlined dense :label="item.label" v-model="fields[key].value" ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" md="12" lg="12" xl="12" sm="12" xs="12">
                    <v-btn class="btn_form float-right" style="margin-right: 20vw"  @click="submit">{{btn_txt}}</v-btn>
                    <div class="float-right" v-if="btn_continue">
                      <v-btn class="btn_form mr-2"  @click.native="e1=2">ادامه</v-btn>
                    </div>
                    <div v-else>
                      <v-btn c disabled class="btn_form float-right mr-2" >ادامه</v-btn>
                    </div>

                  </v-col>
                </v-row>
              </form>
            </v-card>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card class="pa-md-4 mx-lg-auto" >
              <upload-image :product_id="product_registered_id" ></upload-image>
            </v-card>

            <v-row>
              <v-col cols="12" md="12" lg="12" xl="12" sm="12" xs="12">

                <v-btn v-on:click.native="e1=1" style="margin-right: 40%!important;" class=" mr-lg-3 mr-xl-3 mr-md-3 mr-sm-1 btn_form">بازگشت</v-btn></v-col>

            </v-row>


          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>

    </v-container>



</template>

<script>
import CustomButton from '@/components/core/dashboard/CustomButton'
import CustomTextbox from '@/components/core/dashboard/CustomTextbox'
import CategorySelect from '@/components/app/Dashboard/Products/CategorySelect'
import UploadImage from '@/components/app/Dashboard/Products/UploadImage'
import SelectboxBranch from '@/components/app/Dashboard/Branch/SelectboxBranch'
import EventBuss from '@/assets/js/eventBus'
import { validationMixin } from 'vuelidate'
import { required, maxLength, email, minLength, numeric } from 'vuelidate/lib/validators'
export default {
  name: "CreateForm",
  components: {
    CustomButton: CustomButton,
    CustomTextbox: CustomTextbox,
    CategorySelect: CategorySelect,
    SelectboxBranch: SelectboxBranch,
    UploadImage:UploadImage
  },
  mixins: [validationMixin],

  validations: {
    title: {required, minLength: minLength(6)},
    price: {required, numeric},
    description: {minLength: minLength(6)},
  },

    data() {

      return {
        branch_validation:'',
        alert_success:false,
        alert_error:false,
        btn_txt: 'ثبت محصول',
        btn_color: '#0ad3f7',
        btn_continue: false,
        e1: 1,
        sub_category: '',
        main_category: '',
        title: '',
        price: '',
        description: '',
        category_id: '',
        branch_id: '',
        count:0,
        fields: [],
        properties : [],
        show: false,
        dic: {},
        product_registered_id:''

      }
    },

    methods: {

      submit() {
        this.$v.$touch()
        if (this.branch_id == '') {
          this.branch_validation = "لطفا شعبه را انتخاب کنید"
        }

        if (this.$v.$pendding || this.$v.$error || this.branch_id == '') {
          this.alert_error = !this.alert_error;
          return
        }
        this.alert_error = !this.alert_error
        this.alert_success = !this.alert_success
        this.$v.$reset();

        let product = [{
          title: this.title,
          price: this.price,
          description: this.description,
          category_id: this.category_id,
          branch_id: this.branch_id,
          count:this.count
        }]

        let form_data = {
          product: [],
          properties: []
        }

        this.fill_properties()
        form_data.product = product
        form_data.properties = this.properties

        this.$axios.post('/product', form_data).then(function (response) {
          // console.log(response.data.product.id)

        })
        // console.log(this.form_data)
        this.btn_txt = 'ویرایش محصول'
        this.btn_color = "#ff5733"
        this.btn_continue = true
      },

      set_categorys(item) {
        // console.log('test',item)
        this.main_category = item[0]
        this.sub_category = item[1]
        this.category_id = item[1]
        this.get_attributes();
      },
      get_attributes() {
        let self = this
        this.$axios.get('/category/' + this.sub_category + '/getProperties').then(function (response) {
          // console.log(response.data.data)
          response.data.data.forEach(item => self.fields.push({ id:item.id, value:item.value, label:item.value }));

        })
        this.show = true
      },
      fill_properties() {
        let item;
        let temp = []
        let x = 0
        for (item of this.fields) {
          temp.push({property_id: item.id, value: item.value})
          this.dic[x] = temp
          temp = []
          x += 1
        }
        this.properties.push(this.dic)
        // console.log("tttttt",this.dic[0][0].value)
      },
      set_branch(item) {
        // console.log(item)
        this.branch_id = item
        this.branch_validation=""
      },

    },
    computed:{
      titleErrors () {
        const errors = []
        if (!this.$v.title.$dirty) return errors
        !this.$v.title.minLength && errors.push('نام شعبه باید حداقل 6 کاراکتر باشد')
        !this.$v.title.required && errors.push('این فیلد الزامی است')
        return errors
      },
      priceErrors () {
        const errors = []
        if (!this.$v.price.$dirty) return errors
        !this.$v.price.numeric && errors.push('لطفا فقط عدد وارد کنید')
        !this.$v.price.required && errors.push('این فیلد الزامی است')
        return errors
      },
      descriptionErrors () {
        const errors = []
        if (!this.$v.description.$dirty) return errors
        !this.$v.description.minLength && errors.push('آدرس باید حداقل 6 کاراکتر باشد')
        return errors
      },

    },
    mounted() {
      EventBuss.$on('set-category', item => {
        this.set_categorys(item)
      })
      EventBuss.$on('set-branch', item => {
        this.set_branch(item)
      })
    }

}
</script>

<style scoped>
  .main{
    width: 60vw;
    background-color: ghostwhite;
    float:left;
    margin-left: 5vw;
    margin-top: 1.5vw!important;
  }
*{
  font-family: 'Markazi Text', serif !important;
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
  .validation_message{
    color:#ff5252 !important;
    font-size: 12px;
  }


</style>

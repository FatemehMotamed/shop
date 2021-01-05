<template>

    <v-container >
      <v-stepper class="main rounded-xl" v-model="e1" >
        <v-stepper-header dir="rtl">
          <v-stepper-step @click="e1=1" :complete="e1 > 1" step="1">
            <label class="mr-2">ثبت محصول</label>
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2">
            <label class="mr-2">آپلود تصویر</label>
          </v-stepper-step>

          <v-divider></v-divider>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card class="mb-12">
<!--              {{form_data}}-->
              <form @submit.prevent="registerProduct">
                <category-select></category-select>
                <v-row>
                  <v-col cols="12" md="4" lg="4" sm="4" xs="4" >
                    <selectbox-branch v-if="show"></selectbox-branch>
                  </v-col>
                  <v-col cols="12" md="4" lg="4" sm="4" xs="4">
                    <v-text-field v-if="show" placeholder="قیمت" v-model="product[0].price"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" lg="4" sm="4" xs="4">
                    <v-text-field v-if="show" placeholder="عنوان محصول" v-model="product[0].title"></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="12" lg="12" sm="12" xs="12">
                    <v-textarea v-if="show" placeholder="توضیحات" v-model="product[0].description" rows="3" row-height="25" dir="rtl"></v-textarea>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col v-for="(item, key) in fields" cols="12" md="6" lg="6" sm="6" xs="6">
<!--                    <custom-textbox :txt="item" v-model="form_data[item]" ></custom-textbox>-->
                    <custom-textbox :txt="item.value" v-model="fields[key].value" ></custom-textbox>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" md="7" lg="7" sm="7" offset-lg="4">
                    <div v-if="btn_continue">
                      <custom-button @click.native="e1=2" txt="ادامه" bgcolor="green" fontcolor="black" fontsize="1.3" icon="mdi-arrow-left-bold-circle-outline" iconcolor="black" width="10vw" height="3vw"></custom-button>
                    </div>
                    <div class="float-left ml-2" v-else>
                        <v-btn disabled color="#FA950B" width="10vw" height="3vw" class="custom_btn">
                        ادامه
                        <v-icon>mdi-arrow-left-bold-circle-outline</v-icon>
                      </v-btn>
                    </div>
                    <custom-button :txt="btn_txt" :bgcolor="btn_color" fontcolor="black" fontsize="1.3" icon="mdi-shopping" iconcolor="black" width="10vw" height="3vw"></custom-button>
                  </v-col>
                </v-row>
              </form>
            </v-card>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
            <v-row>
              <v-col cols="12" md="6" lg="6" sm="6" xs="6" >
                <custom-button class="float-right" v-on:click.native="e1=1" txt="بازگشت" bgcolor="yellow" fontcolor="black" fontsize="1.3" icon="mdi-keyboard-return" iconcolor="black" width="10vw" height="3vw"></custom-button>
              </v-col>
              <v-col cols="12" md="6" lg="6" sm="6" xs="6" >
                <custom-button   txt="ثبت تصاویر" bgcolor="green" fontcolor="black" fontsize="1.3" icon="mdi-file-image" iconcolor="black" width="10vw" height="3vw"></custom-button>


              </v-col>
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
import SelectboxBranch from '@/components/app/Dashboard/Branch/SelectboxBranch'
import EventBuss from '@/assets/js/eventBus'
export default {
  name: "CreateForm",
  components:{
    CustomButton:CustomButton,
    CustomTextbox:CustomTextbox,
    CategorySelect:CategorySelect,
    SelectboxBranch: SelectboxBranch,
  },
  data(){

    return{
      btn_txt:'ثبت محصول',
      btn_color:'#0ad3f7',
      btn_continue : false,
      e1: 1,
      sub_category:'',
      main_category:'',
      product:[{
        title:'',
        price:'',
        description:'',
        category_id:'',
        branch_id:'',
      }],
      properties:[],
      form_data:{
        product: [],
        properties:[]
      },
      fields:[],
      show:false,
      dic:{}


    }
  },

  methods:{
    async registerProduct(){
      console.log(this.form_data)

      this.fill_properties()
      this.form_data.product=this.product
      this.form_data.properties=this.properties
      let self=this
      this.$axios.post('/product/',self.form_data).then(function (response) {
        console.log(response.data.data)
      })
      // console.log(this.form_data)
      this.btn_txt='ویرایش محصول'
      this.btn_color="#ff5733"
      this.btn_continue=true
    },
    set_categorys(item){
      // console.log('test',item)
      this.main_category=item[0]
      this.sub_category=item[1]
      this.product[0].category_id=item[1]
      this.get_attributes();
    },
    get_attributes(){
      let self=this
      this.$axios.get('/category/'+this.sub_category+'/getProperties').then(function (response) {
        // console.log(response.data.data)
        self.fields=response.data.data

      })
      this.show=true
    },
    fill_properties(){
      let item;
      let temp=[]
      let x=0
      for (item of this.fields){
        temp.push({property_id:item.id, value:item.value})
        this.dic[x]=temp
        temp=[]
        x+=1
      }
      this.properties.push(this.dic)
      // console.log("tttttt",this.dic[0][0].value)
    },
    set_branch(item){
      // console.log(item)
      this.product[0].branch_id=item
    },

  },
  mounted(item) {
    EventBuss.$on('set-category',item =>{this.set_categorys(item)})
    EventBuss.$on('set-branch',item =>{this.set_branch(item)})
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
.v-text-field ::before {
  border-color: black !important;
  color: #7F828B !important;
}

.v-text-field ::after {
  border-color: #0ad3f7 !important;
  color: black !important;
}
.custom_btn{
  font-family: 'Markazi Text', serif !important;
  font-weight: bold;
  font-size: 1vw;
  color: black!important;
}


</style>

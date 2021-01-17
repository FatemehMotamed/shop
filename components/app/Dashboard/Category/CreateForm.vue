<template>
  <div class="main rounded">
    <h1 class="pt-5 form_head" >ثبت دسته بندی</h1>
    <v-container >
      <form >
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
            <v-text-field color="#3f6ad8"  outlined dense label="نام دسته بندی" v-model="form_data.name"></v-text-field>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <select-main-category></select-main-category>
          </v-col>

        </v-row>

        <v-row>
          <v-col cols="12" md="12" lg="12" xl="12" sm="12" xs="12">

            <v-btn @click="registerCategory" class="btn_form float-right">ثبت دسته بندی</v-btn>
            <dialog-box :disable="toggle"></dialog-box>

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
import DialogBox from '@/components/app/Dashboard/Category/DialogBox'
import SelectMainCategory from '@/components/app/Dashboard/Category/SelectMainCategory'
import EventBuss from '@/assets/js/eventBus'
export default {
  name: "CreateForm",
  components:{
    CustomButton:CustomButton,
    CustomTextbox:CustomTextbox,
    CustomSelect:CustomSelect,
    DialogBox:DialogBox,
    SelectMainCategory:SelectMainCategory
  },
  data(){
    return{
      toggle:true,
      form_data:{
        name:'',
        parent_id:'',
      }
    }
  },

  methods:{
    async registerCategory(){
      let self=this;
      this.$axios.post('/category', self.form_data).then(function (response) {
        self.toggle=false
        EventBuss.$emit('get-id', response.data.data.id)
      })
      // console.log(this.form_data)
    },

    set_category(item){
      this.form_data.parent_id=item
      console.log(item)
    },
  },
  mounted() {
    EventBuss.$on('set-category',item =>{this.set_category(item)})
  }
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
    margin-right: 20vw;
  }

</style>

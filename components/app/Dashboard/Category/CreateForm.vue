<template>
  <div class="main rounded-lg">
    <v-container >
      <form @submit.prevent="registerCategory">
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
            <select-main-category></select-main-category>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="نام دسته بندی" v-model="form_data.name"></custom-textbox>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="8" lg="8" sm="8" xs="8" offset-md="4" offset-lg="4" offset-sm="4" offset-xs="4">
            <dialog-box :disable="toggle"></dialog-box>
            <custom-button class="ml-2"  txt="ثبت دسته بندی" bgcolor="#0ad3f7" fontcolor="black" fontsize="1.3" icon="mdi-plus" iconcolor="black" width="10vw" height="3vw"></custom-button>
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

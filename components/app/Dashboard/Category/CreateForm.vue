<template>
  <div class="main rounded-xl">
    <v-container >
      <form @submit.prevent="registerCategory">
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
            <v-select
              v-on:change="fill_parent($event)"
              color="#0ad3f7"
              align-center
              :items="parent_category"
              menu-props="auto"
              label="دسته بندی مادر"
              hide-details
              prepend-icon="mdi-account"
              single-line
            ></v-select>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="نام دسته بندی" v-model="form_data.name"></custom-textbox>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="8" lg="8" sm="8" xs="8" offset-md="4" offset-lg="4" offset-sm="4" offset-xs="4">
            <custom-button :disable="toggle" txt="ثبت ویژگی" bgcolor="#FA950B" fontcolor="black" fontsize="1.3" icon="mdi-format-list-bulleted" iconcolor="black" width="10vw" height="3vw"></custom-button>
            <custom-button class="ml-2"  txt="ثبت دسته بندی" bgcolor="#0ad3f7" fontcolor="black" fontsize="1.3" icon="mdi-plus" iconcolor="black" width="10vw" height="3vw"></custom-button>
          </v-col>
        </v-row>

      </form>
    </v-container>

    <dialog-box :dialog="dialog"></dialog-box>

  </div>

</template>

<script>
import CustomButton from '@/components/core/dashboard/CustomButton'
import CustomTextbox from '@/components/core/dashboard/CustomTextbox'
import CustomSelect from '@/components/core/dashboard/CustomSelect'
import DialogBox from '@/components/core/Dialog/DialogBox'
import EventBuss from '@/assets/js/eventBus'
export default {
  name: "CreateForm",
  components:{
    CustomButton:CustomButton,
    CustomTextbox:CustomTextbox,
    CustomSelect:CustomSelect,
    DialogBox:DialogBox
  },
  data(){
    return{
      parent_category:['مردانه','زنانه','بچه گانه'],
      toggle:true,
      dialog:false,
      form_data:{
        name:'',
        parent:'',
      }
    }
  },

  methods:{
    async registerCategory(){
      console.log(this.form_data)
      this.toggle=false
      // console.log("dsda")
    },
    fill_parent(event){
      this.form_data.parent=event
    }

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
.v-select{
  color: #0ad3f7!important;
}

</style>

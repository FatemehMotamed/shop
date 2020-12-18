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
              :items="role"
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
          <v-col cols="12" md="2" lg="2" sm="2" offset-md="5" offset-lg="5" offset-sm="5" offset-xs="5">
            <custom-button txt="ثبت دسته بندی" bgcolor="#0ad3f7" fontcolor="black" fontsize="1.3" icon="mdi-plus" iconcolor="black" width="10vw" height="3vw"></custom-button>
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

      form_data:{
        name:'',
        parent:'',
      }
    }
  },

  methods:{
    async registerCategory(){
      console.log(this.form_data)
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

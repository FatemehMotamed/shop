<template>
  <div class="main rounded-xl">
    <v-container >
      <form @submit.prevent="registerProduct">
        <category-select></category-select>
        <v-row>
          <v-col v-for="(item, key, index) in fields" cols="12" md="6" lg="6" sm="6">
            <custom-textbox :txt="item" v-model="form_data[item]" ></custom-textbox>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="2" lg="2" sm="2" offset-lg="5">
            <custom-button txt="ثبت محصول" bgcolor="#0ad3f7" fontcolor="black" fontsize="1.3" icon="mdi-account-plus" iconcolor="black" width="10vw" height="3vw"></custom-button>
          </v-col>
        </v-row>
      </form>
    </v-container>

  </div>

</template>

<script>
import CustomButton from '@/components/core/dashboard/CustomButton'
import CustomTextbox from '@/components/core/dashboard/CustomTextbox'
import CategorySelect from '@/components/app/Dashboard/Products/CategorySelect'
import EventBuss from '@/assets/js/eventBus'
export default {
  name: "CreateForm",
  components:{
    CustomButton:CustomButton,
    CustomTextbox:CustomTextbox,
    CategorySelect:CategorySelect
  },
  data(){
    return{
      form_data:{
        sub_category:'',
        main_category:'',
      },
      fields:[],

    }
  },

  methods:{
    async registerProduct(){
      console.log(this.form_data)
    },
    set_categorys(item){
      // console.log('test',item)
      this.form_data.main_category=item[0]
      this.form_data.sub_category=item[1]
      this.get_attributes();
    },
    get_attributes(){
      this.fields=['سایز', 'رنگ','قد','جنس']
    },

  },
  mounted(item) {
    EventBuss.$on('set-category',item =>{this.set_categorys(item)})
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

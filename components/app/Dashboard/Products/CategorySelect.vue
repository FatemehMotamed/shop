<template>
  <div>
    <v-row>
      <v-col cols="12" md="6" sm="6" lg="6">
        <v-select
          v-on:change="fill_subcategory($event)"
          :items="subcategory[0]"
          color="#0ad3f7"
          menu-props="auto"
          label="دسته بندی"
          hide-details
          prepend-icon="mdi-city"
          single-line
        ></v-select>
      </v-col>
      <v-col cols="12" md="6" sm="6" lg="6">
        <v-select
          color="#0ad3f7"
          align-center
          v-on:change="fill_combo($event)"
          :items="main_category"
          menu-props="auto"
          label="دسته بندی مادر"
          hide-details
          prepend-icon="mdi-map"
          single-line
        ></v-select>
      </v-col>
    </v-row>


  </div>
</template>

<script>
import EventBuss from '@/assets/js/eventBus'
export default {
  name: "CustomSelect2",

  data(){
    return {
      select_maincategory:'',
      select_subcategory:'',
      main_category:['مردانه','زنانه','بچه گانه'],
      subcategory:[],
      categorys:[
        {
          name:'بچه گانه',category:['بلوز','شلوار','دامن','کلاه']
        },
        {
          name:'زنانه',category:['روسری','کیف','کفش','روپوش']
        },
        {
          name:'مردانه',category:['شلوار','کیف','کفش','کاپشن']
        },
      ],

    }

  },
  methods:{
    fill_subcategory(event){
      this.select_subcategory=event
      EventBuss.$emit("set-category",[this.select_maincategory,this.select_subcategory])
    },

    fill_combo(event){

      this.select_maincategory=event
      this.subcategory=[];
      let i;
      for(i of this.categorys){
        if (i.name === event){
          this.subcategory.push(i.category)
        }
      }

    },


  }
}
</script>

<style scoped>
*{
  font-family: 'Markazi Text', serif !important;
}
.v-select{
  color: #0ad3f7!important;
}
</style>

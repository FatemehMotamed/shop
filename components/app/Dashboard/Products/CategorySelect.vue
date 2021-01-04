<template>
  <div>
    <v-row>
      <v-col cols="12" md="6" sm="6" lg="6">
        <v-select
          v-on:change="fill_subcategory($event)"
          :items="subcategory"
          item-value="id"
          item-text="name"
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
          item-text="name"
          item-value="id"
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
      main_category:[],
      subcategory:[],
    }

  },
  methods:{
    get_main_category(){
      let self=this;
      this.$axios.get('/category/getParents/').then(function(response){
        self.main_category = response.data.data;
      })
    },
    fill_subcategory(event){
      this.select_subcategory=event
      EventBuss.$emit("set-category",[this.select_maincategory,this.select_subcategory])
    },

    fill_combo(event){
      this.select_maincategory=event
      let self=this;
      self.subcategory=[];
      this.$axios.post('/category/search/',{parent_id:event}).then(function(response){
        // console.log(response.data.data);
        response.data.data.forEach(item => self.subcategory.push({id:item.id,name:item.name}));
      })

    },


  },

  created() {
    this.get_main_category()
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

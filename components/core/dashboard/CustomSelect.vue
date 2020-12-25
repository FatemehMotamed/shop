<template>
  <div>
    <v-row>
      <v-col cols="12" md="6" sm="6" lg="6">
        <v-select
          v-on:change="fill_city($event)"
          :items="city[0]"
          color="#0ad3f7"
          menu-props="auto"
          label="شهر"
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
          :items="states"
          menu-props="auto"
          label="استان"
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
    name: "CustomSelect",
    data(){
      return {
        select_state:'',
        select_city:'',
        states:['گیلان','تهران'],
        city:[],
        address:[
          {
            name:'گیلان',citys:['رشت','خمام','آستانه','انزلی']
          },
          {
            name:'تهران',citys:['تهران','کرج','ورامین','دماوند']
          },
          {},
        ]
      }
    },
    methods:{
      fill_city(event){
        this.select_city=event
        EventBuss.$emit("set-city",[this.select_state,this.select_city])
      },

      fill_combo(event){
        this.select_state=event
        this.city=[];
        let i;
        for(i of this.address){
          if (i.name === event){
            this.city.push(i.citys)
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

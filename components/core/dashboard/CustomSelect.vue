<template>
  <div>
    <v-select
      v-on:change="fill_combo($event)"
      :items="states"
      menu-props="auto"
      label="استان"
      hide-details
      prepend-icon="mdi-map"
      single-line
    ></v-select>
    <v-select
      :items="city[0]"
      menu-props="auto"
      label="شهر"
      hide-details
      prepend-icon="mdi-map"
      single-line
    ></v-select>
  </div>
</template>

<script>
  export default {
    name: "CustomSelect",
    data(){
      return {
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
      fill_combo(event){
        this.city=[];
        let i;
        for(i of this.address){
          if (i.name === event){
            this.city.push(i.citys)
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>

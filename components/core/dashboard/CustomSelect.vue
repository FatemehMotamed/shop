<template>
  <div>
    <v-row>
      <v-col cols="12" md="6" sm="6" lg="6">
        <v-select
          v-on:change="fill_city($event)"
          :items="city"
          item-value="id"
          item-text="name"
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
          item-value="id"
          item-text="name"
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
        states:[],
        city:[],
      }
    },
    methods:{
      fill_city(event){
        this.select_city=event
        EventBuss.$emit("set-city",[this.select_state,this.select_city])
      },

      fill_combo(event){
        console.log(event)
        this.select_state=event
        this.city=[];
        let self=this;
        let c=[];
              this.$axios.get('/cities?county_id='+String(event)).then(function(response){
              // console.log(response.data.data[0].name);
                response.data.data.forEach(item => c.push({id:item.id,name:item.name}));
        })
        this.city=c;

      },


    },
    created() {
    let self=this;
    let s=[];
              this.$axios.get('/counties').then(function(response){
              // console.log(response.data.data[0].name);
                response.data.data.forEach(item => s.push({id:item.id,name:item.name}));
        })
    this.states=s;
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

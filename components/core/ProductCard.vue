<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src= "product.image"
      height="195px"
    ></v-img>

    <v-card-text style="font-size: 0.8em; direction:rtl" class="black--text pt-0">
      <span class="grey--text">{{ product.title }}</span>  
      <br>
      {{ product.body }} 
      <br>
      <span>{{ product.code }}</span>  
    </v-card-text>
    <v-row style="font-size: 0.8em;" class="justify-space-around">
      <div><strong class="red--text pt-0">{{ product.price }}</strong></div>

      <div><strong>{{ product.off }}</strong></div>
    </v-row>


  </v-card>
</template>

<script>


  export default {

    props:{
      product: {      
        type:Object,
        require: true, 
      }
    },
    
    data: () => ({
      show: false,
    }),
  }
</script>

<style scoped>
  template {
    font-size: 0.8em;
  }
</style>
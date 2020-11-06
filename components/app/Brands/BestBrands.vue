<template>
    <v-container class="box2" >
        <v-row dir="rtl" class="mt-10">
          <v-col cols="12" md="6" sm="6">
            <v-row>
              <h1>برترین برندها</h1>
            </v-row>
            <v-row>
              <v-col v-for="brand in brands" cols="12" md="3"><img :src="brand"></v-col>
            </v-row>
            <v-row>
              <v-col v-for="brand in brands" cols="12" md="3"><img :src="brand"></v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="6" sm="6" style="border-right: solid 1px #7F828B;">
            <v-row>
              <h1 class="mr-15">خانه طراحان ایرانی</h1>
            </v-row>
            <v-row class="mr-10">
              <v-col v-for="brand in brands" cols="12" md="3"><img :src="brand"></v-col>
            </v-row>
            <v-row class="mr-10">
              <v-col v-for="brand in brands" cols="12" md="3"><img :src="brand"></v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
    export default {
        name: "BestBrands",
        data(){
      return{
          brands:[
              'https://dkstatics-public.digikala.com/digikala-adservice-banners/1000022866.png?x-oss-process=image/quality,q_80',
              'https://dkstatics-public.digikala.com/digikala-adservice-banners/1000010474.png?x-oss-process=image/quality,q_80',
              'https://dkstatics-public.digikala.com/digikala-adservice-banners/1000022676.png?x-oss-process=image/quality,q_80',
              'https://dkstatics-public.digikala.com/digikala-adservice-banners/1000022678.png?x-oss-process=image/quality,q_80',
          ]
      }
    }
    }
</script>

<style scoped>
  .box2 h1,p{
    font-family: 'Markazi Text', serif !important;
  }
</style>

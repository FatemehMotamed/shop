<template>
    <v-container class="box">
        <v-row>
          <v-col cols="12" md="4" sm="4"></v-col>
          <v-col cols="12" md="4" sm="4" class="ml-12"><h1>از پرطرفدارترین برندها</h1></v-col>
          <v-col cols="12" md="4" sm="4"></v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="3" sm="3"></v-col>
          <v-col cols="12" md="1" sm="1"><p>Reebok</p></v-col>
          <v-col cols="12" md="4" sm="4"><p>آر اِن اِس</p></v-col>
          <v-col cols="12" md="4" sm="4"><p>باینت</p></v-col>



        </v-row>
        <v-row>
          <v-col v-for="item in items" cols="12" md="2" sm="2">
              <v-card><img :src="item"></v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="item in items" cols="12" md="2" sm="2">
              <v-card><img :src="item"></v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
    export default {
        name: "PopularBrands",
        data(){
            return{
                  items:[
              'https://dkstatics-public.digikala.com/digikala-products/117614302.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
              'https://dkstatics-public.digikala.com/digikala-products/117602478.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
              'https://dkstatics-public.digikala.com/digikala-products/bd6d32212770e6b2ef60d31ab8f32164c6a80510_1597751544.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
              'https://dkstatics-public.digikala.com/digikala-products/77da89424fe8b922124d43cf393a5832724cd0e2_1594822617.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
              'https://dkstatics-public.digikala.com/digikala-products/14be51b31cf27102d695666aa60a3930e7e4c384_1598251795.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
              'https://dkstatics-public.digikala.com/digikala-products/3ca4ca81758f79829034d7f9936c7b9717250749_1598971096.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
          ],

      }
              }
    }
</script>

<style scoped>
  .box h1{
      font-family: 'Markazi Text', serif !important;
      font-size: 2.5vw;
    }

  .box p{
    font-size: 2vw;
    color: black !important;
    text-align: right;
    font-family: 'Markazi Text', serif !important;
  }
  .box img{
    width: 12vw;
    height: 12vw;
  }

</style>

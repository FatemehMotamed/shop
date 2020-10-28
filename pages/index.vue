<template>
  <div>
    <v-app>
      <slide-page style="position: relative"></slide-page>

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
      <hr>
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

      <hr>

      <v-container class="box3">

        <v-row>
          <v-col cols="12" md="5" sm="5"></v-col>
          <v-col cols="12" md="3" sm="3" ><h1>با خیال راحت</h1><p>از ما خرید کنید</p></v-col>
          <v-col cols="12" md="4" sm="4"></v-col>
        </v-row>
      </v-container>

      <footer-product></footer-product>


    </v-app>


  </div>

</template>

<script>

import SlidePage from "@/components/Slide";
import FooterProduct from "@/components/FooterProduct";

export default {
    layout:'main',
    components: {
         SlidePage:SlidePage,
          FooterProduct:FooterProduct,
    },
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
  .box h1{
    font-family: 'Markazi Text', serif !important;
  }
  .box2 h1,p{
    font-family: 'Markazi Text', serif !important;
  }
   .box3 h1,p{
    font-family: 'Markazi Text', serif !important;
     font-size: 4vw;
  }
  .box p{
    font-size: 2vw;
    color: black !important;
    text-align: right;
  }
  .box img{
    width: 12vw;
    height: 12vw;
  }
  hr{
    color: dimgrey;
    margin-top: 4vw;
  }
  .box3 p{
    font-size: 3.5vw;

  }

</style>


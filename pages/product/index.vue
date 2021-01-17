<template>
<v-app class="white">

     <v-layout >
    <v-flex xs12 sm8 offset-sm2>
      <v-layout>
        
      <div class="sider">
        <image-gallery :product="properties.images"></image-gallery>
      </div>

        <left-side :product="properties"></left-side>

      </v-layout>
    </v-flex>
  </v-layout>
  <other-suggest :product="properties.suggest_properties"></other-suggest>

  <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      <v-layout class="ma-10">
          <tab-page :product="properties.other_properties"></tab-page>
      </v-layout>
    </v-flex>
  </v-layout>


</v-app>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

import ImageGallery from '@/components/app/Product/ImageGallery.vue' 
import LeftSide from '@/components/app/Product/LeftSide.vue'
import OtherSuggest from '@/components/app/Product/OtherSuggest.vue'

export default {


    components:{
      ImageGallery,
      LeftSide,
      OtherSuggest,
    },
    data(){
      return{
        properties: {
          title: 'باینت',
          name: 'هودی مردانه باینت',
          off: '۲۷۸۰۰۰',
          price: '۲۷۸۰۰۰',
          seller: 'باینت',
          is_official: true,
          images: [
            "https://dkstatics-public.digikala.com/digikala-products/117602485.jpg?x-oss-process=image/resize,m_fill,h_2625,w_2000/quality,q_90",
            "https://dkstatics-public.digikala.com/digikala-products/117602487.jpg?x-oss-process=image/resize,m_fill,h_2625,w_2000/quality,q_90",
            "https://dkstatics-public.digikala.com/digikala-products/117602491.jpg?x-oss-process=image/resize,m_fill,h_2625,w_2000/quality,q_90",
          ],
          suggest_properties: [
              {
                title: 'esmara', 
                name: 'پلیور زنانه اسمارامدل WRJW',
                price: '۴۵۰۰۰۰',
                image: "https://dkstatics-public.digikala.com/digikala-products/b258562ee4fbabf28c48a51d7bdc5d0971fc7e0d_1605008744.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
              },
              {
                title: 'esmara', 
                name: 'پلیور زنانه اسمارا مدل WWC5',
                price: '۴۰۰۰۰۰',
                image: "https://dkstatics-public.digikala.com/digikala-products/e77e1676f7662352628f6d50745434fffac0089a_1603264381.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
              },
              {
                title: 'esmara', 
                name: 'پلیور زنانه چیبو مدل R45',
                price: '۲۶۰۰۰۰',
                image: "https://dkstatics-public.digikala.com/digikala-products/de76736a063338b47d3d8b8e8f27366cc550c98e_1601735338.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
              },
              {
                title: 'Tchibo', 
                name: 'پلیور زنانه اسمارا مدل R45',
                price: '۲۵۰۰۰۰',
                image: "https://dkstatics-public.digikala.com/digikala-products/684ca75ecb9ad2318647b5693861c9e3371bba50_1605519038.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
              },

              {
                title: 'esmara', 
                name: 'پلیور زنانه اسمارا مدل WWC5',
                price: '۴۰۰۰۰۰',
                image: "https://dkstatics-public.digikala.com/digikala-products/e77e1676f7662352628f6d50745434fffac0089a_1603264381.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
              },
              {
                title: 'esmara', 
                name: 'پلیور زنانه اسمارامدل WRJW',
                price: '۴۵۰۰۰۰',
                image: "https://dkstatics-public.digikala.com/digikala-products/b258562ee4fbabf28c48a51d7bdc5d0971fc7e0d_1605008744.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
              },
              {
                title: 'Tchibo', 
                name: 'پلیور زنانه اسمارا مدل R45',
                price: '۲۵۰۰۰۰',
                image: "https://dkstatics-public.digikala.com/digikala-products/684ca75ecb9ad2318647b5693861c9e3371bba50_1605519038.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
              },
          ],
          other_properties:{
            commnet:[
              {
              title: 'خوب',
              name: 'ماهان کبیر',
              buing_size: 'xl',
              buing_from: 'آدیوس',
              body: 'اندازه خودتون بگیرید نه کوچیکتر و نه بزرگتر',
              suggest: '1',
              },
              {
              title: 'خوب',
              name: 'ماهان کبیر',
              buing_size: 'xl',
              buing_from: 'آدیوس',
              body: 'اندازه خودتون بگیرید نه کوچیکتر و نه بزرگتر',
              suggest: '1',
              },
            ],
          }
        }
      }
    }
}

</script>

<style scoped>


body {
  margin: 0;
  font-family: Arial;
}
.sider{
    font-family: 'Vazir', sans-serif;
    width: 50%;
    height: 500px;
    background-color: white;
    color: black;
    text-align: right;
}
</style>

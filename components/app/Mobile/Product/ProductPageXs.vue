<template>

<v-app>
  <v-card>
      <app-bar-page @callTogleDrawer="TogleDrawer"></app-bar-page>

      <v-navigation-drawer
        v-model="drawer"
        absolute
        right
        temporary
      >
        <v-list nav dense>
          <v-list-item-group active-class="deep-purple--text text--accent-4">
              <navigation-drawer-page :menu="menu" @update-menu="updateMenu"></navigation-drawer-page>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

    <carousel-product :images="images"></carousel-product>
    <v-divider></v-divider>

    <properties-product class="mt-5" :properties_data_1="properties_data_1"></properties-product>


  
  <footer-side class="mt-16"></footer-side>
  </v-card>


</v-app>
    
</template>


<script>

  import AppBarPage from "@/components/app/Mobile/Header/AppBarPage";
  import NavigationDrawerPage from "@/components/app/Mobile/Header/NavigationDrawerPage";
  import CarouselProduct from '@/components/core/CarouselProduct.vue'
  import PropertiesProduct from '@/components/app/Mobile/Product/PropertiesProduct.vue'
  import FooterSide from '@/components/app/Mobile/Product/FooterSide.vue'

export default {

    components:{
        AppBarPage:AppBarPage,
        NavigationDrawerPage:NavigationDrawerPage,
        CarouselProduct,
        PropertiesProduct,
        FooterSide,
        
    },
        data(){
          return{
              drawer: false,
              menu:['مردانه','woman','child'],
              menu2:['tshirt','shoe','kif'],
              menu3:['tshirt1','tshirt2','tshirt3'],
              menu4:['shoe1','shoe2','shoe3'],

              images: [
                {image: 'https://dkstatics-public.digikala.com/digikala-products/ff0948175b3526926ad6620ca147893ae59e3594_1601733136.jpg?x-oss-process=image/resize,m_fill,h_2625,w_2000/quality,q_90'},
                {image: 'https://dkstatics-public.digikala.com/digikala-products/fc37a57b6f5475e786059cab591f49eaf52b09ef_1601733144.jpg?x-oss-process=image/resize,m_fill,h_2625,w_2000/quality,q_90'},
              ],

              properties_data_1:
                {
                  rating: '3.7',
                  person_rating: '6',
                  brand: 'لیورجی',
                  brand_link: '',
                  title: 'پالتو مردانه لیورجی',
                  model: 'MTB2021',
                  off: '60000',
                  pre_price: '249000',
                  price: '189000',
                  seller: 'جرمن کالا',
                  is_better_brand: Boolean(Math.round(Math.random())),
                  size_name: [
                    'M',
                    'L',
                  ],
                  properties: [
                    'قیه ایستاده و آستین بلند',
                    'باز و بسته شدن از طریق زیپ',
                    'دارای دو جیب در طرفین',
                    'دارای کش بافت در سرآستین ها',
                  ]
                },

            }
        },

        methods:{
            TogleDrawer(){
                this.drawer=!this.drawer
            },
            updateMenu(data){
                this.menu=[];
                this.menu=data
            }
        },
    
}
</script>

<style scoped>

</style>
<template>

<div>
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

  <carousel-product class="mt-13" :list="list"></carousel-product>

  <properties-product></properties-product>

  
  <footer-side></footer-side>




</div>
    
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


              list: [
                {image: 'https://dkstatics-public.digikala.com/digikala-products/ff0948175b3526926ad6620ca147893ae59e3594_1601733136.jpg?x-oss-process=image/resize,m_fill,h_2625,w_2000/quality,q_90'},
                {image: 'https://dkstatics-public.digikala.com/digikala-products/fc37a57b6f5475e786059cab591f49eaf52b09ef_1601733144.jpg?x-oss-process=image/resize,m_fill,h_2625,w_2000/quality,q_90'},
              ]
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
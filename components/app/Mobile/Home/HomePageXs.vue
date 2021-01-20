<template >
<div>
  <v-system-bar color="deep-purple darken-3"></v-system-bar>

  <v-app-bar
    color="red accent-4"
    fixed>
    <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title class="white--text">Brand Name</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon class="white--text">mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon class="white--text">mdi-shopping</v-icon>
    </v-btn>

  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    fixed
    right
    temporary
  >
    <v-list
      nav
      dense
    >
      <v-list-item-group
        v-model="group"
        active-class="deep-purple--text text--accent-4"
      >
      <div class="row justify-space-around">

          <div><v-icon class="ma-2">mdi-close</v-icon></div>
          <div>
              <v-btn
                  class="ma-2"
                  outlined
                  color="dark">
                  ورود و ثبت نام
              </v-btn>
          </div>

      </div>
      <main-menu class="mt-2" v-if="number == -1"></main-menu>
      <men-menu class="mt-2" v-if="number == 0"></men-menu>
      <women-menu class="mt-2" v-if="number == 1"></women-menu>
      <kids-menu class="mt-2" v-if="number == 2"></kids-menu>
      <beauty-menu class="mt-2" v-if="number == 3"></beauty-menu>
      <sub-men-menu class="mt-2" v-if="number == 4"></sub-men-menu>
      <sub-women-menu class="mt-2" v-if="number == 5"></sub-women-menu>

      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
  <v-main>
    <avatar class="mt-16 ml-5"></avatar>
    <banner :banner="main_data.banner_images"></banner>

    <div class="row justify-space-between pt-8 ml-5">
        <div><nuxt-link to="#">مشاهده همه</nuxt-link></div>
        <div>محصولات پربازدید اخیر</div>
    </div>
    <group-card class="mt-4 ml-5"></group-card>

    <guarantee class="mt-5 ml-5"></guarantee>

    <div class="row justify-space-between pt-8 ml-5">
        <div><nuxt-link to="#">مشاهده همه</nuxt-link></div>
        <div>از پرطرفدارترین برندها: باینت</div>
    </div>
    
    <tile-group class="mt-4 ml-5"></tile-group>

    <div class="row justify-space-between pt-8 ml-5">
        <div><nuxt-link to="#">مشاهده همه</nuxt-link></div>
        <div>از پرطرفدارترین برندها: آر اِن اِس</div>
    </div>
    <tile-group class="mt-4 ml-5"></tile-group>

    <div class="row justify-space-between pt-8 ml-5">
        <div><nuxt-link to="#">مشاهده همه</nuxt-link></div>
        <div>از پرطرفدارترین برندها: زی</div>
    </div>

    <tile-group class="mt-4 ml-5"></tile-group>

    <div class="row justify-space-between pt-8 ml-5">
        <div><nuxt-link to="#">مشاهده همه</nuxt-link></div>
        <div>برندهای برتر</div>
    </div>

    <brands class="mt-4 ml-5"></brands>

    <div class="row justify-space-between pt-8 ml-5">
        <div><nuxt-link to="#">مشاهده همه</nuxt-link></div>
        <div>منتخب جدیدترین محصولات</div>
    </div>

    <group-card class="mt-4 ml-5"></group-card>

    <v-row class="justify-space-between text-center pt-10 ml-5">
        <div><nuxt-link to="#">مشاهده همه</nuxt-link></div>
        <div>خانه طراحان ایرانی</div>
    </v-row>
    <brands class="mt-4 ml-5"></brands>

    <footer-side class="mt-4 ml-5"></footer-side>
  </v-main>
</div>
</template>

<script>

  import EventBus from '@/assets/js/eventBus.js'

  import MainMenu from '@/components/app/Mobile/Header/MainMenu.vue'
  import MenMenu from '@/components/app/Mobile/Header/MenMenu.vue'
  import WomenMenu from '@/components/app/Mobile/Header/WomenMenu.vue'
  import BeautyMenu from '@/components/app/Mobile/Header/BeautyMenu.vue'
  import KidsMenu from '@/components/app/Mobile/Header/KidsMenu.vue'

  import SubMenMenu from '@/components/app/Mobile/Header/SubMenu/SubMenMenu.vue'
  import SubWomenMenu from '@/components/app/Mobile/Header/SubMenu/SubWomenMenu.vue'

  import AppBarPage from "@/components/app/Mobile/Header/AppBarPage";
  import GroupCard from "@/components/app/Mobile/Home/GroupCard.vue";
  import Banner from "@/components/app/Mobile/Home/Banner.vue";
  import Guarantee from "@/components/app/Mobile/Home/Guarantee.vue";
  import TileGroup from "@/components/app/Mobile/Home/TileGroup.vue";
  import Brands from '@/components/app/Mobile/Home/Brands.vue';
  import FooterSide from '@/components/app/Mobile/Home/FooterSide.vue';
  import Avatar from '@/components/app/Mobile/Home/Avatar.vue';

    export default {
        name: "HomePage",
        components:{

            MainMenu,
            MenMenu,
            KidsMenu,
            BeautyMenu,

            SubMenMenu,
            SubWomenMenu,

            AppBarPage:AppBarPage,
            GroupCard: GroupCard,
            Banner,
            Guarantee,
            TileGroup,
            Brands,
            FooterSide,
            Avatar,
        },
        watch: {
          group () {
          this.drawer = false
          },
        },
        data(){
            return{
                number: -1,

                drawer: false,
                group: null,
                drawer: false,
                menu:['مردانه','woman','child'],
                menu2:['tshirt','shoe','kif'],
                menu3:['tshirt1','tshirt2','tshirt3'],
                menu4:['shoe1','shoe2','shoe3'],

                main_data:{
                  banner_images:[
                    'https://dkstatics-public.digikala.com/digikala-adservice-banners/ee6cbded48cc96793f44843cb56a0783280f4c0b_1610550870.jpg?x-oss-process=image/quality,q_80',
                    'https://dkstatics-public.digikala.com/digikala-adservice-banners/787b7caf77ab5c7dbbb50e9a2e754c0eb354a0f6_1610800468.jpg?x-oss-process=image/quality,q_80',
                    'https://dkstatics-public.digikala.com/digikala-adservice-banners/9f1781eb62c6babe5cd871998d6c05c902f58d5b_1610734155.jpg?x-oss-process=image/quality,q_80',
                    'https://dkstatics-public.digikala.com/digikala-adservice-banners/d13d873ab39d95414c2829b034359eb4eccc7540_1610550198.jpg?x-oss-process=image/quality,q_80',
                    'https://dkstatics-public.digikala.com/digikala-adservice-banners/b691a1ddd9732e63abcf9703912c254c4f657c01_1610550757.jpg?x-oss-process=image/quality,q_80',
                    
                  ]
                }
            }
        },
        watch: {
          group () {
            this.drawer = false
          },
        },
        mounted(){
            EventBus.$on('number', (i) => {
                this.number = i;
            })
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

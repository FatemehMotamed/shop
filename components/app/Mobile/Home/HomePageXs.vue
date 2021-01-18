<template >
     <v-app>
    <v-card
      class="mx-auto overflow-hidden"
      height="100%"
      width="100%"
    >
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


      <avatar class="pt-10"></avatar>
      <v-card-text>
        <banner :banner="main_data.banner_images"></banner>

        <div class="row justify-space-between pt-8">
            <div><nuxt-link to="#">مشاهده همه</nuxt-link></div>
            <div>محصولات پربازدید اخیر</div>
        </div>
        <group-card class="mt-4"></group-card>

        <guarantee></guarantee>

        <div class="row justify-space-between pt-8">
            <div><nuxt-link to="#">مشاهده همه</nuxt-link></div>
            <div>از پرطرفدارترین برندها: باینت</div>
        </div>
        
        <tile-group class="mt-4"></tile-group>

        <div class="row justify-space-between pt-8">
            <div><nuxt-link to="#">مشاهده همه</nuxt-link></div>
            <div>از پرطرفدارترین برندها: آر اِن اِس</div>
        </div>
        <tile-group class="mt-4"></tile-group>

        <div class="row justify-space-between pt-8">
            <div><nuxt-link to="#">مشاهده همه</nuxt-link></div>
            <div>از پرطرفدارترین برندها: زی</div>
        </div>

        <tile-group class="mt-4"></tile-group>

        <div class="row justify-space-between pt-8">
            <div><nuxt-link to="#">مشاهده همه</nuxt-link></div>
            <div>برندهای برتر</div>
        </div>

        <brands class="mt-4"></brands>

        <div class="row justify-space-between pt-8">
            <div><nuxt-link to="#">مشاهده همه</nuxt-link></div>
            <div>منتخب جدیدترین محصولات</div>
        </div>

        <group-card class="mt-4"></group-card>

        <v-row class="justify-space-between text-center pt-10">
            <div><nuxt-link to="#">مشاهده همه</nuxt-link></div>
            <div>خانه طراحان ایرانی</div>
        </v-row>
        <brands class="mt-4"></brands>

        <footer-side class="mt-4"></footer-side>

      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
  import AppBarPage from "@/components/app/Mobile/Header/AppBarPage";
  import NavigationDrawerPage from "@/components/app/Mobile/Header/NavigationDrawerPage";
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
            AppBarPage:AppBarPage,
            NavigationDrawerPage:NavigationDrawerPage,
            GroupCard: GroupCard,
            Banner,
            Guarantee,
            TileGroup,
            Brands,
            FooterSide,
            Avatar,
        },
          
        data(){
            return{
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

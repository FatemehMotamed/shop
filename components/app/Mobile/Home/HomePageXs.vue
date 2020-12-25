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
        <slide-group></slide-group>

        <v-row class="justify-space-between text-center pt-10">
            <div><nuxt-link to="#"></nuxt-link></div>
            <div>محصولات پربازدید اخیر</div>
        </v-row>
        <group-card></group-card>

        <guarantee></guarantee>

        <v-row class="justify-space-between text-center pt-10">
            <div><nuxt-link to="#">مشاهده همه</nuxt-link></div>
            <div>از پرطرفدارترین برندها: باینت</div>
        </v-row>
        
        <tile-group></tile-group>

        <v-row class="justify-space-between text-center pt-10">
            <div><nuxt-link to="#">مشاهده همه</nuxt-link></div>
            <div>از پرطرفدارترین برندها: آر اِن اِس</div>
        </v-row>
        <tile-group></tile-group>

        <v-row class="justify-space-between text-center pt-10">
            <div><nuxt-link to="#">مشاهده همه</nuxt-link></div>
            <div>از پرطرفدارترین برندها: زی</div>
        </v-row>
        <tile-group></tile-group>

        <v-row class="justify-space-between text-center pt-10">
            <div><nuxt-link to="#">مشاهده همه</nuxt-link></div>
            <div>برندهای برتر</div>
        </v-row>
        <brands></brands>

        <v-row class="justify-space-between text-center pt-10">
          <div><nuxt-link to="#"></nuxt-link></div>
          <div>منتخب جدیدترین محصولات</div>
        </v-row>
        <group-card></group-card>

        <v-row class="justify-space-between text-center pt-10">
            <div><nuxt-link to="#">مشاهده همه</nuxt-link></div>
            <div>خانه طراحان ایرانی</div>
        </v-row>
        <brands></brands>

        <footer-side></footer-side>

      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
  import AppBarPage from "@/components/app/Mobile/Header/AppBarPage";
  import NavigationDrawerPage from "@/components/app/Mobile/Header/NavigationDrawerPage";
  import GroupCard from "@/components/app/Mobile/Home/GroupCard.vue";
  import SlideGroup from "@/components/core/SlideGroup.vue";
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
            SlideGroup,
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

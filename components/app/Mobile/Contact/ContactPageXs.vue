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
</div>
    
</template>


<script>

  import AppBarPage from "@/components/app/Mobile/Header/AppBarPage";
  import NavigationDrawerPage from "@/components/app/Mobile/Header/NavigationDrawerPage";

export default {

    components:{
        AppBarPage:AppBarPage,
        NavigationDrawerPage:NavigationDrawerPage,
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
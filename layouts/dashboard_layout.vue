<template>
     <v-app>
    <v-card
      class="mx-auto overflow-hidden"
      height="100%"
      width="100%"
    >
      <app-bar-page @callTogleDrawer="TogleDrawer"></app-bar-page>

      <v-navigation-drawer
        color="#F5F5F5"
        v-model="drawer"
        right
        fixed
        width="19vw"
      >
        <!-- <v-list nav dense> -->
        <v-list>
          <v-list-item-group active-class="deep-purple--text text--accent-4">
              <navigation-drawer-page @callTogleDrawer="TogleDrawer"></navigation-drawer-page>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-card-text style="background-color: #E0E0E0; height: 100%;" >
        <Nuxt  />
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
  import AppBarPage from "@/components/app/Dashboard/Drawer/AppBarPage";
  import NavigationDrawerPage from "@/components/app/Dashboard/Drawer/NavigationDrawerPage";
    export default {
        name: "dashboard_layout",
        components:{
            AppBarPage:AppBarPage,
            NavigationDrawerPage:NavigationDrawerPage,
        },
        data(){
            return{
                drawer: true,
            }
        },

        methods:{
            TogleDrawer(){
                this.drawer=!this.drawer
            },

        },
    }
</script>

<style scoped>

</style>

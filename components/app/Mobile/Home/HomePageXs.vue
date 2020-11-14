<template>
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
              <navigation-drawer-page></navigation-drawer-page>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-card-text>
        The navigation drawer will appear from the bottom on smaller size screens.
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
  import AppBarPage from "@/components/app/Mobile/Header/AppBarPage";
  import NavigationDrawerPage from "@/components/app/Mobile/Header/NavigationDrawerPage";
    export default {
        name: "HomePage",
        components:{
            AppBarPage:AppBarPage,
            NavigationDrawerPage:NavigationDrawerPage,
        },
        data(){
            return{
                drawer: false,
            }
        },

        methods:{
            TogleDrawer(){
                this.drawer=!this.drawer
            }

        },
    }
</script>

<style scoped>

</style>

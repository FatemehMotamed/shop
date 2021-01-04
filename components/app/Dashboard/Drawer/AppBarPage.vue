<template>
    <v-app-bar
        color="#0ad3f7"
        prominent
      >
        <v-btn icon><v-icon>mdi-account</v-icon></v-btn>

      <div class="account_box mt-3" v-if="isAuthenticated">
              {{ loggedInUser }}
              <a @click="logoutUser()">Logout</a>
      </div>

        <v-spacer></v-spacer>
        <div class="mt-1 ml-n16 brand_name">Brand Name</div>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click.stop="togleDrawer" ></v-app-bar-nav-icon>

      </v-app-bar>
</template>

<script>
   import{ mapGetters, mapState, mapMutations } from 'vuex'
    export default {
        name: "AppBarPage",
        methods:{
                  togleDrawer(){
                      this.$emit("callTogleDrawer");
                  },
                  ...mapMutations(['logoutUser']),
        },

          computed: {
              ...mapGetters(['isAuthenticated', 'loggedInUser'])
              }


    }

</script>

<style scoped>
  *{
    font-family: 'Markazi Text', serif !important;
  }
  .brand_name{
    font-size: 5vw;
  }
  .account_box{
    font-size: 1.2vw;
  }
</style>

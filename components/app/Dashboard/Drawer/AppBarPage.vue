<template>
    <v-app-bar
        color="#0ad3f7"
        prominent
      >
        <label><font-awesome-icon :icon="['fas', 'shopping-bag']" slot="prepend" style="color:dimgrey;" /></label>
        <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
        <v-spacer></v-spacer>
        <div class="mt-1 brand_name">Brand Name</div>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click.stop="togleDrawer" ></v-app-bar-nav-icon>

      </v-app-bar>
</template>

<script>
    export default {
        name: "AppBarPage",
        methods:{
                  togleDrawer(){
                      this.$emit("callTogleDrawer");
                  }
        }
    }

</script>

<style scoped>
  .brand_name{
    font-family: 'Markazi Text', serif !important;
    font-size: 5vw;
  }
</style>

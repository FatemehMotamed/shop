<template>
    <v-app-bar
        color="accent-4"
        prominent
        fixed
        height="50vw">

        <v-btn icon><v-icon>mdi-shopping</v-icon></v-btn>

        <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
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

</style>

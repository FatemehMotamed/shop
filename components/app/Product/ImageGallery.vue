<template>


    <div>
        <v-row justify="center">
        <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        style="z-index: 500"
        >
        <template v-slot:activator="{ on }">

            <v-row dir="rtl">
            <div class="image" v-for="l in list" :key="l">

                <img :src="l" width="100px" height="100px" v-on:click="set_img(l)">
            </div>
            <div  class="image">
                <img :src="image" style="margin-left:5vw" width="640px" height="640px" v-on="on">
            </div>
            </v-row>

        </template>
        <v-card color="white">
            <v-toolbar
            light
            color="white"
            >
            <v-btn
                icon
                @click="dialog = false"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>


            </v-toolbar>
            <v-row align="center" justify="center">
                    <div class="image">
                <img :src="image" width="640px" height="640px">
            </div>
            <div>
                    <div class="image" v-for="l in list" :key="l" width="300px" height="300px">

                <img :src="l" width="100px" height="100px" v-on:click="set_img(l)" v-on="on">
            </div>
            </div>

            </v-row>


        </v-card>
        </v-dialog>
    </v-row>

    </div>
</template>
<script>
export default {

    props:{
        product:{
            type: Array,
            default: '',
        }
    },

    data(){
        return{
            image: this.product[0],
            list: this.product,
            model: null,
            dialog: false,
            notifications: false,
            sound: true,
            widgets: false,
        }
    },
    methods: {
      set_img(l){
          this.image = l
      }
    },
}
</script>

<style scoped>

</style>
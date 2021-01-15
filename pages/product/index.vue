<template>
<v-app class="white">

     <v-layout >
    <v-flex xs12 sm8 offset-sm2>
      <v-layout>


        <left-side></left-side>

      <div class="sider">
        <image-gallery></image-gallery>
      </div>


      </v-layout>
    </v-flex>
  </v-layout>
  <v-layout style="height:38vw">
    <v-flex xs12 sm8 offset-sm2>
      <v-layout>


  <v-sheet
  style="margin-top:18vw !important"
    class="mx-auto"
    elevation="8"
    max-width="100%"
    color="white"

  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      active-class="success"
      show-arrows
    >
      <v-slide-item
        v-for="n in 15"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? undefined : 'grey lighten-1'"
          class="ma-4"
          height="335"
          width="200"
          @click="toggle"
        >
        <CardPage></CardPage>
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>


      </v-layout>
    </v-flex>
  </v-layout>

  <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      <v-layout style="float:right; margin-top:12vw !important">
          <tab-page></tab-page>
      </v-layout>
    </v-flex>
  </v-layout>



  <v-layout style="height:38vw">
    <v-flex xs12 sm8 offset-sm2>
      <v-layout>


  <v-sheet
  style="margin-top:2.5vw !important"
    class="mx-auto"
    elevation="8"
    max-width="100%"
    color="white"

  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      active-class="success"
      show-arrows
    >
      <v-slide-item
        v-for="n in 15"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? undefined : 'grey lighten-1'"
          class="ma-4"
          height="335"
          width="200"
          @click="toggle"
        >
        <CardPage></CardPage>
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>


      </v-layout>
    </v-flex>
  </v-layout>



</v-app>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import ImageGallery from '@/components/app/Crop/ImageGallery.vue' 
import LeftSide from '@/components/app/Crop/LeftSide.vue'

Vue.use(Vuetify, {
  rtl: true
})
export default {


    components:{
      ImageGallery,
      LeftSide,
    }
}

</script>

<style scoped>

 /* The grid: Four equal columns that floats next to each other */
.column {
  float: left;
  width: 25%;
  padding: 10px;
}

/* Style the images inside the grid */
.column img {
  opacity: 0.8;
  cursor: pointer;
}

.column img:hover {
  opacity: 1;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* The expanding image container (positioning is needed to position the close button and the text) */
.container {
  position: relative;
  display: none;
}

/* Expanding image text */
#imgtext {
  position: absolute;
  bottom: 15px;
  left: 15px;
  color: white;
  font-size: 20px;
}

/* Closable button inside the image */
.closebtn {
  position: absolute;
  top: 10px;
  right: 15px;
  color: white;
  font-size: 35px;
  cursor: pointer;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial;
}
.sider{
    font-family: 'Vazir', sans-serif;
    width: 50%;
    height: 500px;
    background-color: white;
    color: black;
    text-align: right;
}
</style>

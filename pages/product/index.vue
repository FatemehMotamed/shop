<template>
<v-app class="white">

     <v-layout >
    <v-flex xs12 sm8 offset-sm2>
      <v-layout>
        <br>
        <br>
        <div class="sider mr-16">
          <h2><v-icon color="black" style="float: left;">fa-share-alt</v-icon><span>باینت</span></h2>
          <br>
          <h3>هودی مردانه باینت</h3>

          <br>
          <br>

          <div class="off" dir="rtl">
            <span>۲۷۸۰۰۰</span>
            <span>تومان</span>
          </div>

          <br>

          <div class="price" dir="rtl">
            <span>۲۷۸۰۰۰</span>
            <span>تومان</span>


          </div>

          <div>

      </div>

          <div style="text-align:right" dir="rtl">
              <v-col>
                <v-select

                style="width:10vw !important"
                :items="items"
                label="انتخاب سایز"
                light
                color="grey darken-4"
                ></v-select>
            </v-col>
          </div>
          <br>
          <div>
          <v-btn
            class="ma-2"
            outlined
            color="black"
            >
            بعدا میخرم
          </v-btn>

          <v-btn
            class="ma-2"
            color="pink"
            width="15vw"
            style="position: relative;"
            >
          <span>  میخرم </span>
          <v-icon style="position: absolute;top:0;left:9vw;">fa-shopping-bag</v-icon>

          </v-btn>
          </div>

          <br>
          <br>
          <br>

          <v-row dir="rtl" class="mr-2">
                <v-icon color="grey lighten-1" style="font-size:2.5vw">fa-shopping-bag</v-icon>
              <div style="margin-right:10px;">
                <span style="font-size:0.9vw">ضمانت هفت روز</span>
                <br>
                <span style="font-size:0.9vw">بازگشت کالا</span>
              </div>
              <v-icon color="grey lighten-1" style="margin-right:10px; font-size:2.5vw">fa-shopping-bag</v-icon>

              <div style="margin-right:10px;">
                  <span style="font-size:0.9vw">تحویل سریع و آسان</span>
              </div>
              <v-icon color="grey lighten-1" style="margin-right:10px; font-size:2.5vw">fa-shopping-bag</v-icon>

              <div style="margin-right:10px;">
                  <span style="font-size:0.9vw">ضمانت </span>
                  <br>
                  <span style="font-size:0.9vw">اصل بودن کالا</span>
              </div>


          </v-row>
<br>
<br>
<br>
<br>
          <p>فروش توسط <a>باینت</a>
              <v-icon color="blue">fa-check-circle</v-icon>
              <span style="color:blue">فروشنده رسمی برند</span>
          </p>
        <hr>
        <br>
        <div dir="rtl" class="mr-2">

              <div style="font-size:1vw">
                <v-icon color="grey lighten-1">fa-shield-alt</v-icon>
                <span>گارانتی اصالت و سلامت فیزیکی کالا</span>
                <v-icon style="margin-right:20px;" color="grey lighten-1">fa-shuttle-van</v-icon>
                <span>ارسال از ۲ روز کاری</span>
              </div>
              <div>

              </div>

          </div>

        </div>

      <div class="sider">

  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      style="z-index: 500;"

    >
      <template v-slot:activator="{ on }">




        <v-row dir="rtl">
        <div class="image" v-for="l in list" :key="l">

            <img :src="l" width="100px" height="100px" v-on:click="set_img(l)" v-on="on">
        </div>
        <div  class="image">
            <img :src="image" style="margin-left:5vw" width="640px" height="640px">
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


      </v-layout>
    </v-flex>
  </v-layout>
  <v-layout style="height:38vw">
    <v-flex xs12 sm8 offset-sm2>
      <v-layout>

      </v-layout>
    </v-flex>
  </v-layout>


  <v-row>
    <slide-group></slide-group>
  </v-row>

  <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      <v-layout style="float:right; margin-top:12vw !important">
          <tab-page></tab-page>
      </v-layout>
    </v-flex>
  </v-layout>







</v-app>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import SlideGroup from "@/components/SlideGroup";

Vue.use(Vuetify, {
  rtl: true
})
export default {
    layout: 'home',
    el: '#app',
    components:{
      SlideGroup:SlideGroup
    },

    data: () => ({
      image: 'https://dkstatics-public.digikala.com/digikala-products/117602485.jpg?x-oss-process=image/resize,m_fill,h_2625,w_2000/quality,q_90',
      list: [
          "https://dkstatics-public.digikala.com/digikala-products/117602485.jpg?x-oss-process=image/resize,m_fill,h_2625,w_2000/quality,q_90",
          "https://dkstatics-public.digikala.com/digikala-products/117602487.jpg?x-oss-process=image/resize,m_fill,h_2625,w_2000/quality,q_90",
          "https://dkstatics-public.digikala.com/digikala-products/117602491.jpg?x-oss-process=image/resize,m_fill,h_2625,w_2000/quality,q_90",
      ],
      items: ['M', 'L', 'XL', 'XXL'],
      model: null,
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
    }),
    methods: {
      set_img(l){
          this.image = l
      }
    },
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

.sider{
    font-family: 'Vazir', sans-serif;
    width: 50%;
    height: 500px;
    background-color: white;
    color: black;
    text-align: right;

}
.off{
    text-decoration-line: line-through;
}
.price span{
    color: red
}
.price span{
    font-size: 30px;

}
#id_size{
    width: 10%;
    overflow: hidden;
}



    * {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial;
}

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
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* The expanding image container */
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

/* Closable button inside the expanded image */
.closebtn {
  position: absolute;
  top: 10px;
  right: 15px;
  color: white;
  font-size: 35px;
  cursor: pointer;

}

</style>

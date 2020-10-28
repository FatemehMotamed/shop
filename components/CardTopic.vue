<template>


       <v-container>
          <v-row class="mt-10">

            <v-col cols="12" md="3" sm="3"></v-col>
            <v-col cols="12" md="2" sm="2"  v-for="item in items">
            <v-card class="card_box">
              <img :src="item">
              <p>لباس مردانه</p>
            </v-card>
          </v-col>
        </v-row>
       </v-container>


</template>

<script>
    export default {
        name: "CardTopic",
        data(){
            return{
                items :[
                    'https://dkstatics-public.digikala.com/digikala-categories/535.jpg',
                    'https://dkstatics-public.digikala.com/digikala-categories/536.jpg',
                    'https://dkstatics-public-2.digikala.com/digikala-categories/537.jpg',
                ]
            }
        }
    }
</script>

<style scoped>
  .card_box{
    width: 12vW;
    position: relative;
    font-family: 'Markazi Text', serif;
    font-size: 1.5vw;
    font-weight: bold;
    height: 12vw;

  }
  .card_box p{
    position: absolute;
    bottom: -1.2vw;
    background: rgb(0, 0, 0);
    background: rgba(0, 0, 0, 0.67);
    color: #f1f1f1;
    width: 100%;
    height: 25%;
    text-align: center;
  }
  .card_box p:hover{
    background: rgb(0, 0, 0);
    background:rgba(255,255,255, 0.9);
    color: black;
  }
  .card_box img{
    width: 100% !important;
  }
</style>

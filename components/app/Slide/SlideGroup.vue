<template>

  <v-sheet
    class="mx-auto slide_group_box"
    elevation="8"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      active-class="success"
      show-arrows
    >
      <v-slide-item
        v-for="item in items"
      >
        <v-card
          class="ma-4 slide_card"
          @click="toggle"
        >
          <img :src="item">
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

</template>

<script>
    export default {
        name: "SlideGroup",
        data(){
            return{
                model: null,
                items:[
                    'https://dkstatics-public.digikala.com/digikala-products/117602102.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/117642937.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/117596894.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/116936395.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/117603487.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/117289581.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/116936208.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/118966895.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/117690088.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public-2.digikala.com/digikala-products/111462030.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/119350798.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/117367287.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/119228249.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/120802249.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/119049626.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/3350742.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/110842370.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/117672045.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/120491191.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/117680612.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/114283383.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/117612307.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                ]
            }
        }
    }
</script>

<style scoped>
  .slide_group_box{
    width: 90vw;
  }
  .slide_card{
    height:20vw;
    width:15vw;
  }

  .slide_card :hover{
    -ms-transform: scale(1.2); /* IE 9 */
  -webkit-transform: scale(1.2); /* Safari 3-8 */
  transform: scale(1.2);
  }

  .slide_card img{
    width: 15vw;
    height: 20vw;
  }

</style>

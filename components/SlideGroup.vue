<template>

  <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="800"
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
<!--          <img :src="item">-->
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
                ]
            }
        }
    }
</script>

<style scoped>
  .slide_card{
             height:200px;
          width:100px;
  }

  .slide_card img{
    width: 8vw;
    height: 15vw;
  }

</style>

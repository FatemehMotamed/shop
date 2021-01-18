<template>
      <div>
    <v-app>
      <v-carousel
    cycle
    height="700"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
<!--          <div class="txt">-->

<!--          </div>-->
          <div class="display-3">
            <v-img :src="slide.src"></v-img>
          </div>
        </v-row>
    </v-carousel-item>
  </v-carousel>

    </v-app>
  </div>
</template>

<script>
    export default {
        name: "Slide",
        data () {
      return {
        slides: [
            {
                src: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/06bc2e47d662caa4537fb0087e63d6fb682a9e18_1602693433.jpg?x-oss-process=image/quality,q_80'
            },

            {
                src: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/bdfa9dff6a732f17c5b8aa57090d9bd37f1861b4_1602693348.jpg?x-oss-process=image/quality,q_80'
            },
        ],
      }
    },
    }
</script>

<style scoped>

</style>

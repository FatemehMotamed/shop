<template>
  <v-carousel :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in images"
      :key="i"
      :src="item"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
import EventBus from '@/assets/js/eventBus.js'

  export default {
    created(){
        EventBus.$on('images', (images) => {
            this.images = images
        })
    },

    data () {
      return {
        images: [],
      }
    },
  }
</script>
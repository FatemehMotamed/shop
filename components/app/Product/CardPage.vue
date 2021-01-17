<template>
  <div>
    <v-card
    class="mx-auto"
    light
    max-width="344">
    
    <v-img
      :src="tile_data.image"
      height="250px"
      width="200px"
    ></v-img>

    <v-card-title style="text-align: right">
      {{ tile_data.title }}
    </v-card-title>

    <v-card-subtitle>
      <div class="row justify-space-between">
        <div><span style="color: gray; font-size: 0.8em !important">{{ tile_data.name }}</span></div>
        <div><span style="color: gray; font-size: 0.9em !important">{{ tile_data.price }}</span></div>
      </div>
    </v-card-subtitle>

  </v-card>
  </div>
</template>

<script>
  export default {

    props:{
      tile_data:{
        type: Object,
        default: {},
      },
    },
    data: () => ({
      show: false,
    }),
  }
</script>
<template>
  <v-layout style="height:38vw">
    <v-flex xs12 sm8 offset-sm2>
      <v-layout class="justify-center">


  <v-sheet
  style="margin-top:12vw !important"
    class="mx-auto"
    max-width="100vw"
    color="white"

  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      active-class="success"
      show-arrows
    >
      <v-slide-item
        v-for="n in product"
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
        <card-page :tile_data="n"></card-page>
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
</template>


<script>
export default {

  props:{
    product:{
      type: Array,
      default: {},
    }
  }
    
}
</script>

<style scoped>

</style>
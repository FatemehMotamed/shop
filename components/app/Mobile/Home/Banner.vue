<template>
  <v-sheet
    class="mx-auto"
    max-width="800"

  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      active-class="success"
    >
      <v-slide-item
        v-for="n in banner"
        :key="n"
        v-slot="{ active, toggle }"
      >

        <v-card
          :color="active ? undefined : 'grey lighten-1'"
          class="ma-4"
          height="200"
          width="300"
          @click="toggle"
        >

            <img height="200" width="300"
                :src="n"
                alt="Beauty"
            >
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
  export default {
      props:{
          banner:{
              type:Array,
              default: [],
          },

      },
    data: () => ({
      model: null,
    }),
  }
</script>
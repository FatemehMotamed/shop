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
        props:['items'],
        data(){
            return{
                model: null,
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

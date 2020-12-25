<template>

  <div class="float-left" v-if="disable">
    <v-btn disabled type="submit" class="custom_btn" :width="width" :height="height"
           v-bind:style="{ fontSize: fontSize + 'vw' }"  >
      {{ txt }}
      <v-icon :color="iconcolor">{{ icon }}</v-icon>
    </v-btn>
  </div>

  <div  class="float-left" v-else>
    <v-btn type="submit" class="custom_btn" :width="width" :height="height"
           v-bind:style="{ backgroundColor:bcolor+'!important',Color:fcolor+'!important',fontSize: fontSize + 'vw' }"  >
      {{ txt }}
      <v-icon :color="iconcolor">{{ icon }}</v-icon>
    </v-btn>
  </div>



</template>

<script>
    export default {
        name: "index",
        props:['txt','bgcolor','fontcolor','fontsize','icon','iconcolor', 'width', 'height','disable'],
        data() {
                return {
                    fontSize: parseInt(this.fontsize),
                    bcolor:this.bgcolor,
                    fcolor:this.fontcolor
                }
            }
    }
</script>

<style scoped>
  .custom_btn{
    font-family: 'Markazi Text', serif !important;
    font-weight: bold;
  }

</style>

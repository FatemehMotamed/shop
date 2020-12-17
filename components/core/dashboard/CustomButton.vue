<template>

  <v-btn type="submit" class="custom_btn" :width="width" :height="height"
         v-bind:style="{ backgroundColor:bcolor+'!important',Color:fcolor+'!important',fontSize: fontSize + 'vw' }"  >
    {{ txt }}
    <v-icon :color="iconcolor">{{ icon }}</v-icon>
  </v-btn>
</template>

<script>
    export default {
        name: "index",
        props:['txt','bgcolor','fontcolor','fontsize','icon','iconcolor', 'width', 'height'],
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

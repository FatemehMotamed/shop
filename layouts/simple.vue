<template>
  <div>
    <v-app>

      <v-container class="simple_header">
        <v-row>
          <v-col cols="12" md="4" sm="4" offset-md="5" offset-sm="5">
            <h1>BRAND NAME</h1>
          </v-col>
        </v-row>
        <br>
        <v-card elevation="2" style="height: 1px"></v-card>
      </v-container>

        <Nuxt />

    </v-app>




  </div>
</template>


<script>

export default {
    name:'simple',
    components: {

    },


}
</script>

<style>
.simple_header h1{
  font-family: 'Markazi Text', serif !important;
  font-size: 3vw;
}

</style>

<template>
<div>
  <v-app>


  </v-app>
</div>
</template>

<script>
    export default {
        name: "test",
        layout: "tets_layout"
    }
</script>

<style scoped>
  .search_box{
    color: #47494e;
    position: relative;
  }
  .search_icon{
    color:#DDDDDD;
    position: absolute;
    right: 0;
  }

  .v-text-field ::before {
    border-color: black !important;
  }

  .v-text-field ::after {
    border-color: orangered !important;
  }
.brand{
text-align: center;
}
  hr{
    margin-top: 5%;
  }

</style>

<template>
 <div>

    <v-container class="menu_box">
      <v-row >
        <v-col
          cols="12"
          md="12"
        >


        </v-col>

      </v-row>

    </v-container>

 </div>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style scoped>

    .search_box{
    color: #47494e;
    position: relative;
  }
  .search_icon{
    color:dimgrey;
    position: absolute;
    right: 0;
  }

  .v-text-field ::before {
    border-color: black !important;
  }

  .v-text-field ::after {
    border-color: blueviolet !important;
  }
.brand{
text-align: center;

}
  hr{
    margin-top: 5%;
  }

.menu_box{
      position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}

</style>

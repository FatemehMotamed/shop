<template>
 <div>

    <v-container class="logo_box" fluid>
      <v-row >


        <v-col md="1" sm="1">
                <font-awesome-icon :icon="['fas', 'shopping-cart']" slot="prepend" class="cart_basket" />
      </v-col>

        <v-col sm="2" md="2">
          <v-btn outlined to="/login" style="width:13vw; height: 3.8vW">
                وارد شوید
                <font-awesome-icon :icon="['fas', 'shopping-bag']" slot="prepend" style="color:dimgrey;" />
              </v-btn>
        </v-col>

        <v-col md="2" sm="2"></v-col>
        <v-col
          cols="12"
          md="5"
          sm="5"
        >
        <v-text-field
          label=""
          placeholder="        جستجوی محصولات"
          class="search_box dir mr-5"
          dir="rtl"
          filled


        >
          <font-awesome-icon :icon="['fas', 'search']" slot="prepend" class="search_icon" />

        </v-text-field>

        </v-col>
        <v-col
      md="2"
      sm="2">
          <h1 class="brand mr-8 mt-2">BRAND NAME</h1>

      </v-col>

      </v-row>

    </v-container>

 </div>
</template>

<script>
    export default {
        name: "Logo2"
    }
</script>

<style scoped>

    .search_box{
    color: #47494e !important;
    position: relative;
  }

  .search_icon{
    color:dimgrey;
    position: absolute;
    right: 0.8vw;
  }

  .v-text-field ::before {
    border-color: transparent !important;
  }

  .v-text-field ::after {
    border-color: darkred !important;
  }
.brand{
  text-align: right;
  color: darkred!important;
  font-size: 2.5vw;

}
  hr{
    margin-top: 5%;
  }

.logo_box{
    /*  position: absolute;*/
    /*top: 0;*/
    /*left: 0;*/
    /*z-index: 1;*/
  font-family: 'Markazi Text', serif;
}
  .logo_box a{
    color: #47494e !important;
    text-decoration: none;
  }
.cart_basket{

  color:dimgrey; width: 28%!important;
  height: 28%!important;
  float: right;
  margin-right: 2%;
  margin-top: 12%;

}
</style>

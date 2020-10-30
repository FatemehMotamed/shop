<template>
 <div>

    <v-container class="logo_box" fluid>
      <v-row>

        <v-col md="1" sm="1">
                <font-awesome-icon :icon="['fas', 'shopping-cart']" slot="prepend" class="cart_basket" />
      </v-col>

        <v-col sm="2" md="2">
          <v-btn outlined to="/login" class="login_btn mt-2">
                وارد شوید
                <v-icon
                  dark
                  right
                  class="account_icon"
                >
                  mdi-account
              </v-icon>
              </v-btn>
        </v-col>

        <v-col md="1" sm="1"></v-col>
        <v-col
          cols="12"
          md="5"
          sm="5"
        >
        <v-text-field
          label=""
          placeholder="        جستجوی محصولات"
          class="search_box mt-2 "
          dir="rtl"
          filled

        >
          <font-awesome-icon :icon="['fas', 'search']" slot="prepend" class="search_icon" />

        </v-text-field>

        </v-col>
        <v-col
      md="3"
      sm="3">
          <h1 class="brand mr-16 mt-2">BRAND NAME</h1>

      </v-col>

      </v-row>

      <v-row>
        <v-col md="12" sm="12">
          <div class="bar rounded-t-xl"><nav-page2 class="nav_bar"></nav-page2></div>
        </v-col>
      </v-row>

    </v-container>

 </div>
</template>

<script>
  import NavPage2 from "@/components/NavPage2";
    export default {
        name: "Logo2",
        components: {
        NavPage2:NavPage2,

    },
    }
</script>

<style scoped>

    .search_box{
    color: #47494e !important;
    position: relative;
      /*height: 5.5vw;*/
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
    border-color: #19424e !important;
  }
.brand{
  text-align: right;
  color: #19424e!important;
  font-size: 3vw;

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
  margin-top: 25%;

}
  .nav_bar{
    background-color: transparent!important;
    padding-left: 25vw;

  }
  .bar{
    background-color: #19424e;
    margin-top: -2vw;

  }
  .login_btn{
    width:13vw!important;
    height: 3.8vW!important;

  }
  .account_icon{
    width: 30%!important;
    height: 30%!important;

  }
</style>

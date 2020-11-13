<template>
 <div>

    <v-container class="logo_box">
      <v-row >
        <v-col
          cols="12"
          md="2"
          sm="2"
          lg="2"
          xl="2"
          offset-md="1"
          offset-sm="2"
        >
        <v-text-field
          label=""
          placeholder="        جستجوی محصولات"
          class="search_box dir"
          dir="rtl"

        >
          <font-awesome-icon :icon="['fas', 'search']" slot="prepend" class="search_icon" />

        </v-text-field>

        </v-col>
        <v-col
      md="4"
      lg="4"
      xl="4"
      sm="3"
      offset-md="2"
      offset-sm="1">
          <h1 class="brand">BRAND NAME</h1>
          <hr />


      </v-col>
        <v-col
      md="2"
      sm="2"
      offset-md="1">
          <div class="mt-5 float-right login">
            <label class="mr-2"><nuxt-link to="/login">وارد شوید</nuxt-link></label>
            <font-awesome-icon :icon="['fas', 'shopping-bag']" slot="prepend" style="color:dimgrey;" />
          </div>
      </v-col>
      </v-row>

    </v-container>

 </div>
</template>

<script>
    export default {
        name: "Logo"
    }
</script>

<style scoped>

    .search_box{
    color: #47494e !important;
    position: relative;
      font-size: 1.3vw;
  }

  .search_icon{
    color:dimgrey;
    position: absolute;
    right: 0;
    top: 33%;
  }

  .v-text-field ::before {
    border-color: black !important;
  }

  .v-text-field ::after {
    border-color: #19424e !important;
  }
.brand{
text-align: center;
  font-size: 3vw;

}
  hr{
    margin-top: 5%;
  }

.logo_box{
      position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  font-family: 'Markazi Text', serif;
}
  .logo_box a{
    color: #47494e !important;
    text-decoration: none;
  }
  .login{
    font-size: 1.3vw;
  }
</style>

<template>
<div>
  <v-app>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="2"
          offset="1"
        >
        <v-text-field
          label=""
          placeholder="     جستجوی محصولات"
          class="search_box dir"
          dir="rtl"

        >
          <font-awesome-icon :icon="['fas', 'search']" slot="prepend" class="search_icon" />

        </v-text-field>

        </v-col>
        <v-col
      md="4"
      offset="1">
          <h2 class="brand">BRAND NAME</h2>
          <hr />


      </v-col>
        <v-col
      md="2"
      offset="1">
        <p>وارد شوید</p>

      </v-col>
      </v-row>

    </v-container>

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

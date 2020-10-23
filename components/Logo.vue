<template>
 <div>

    <v-container class="logo_box">
      <v-row >
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
      offset="2">
          <h2 class="brand">BRAND NAME</h2>
          <hr />


      </v-col>
        <v-col
      md="2"
      offset="1">
          <div class="mt-5 float-right">
            <label class="mr-2">وارد شوید</label>
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

.logo_box{
      position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}

</style>

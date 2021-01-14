<template>
    <v-row class="box">
        <v-col cols="12" md="2" sm="2">
          <v-text-field
          label=""
          placeholder=" جستجوی برند (فارسی یا انگلیسی)"
          class="search_box dir"
          dir="rtl"
        >
          <font-awesome-icon :icon="['fas', 'search']" slot="prepend" class="search_icon" />

        </v-text-field>
        </v-col>
        <v-col cols="12" md="6" sm="6"></v-col>
        <v-col cols="12" md="4" sm="4" dir="rtl" class="pr-10"><p>برندهای ما</p></v-col>
      </v-row>
</template>

<script>
    export default {
        name: "SearchBrand"
    }
</script>

<style scoped>
  .box p{
  font-family: 'Markazi Text', serif !important;
  font-weight: bold;
  font-size: 2vw;
}

.box label{
font-family: 'Markazi Text', serif !important;
  font-weight: bold;
  font-size: 1.5vw;
  color: #47494e;
}

  .search_box{
    color: #47494e !important;
    position: relative;
    font-family: 'Markazi Text', serif !important;
  }

  .search_icon{
    color:dimgrey;
    position: absolute;
    right: -3vw;
  }

  .v-text-field ::before {
    border-color: black !important;
    width: 20vw !important;
  }

  .v-text-field ::after {
    border-color: #19424e !important;
    width: 20vw !important;
  }


</style>

<template>
  <div>
    <v-container class="main_box">
      <v-row>
          <v-col cols="12" md="4" sm="4" offset-md="5" offset-sm="5">
            <p class="ml-5">ورود یا ثبت‌نام</p>
          </v-col>
        </v-row>
      <v-row >
        <v-col cols="12" md="5" offset-sm="4" offset-md="4" >
          <v-card class="card ml-n8">
          <v-text-field style="text-align: center;" label="شماره موبایل یا ایمیل"  dir="rtl"></v-text-field>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<script>
    export default {
        name: "index",
        layout: 'simple'
    }
</script>

<style scoped>
  .main_box{
    font-family: 'Markazi Text', serif !important;
  }
  p{
    font-size: 2.5vw;
  }
  .v-text-field ::before {
    border-color: black !important;
    color: #7F828B !important;

  }

  .v-text-field ::after {
    border-color: cadetblue !important;
    color: black !important;
  }
.card{
  width: 40vw;
}
</style>

<template>
  <div>
    <v-container class="main_box">
      <v-row class="mt-10">
          <v-col cols="12" md="4" sm="4" offset-md="5" offset-sm="5">
            <p class="ml-5">ورود یا ثبت‌نام</p>
          </v-col>
        </v-row>
      <v-row >
        <v-col cols="12" md="5" offset-sm="4" offset-md="4" >
          <v-card class="card ml-n8">
            <v-row class="pt-15">
              <v-text-field  label="شماره موبایل یا ایمیل" ></v-text-field>
              <v-btn class="btn ml-10 mt-10">ادامه</v-btn>
            </v-row>

            <v-row class="pt-15">
          <v-col class="txt" cols="12" offset-md="2" md="8" sm="12">
            <p>با ورود و یا ثبت نام در دیجی‌استایل، شما شرایط و قوانین استفاده از تمام سرویس های سایت دیجی‌کالا و قوانین حریم خصوصی آن را می‌پذیرید. </p>
        </v-col>
      </v-row>

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
     width: 25vw !important;
      margin-left: 8vw !important;


  }

  .v-text-field ::after {
    border-color: cadetblue !important;
    color: black !important;
     width: 25vw !important;
      margin-left: 8vw !important;
  }
  .card{
    width: 40vw;
  }
  .btn{
    background-color: #d0d3d4 !important;
    width: 30vw;
  }

  .txt p{
    text-align: center !important;
    font-size: 1.3vw;
  }

</style>

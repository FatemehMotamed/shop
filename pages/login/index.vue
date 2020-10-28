<template>
  <div>
    <v-container class="main_box">
      <v-row >
          <v-col cols="12" md="4" sm="4" offset-md="5" offset-sm="5">
            <p class="ml-3">ورود یا ثبت‌نام</p>
          </v-col>
        </v-row>
      <v-row >
        <v-col cols="12" md="5" offset-sm="4" offset-md="4" >
          <v-card class="card ml-n6">
            <v-row class="pt-12">
              <v-text-field dir="rtl"  label="" placeholder="                    شماره موبایل یا ایمیل" ></v-text-field>
              <v-btn class="btn ml-8 mt-10">ادامه</v-btn>
            </v-row>

            <v-row class="pt-5">
          <v-col class="txt" cols="12" offset-md="2" md="8" sm="12">
            <p>با ورود و یا ثبت نام در دیجی‌استایل، شما شرایط و قوانین استفاده از تمام سرویس های سایت دیجی‌کالا و قوانین حریم خصوصی آن را می‌پذیرید </p>
        </v-col>
      </v-row>

        </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3" sm="3" offset-md="5" offset-sm="5">
          <p class="footnote"> Login Powered by </p>
          <img class="ml-4" src="https://www.digistyle.com/static/files/d4af64f8.svg">
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
      margin-left: 5vw !important;


  }

  .v-text-field ::after {
    border-color: cadetblue !important;
    color: black !important;
     width: 25vw !important;
      margin-left: 5vw !important;
  }
  .card{
    width: 32vw;
  }
  .btn{
    background-color: #d0d3d4 !important;
    width: 28vw;
  }

  .txt p{
    text-align: center !important;
    font-size: 1.3vw;
  }
.footnote{
  font-size: 0.9em;
  color: #7f828b;
  margin-left: 2.1vw;
}

</style>

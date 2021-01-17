<template>
    <div>
      <v-container class="box4">
        <v-row dir="rtl">

          <v-col cols="12" md="2" sm="2" ></v-col>
          <v-col cols="12" md="2" sm="2"  >
            <img src="@/assets/images/7.PNG">
          <h1>ضمانت بازگشت کالا</h1><p>اگر کالا برای شما مناسب نبود تا هفت روز می توانید با یک تماس آن را تعویض کنید.</p>
          </v-col>
          <v-col cols="12" md="1" sm="1" ></v-col>
          <v-col cols="12" md="2" sm="2"  >
            <img src="@/assets/images/8.PNG">
            <h1>تحویل سریع و آسان</h1><p>سفارش های بیش از ۲۰۰ هزار تومان را در تهران و شهرستان ها، رایگان تحویل بگیرید.</p>
          </v-col>
          <v-col cols="12" md="1" sm="1" ></v-col>
          <v-col cols="12" md="2" sm="2"  >
            <img src="@/assets/images/9.PNG">
            <h1>کالای اورجینال</h1><p>نماینده رسمی برندهاست، با اطمینان از اورجینال بودن کالا خرید کنید</p>
          </v-col>
        </v-row>


      </v-container>
    </div>
</template>

<script>
    export default {
        name: "FooterProduct"
    }
</script>

<style scoped>
    .box4 h1{
    font-size: 2vw;
    font-family: 'Markazi Text', serif !important;
  }
    .box4 p{
    font-size: 1.2vw;
    font-family: 'Markazi Text', serif !important;
  }
    .box4 img{
    width: 14vw;
    height: 12vw;
  }

</style>

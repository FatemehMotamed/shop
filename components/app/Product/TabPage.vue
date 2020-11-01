<template>
    <v-card>
    <v-toolbar
      color="#BDBDBD"
      flat
      prominent
    >

      <template>
        <v-tabs
          v-model="tabs"
          right
          light
          class="grey lighten-5"
          style="font-family: 'Vazir', sans-serif; !important"
        >
          <v-tab>
            نظرات کاربران
          </v-tab>
          <v-tab>
            مشخصات محصول
          </v-tab>

        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs" style="font-family: 'Vazir', sans-serif; !important"
      light
      class="grey lighten-5">
      <v-tab-item>
        <v-card flat>
          <v-card-text>

        <h2 style="float:right">خوب</h2>
        <br>
        <br>
        <span style="float:right">نوشته شده توسط ماهان کبیر، خریدار سایز xl</span>
        <span style="float:left"> خریداری شده از <a>آدیوس</a></span>
        <br>
        <br>

        <h3 style="float:right">اندازه خودتون بگیرید نه کوچیکتر و نه بزرگتر </h3>
        <br>
        <br>
        <div style="float:right">
          <span>خرید این محصول را حتماً پیشنهاد می کنم. </span>
          <v-icon color="blue">fa-thumbs-up</v-icon> 
        </div>
        <br>
        <br>
        <v-divider></v-divider>
        <br>
        <p style="text-align:right">لطفا قبل از نوشتن نظر خود در مورد این محصول، قوانین و ضوابط را مطالعه کنید. </p>
        <v-col>
          <v-text-field
            label="عنوان نظر"
            
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field style="width:61.8vw !important;"
            label="نظر خود را بنویسید..."
          ></v-text-field>
              <v-btn
      depressed
      color="primary"
    >
      ثبت نظر
    </v-btn>
        </v-col>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item style="font-family: 'Vazir', sans-serif; !important"
          dir="rtl"
          light
>
        <v-card flat style="width:65.9vw !important;">
          <v-card-title style="text-align:right">
            <span>مشخصات کلی محصول</span>

          </v-card-title>
          <v-card-text>
            <v-row style="float:right">


              <div style="font-size:1.6vw; text-align: right">
                <span class="info_product"> :جنس</span>
                <br>
                <span class="info_product"> :مناسب فصل</span>
                <br>
                <span class="info_product"> :قد آستین</span>
                <br>
                <span class="info_product"> :طرح پارچه</span>
              </div>
              <div style="font-size:1.6vw; margin-right:10vw; text-align: right">
                <span class="info_product">نخ، پلی استر   </span>
                <br>
                <span class="info_product">بهار، پاییز، زمستان   </span>
                <br>
                <span class="info_product">بلند   </span>
                <br>
                <span class="info_product">طرح دار   </span>
              </div>
            </v-row>
            <br>
            <br>
            <br>
            <br>
            <br>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
  export default {
    rtl: true,
    data () {
      return {
        tabs: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>

<style scoped>

  .info_product{
    float: right
  }
  .v-text-field{
     
}
</style>
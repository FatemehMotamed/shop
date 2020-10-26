<template>
  <div dir="rtl" class="box">
    <v-container>
      <v-row>

        <v-col cols="12" md="2" sm="2">
          <v-list>
            <v-list-item class="titr">خدمات مشتریان</v-list-item>
            <v-list-item><nuxt-link to="#">پاسخ به پرسش‌های متداول</nuxt-link></v-list-item>
            <v-list-item><nuxt-link to="#">رویه‌های بازگرداندن کالا</nuxt-link></v-list-item>
            <v-list-item><nuxt-link to="#">شرایط استفاده</nuxt-link></v-list-item>
            <v-list-item><nuxt-link to="#">حریم خصوصی</nuxt-link></v-list-item>

          </v-list>
        </v-col>
        <v-col cols="12" md="2" sm="2">
          <v-list>
            <v-list-item class="titr">اطلاعات</v-list-item>
            <v-list-item><nuxt-link to="#">درباره ما</nuxt-link></v-list-item>
            <v-list-item><nuxt-link to="#">تماس با ما</nuxt-link></v-list-item>
            <v-list-item><nuxt-link to="#">پشتیبانی: ۹۱۰۲۹۹۰۰-۰۲۱</nuxt-link></v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="5" sm="5">
          <v-row>
            <v-list>
            <v-list-item class="titr">ثبت‌نام در خبرنامه </v-list-item>
            <v-list-item>با ثبت‌نام در خبرنامه دیجی‌استایل، اولین نفری باشید که از جدیدترین محصولات، جشنواره‌ها و فروش‌های ویژه ما مطلع می‌شوید.</v-list-item>
          </v-list>
          </v-row>
          <v-row>
            <v-col cols="12" md="8" sm="6"><v-text-field label="آدرس ایمیل شما"></v-text-field></v-col>
            <v-col cols="12" md="4" sm="2"><v-btn class="btn mt-3">ثبت ایمیل</v-btn></v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="2" sm="2" dir="ltr" class="mt-2 pl-1">
          <v-row class="titr"><label style="font-size: 2em;">BRAND NAME</label><label style="font-size: 0.9em">invent your style</label></v-row>
          <v-row class="mt-12 ml-2"><v-btn outlined>دانلود اپلیکیشن</v-btn></v-row>
          <v-row class="mt-5">
            <v-col cols="12" md="2" sm="2"><font-awesome-icon :icon="['fab', 'twitter']" slot="prepend"  /></v-col>
            <v-col cols="12" md="2" sm="2"><font-awesome-icon :icon="['fab', 'facebook-square']" slot="prepend"  /></v-col>
            <v-col cols="12" md="2" sm="2"><font-awesome-icon :icon="['fab', 'telegram']" slot="prepend"  /></v-col>
            <v-col cols="12" md="2" sm="2"><font-awesome-icon :icon="['fab', 'instagram-square']" slot="prepend"  /></v-col>
          </v-row>

        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script>
    export default {
        name: "FooterPage"
    }
</script>

<style scoped>
  .btn{
    background-color: black !important;
    color: #F5F5F5 !important;
  }

  .box{
    font-family: 'Markazi Text', serif !important;
    font-size: 1.4vw;

  }
  .titr{
    font-weight: bold;
    font-size: 1.5vw;

  }
  a{
    text-decoration: none !important;
    color: gray !important;
  }
  a:hover{
    font-size: 1.5vw;
    color: black !important;

  }
</style>

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
            <v-list-item><nuxt-link to="/about">درباره ما</nuxt-link></v-list-item>
            <v-list-item><nuxt-link to="/contact">تماس با ما</nuxt-link></v-list-item>
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
          <v-row class="mt-12 ml-2"><v-btn outlined class="btn2"><label>دانلود اپلیکیشن</label></v-btn></v-row>
          <v-row class="mt-5">
            <v-col cols="12" md="2" sm="2"><font-awesome-icon :icon="['fab', 'twitter']" slot="prepend"  /></v-col>
            <v-col cols="12" md="2" sm="2"><font-awesome-icon :icon="['fab', 'facebook-square']" slot="prepend"  /></v-col>
            <v-col cols="12" md="2" sm="2"><font-awesome-icon :icon="['fab', 'telegram']" slot="prepend"  /></v-col>
            <v-col cols="12" md="2" sm="2"><font-awesome-icon :icon="['fab', 'instagram-square']" slot="prepend"  /></v-col>
          </v-row>

        </v-col>

      </v-row>

      <v-row>
        <v-col cols="12" md="2" sm="2"><img src="https://www.digistyle.com/static/files/50a7c6fb.png"></v-col>
        <v-col cols="12" md="2" sm="2"><img src="https://www.digistyle.com/static/files/50a7c6fb.png"></v-col>
        <v-col cols="12" md="2" sm="2"><img src="https://www.digistyle.com/static/files/50a7c6fb.png"></v-col>
        <v-col cols="12" md="5" sm="5">
          <h3>فروشگاه اینترنتی مد و لباس</h3>
          <p class="mt-5">دیجی‌استایل، پس از تجربه‌ی موفق فروشگاه اینترنتی دیجی‌کالا به صورت تخصصی پا به عرصه مد، پوشاک و سبک زندگی گذاشت تا همان تجربه‌ی شیرین، در قالبی نو تکرار شود. در دیجی ‌استایل می‌توانید همه آنچه مرتبط با مد و پوشاک است؛ از انواع لباس، کیف و کفش تا محصولات آرایشی و بهداشتی، لوازم خانه و اکسسوری‌هایی مانند ساعت مچی و عینک آفتابی را با تخفیف ویژه در حراج ها، پیدا کنید و به سادگی</p>
        </v-col>
        <v-col cols="12" md="1" sm="1"></v-col>
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
    width: 6vw;
  }
  .btn2{
    width: 9vw;
  }
  .btn2 label{
    font-size: 1.1vw;
  }
  .box{
    font-family: 'Markazi Text', serif !important;
    font-size: 1.4vw;
    background-color: #ECF0F1 !important;

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
  .v-list{
    background-color: #ECF0F1 !important;
  }
  p{
    font-size:0.9em;
  }
</style>

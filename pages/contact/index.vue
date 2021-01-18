<template>
    <div dir="rtl" style="font-family: 'Vazir', sans-serif; text-align:right; color:black" class="white">
    <v-container col-7>
        <div>
            <h1>تماس با دیجی‌استایل</h1>
            <br>
            <br>
            <span style="font-size:1.2vw">لطفاً پیش از ارسال ایمیل و یا تماس تلفنی، پرسش های متداول را مشاهده کنید.</span>
            <v-btn
            class="ma-7"
            :loading="loading"
            :disabled="loading"
            color="info"
            >
            پرسش‌های متداول
            </v-btn>

        </div>
        <hr>
        <div>
            <br>
            <br>
            <h2>فرم تماس</h2>
            <br>
            <br>
            <span style="font-size:1.2vw">برای پیگیری یا سوال درباره سفارش خود، فرم زیر را تکمیل کنید.</span>
            <br>
            <v-row align="center">
                <div class="col-6">
                    <v-col>
                        <v-select
                        style="width:100vw !important;"
                        :items="items"
                        label="موضوع"
                        light
                        color="grey darken-4"
                        ></v-select>
                    </v-col>
                    <v-col>
                    <v-text-field
                        style="width:100vw !important;"
                        light
                        class="grey lighten-5"
                        label="ایمیل"
                        color="grey darken-4"
                    ></v-text-field>
                    </v-col>
                </div>
                <div class="col-6">
                    <v-col>
                    <v-text-field
                        style="width:100vw !important;"
                        light
                        class="grey lighten-5"
                        label="نام و نام خانوادگی"
                        color="grey darken-4"
                    ></v-text-field>
                    </v-col>
                    <v-col>
                    <v-text-field
                        style="width:100vw !important;"
                        light
                        class="grey lighten-5"
                        label="تلفن تماس"
                        color="grey darken-4"
                    ></v-text-field>
                    </v-col>
                </div>

            </v-row>
                <v-textarea
                style="width:100vw !important;"
                autocomplete="email"
                label="متن پیام"
                light
                color="grey darken-4"

                ></v-textarea>
            <div style="padding:3vw; text-align:center; border-style:dotted; border-color: #0091EA; font-size:1.1vw">
                <span>عکس و یا ویدیو خود را جهت بارگذاری داخل کادر بیاندازید</span>
                <br>
                <br>
                <span style="color: gray">( ۵ تصویر JPG یا PNG حداکثر ۱ مگابایت، یک ویدیو MP4 حداکثر ۵۰ مگابایت ) </span>
                <v-file-input
                    multiple
                    label="انتخاب عکس یا ویدیو"
                    light
                    class="grey lighten-5"
                ></v-file-input>
            </div>
            <br>
            <br>
            <hr>
            <br>
            <br>
            <div>
                <h1>تعطیلات دیجی‌استایل</h1>
                <br>
                <br>
                <span style="font-size:1.2vw">در روزهای زیر در سال، به دلیل تعطیلی دیجی‌استایل هیچ‌گونه پاسخگویی، سرویس‌دهی و خدماتی ندارد:</span>
                <br>
                <br>
                <v-row align="center" justify="center" style="text-align:center">
                    <div style="border-style:solid; padding:2vw; margin:10px">
                        <span>۱ فروردین</span>
                        <hr>
                        <span style="font-size:0.8vw; color:gray">جشن نوروز</span>
                    </div>

                    <div style="border-style:solid; padding:2vw; margin:10px">
                        <span>۱۳ فروردین</span>
                        <hr>
                        <span style="font-size:0.8vw; color:gray">روز طبیعت</span>
                    </div>

                    <div style="border-style:solid; padding:2vw; margin:10px">
                        <span>۱۴ خرداد</span>
                        <hr>
                        <span style="font-size:0.8vw; color:gray">رحلت امام خمینی (ره)</span>
                    </div>

                    <div style="border-style:solid; padding:2vw; margin:10px">
                        <span>۱۸ شهریور</span>
                        <hr>
                        <span style="font-size:0.8vw; color:gray">تاسوعا</span>
                    </div>
                </v-row>
                <v-row align="center" justify="center" style="text-align:center">
                    <div style="border-style:solid; padding:2vw; margin:10px">
                        <span>۱۹ شهریور</span>
                        <hr>
                        <span style="font-size:0.8vw; color:gray">عاشورا</span>
                    </div>

                    <div style="border-style:solid; padding:2vw; margin:10px">
                        <span>۲۷ مهر</span>
                        <hr>
                        <span style="font-size:0.8vw; color:gray">اربعین حسینی</span>
                    </div>

                    <div style="border-style:solid; padding:2vw; margin:10px">
                        <span>۵ آبان</span>
                        <hr>
                        <span style="font-size:0.8vw; color:gray">رحلت حضرت رسول اکرم</span>
                    </div>

                    <div style="border-style:solid; padding:2vw; margin:10px">
                        <span>۲۲ بهمن</span>
                        <hr>
                        <span style="font-size:0.8vw; color:gray">سالگرد پیروزی انقلاب اسلامی</span>
                    </div>
                </v-row>
            </div>
            <br>
            <br>
            <hr>
            <br>
            <br>
            <div>
                <h1>اطلاعات دیجی‌استایل</h1>
                <br>
                <br>
                <v-row>
                    <div>
                        <v-icon color="grey darken-4" style="margin-right:10px; font-size:2.5vw">fa-map-marker-alt</v-icon>
                        <span style="font-size:1.5vw; margin-right:1vw">آدرس</span>
                        <br>
                        <br>
                        <h4>دفتر مرکزی</h4>
                        <span style="font-size:1vw; color:gray">استان تهران - شهر تهران - خیابان گاندی جنوبی - نبش خیابان ۲۱ - پلاک ۲۸ </span>
                        <br>
                        <br>
                        <h4>مرکز خدمات پس از فروش</h4>
                        <span style="font-size:1vw; color:gray">لطفاً کالا را برای بازگرداندن و ارسال آن به خدمات پس از فروش دیجی‌استایل از<br> طریق پست، تنها به صندوق پستی 3469-15875 ارسال نمایید. (شما می‌توانید از<br> طریق بخش سفارشات من اقدام به بازگردانی کالا کنید) </span>
                    </div>
                <div id="map" style="margin-right:10px">
                    <v-img
                    lazy-src="https://docs.microsoft.com/nl-nl/azure/azure-maps/media/migrate-google-maps-web-app/simple-google-map.png"
                    max-height="350"
                    max-width="350"
                    src="https://docs.microsoft.com/nl-nl/azure/azure-maps/media/migrate-google-maps-web-app/simple-google-map.png"
                    ></v-img>
                </div>

                </v-row>


            </div>
            <br>
            <br>
            <hr>
            <br>
            <br>

            <div align="center" justify="center" style="text-align:center">
                <v-icon color="grey darken-4" style="margin-right:10px; font-size:2.5vw">fa-phone-volume</v-icon>
                <span style="font-size:1.5vw; margin-right:1vw">تلفن تماس و فکس</span>
                <span style="font-size:1.5vw; margin-right:1vw">۰۲۱-۶۱۹۳۰۰۰۰</span>
                <v-icon color="grey darken-4" style="margin-right:60px; font-size:2.5vw">fa-envelope</v-icon>
                <span style="font-size:1.5vw; margin-right:1vw">ایمیل سازمانی</span>
                <span style="font-size:1.5vw; margin-right:1vw">info@digistyle.com</span>

            </div>

            <br>
            <br>
            <hr>
            <br>
            <br>
            <div>
                <v-icon color="grey darken-4" style="margin-right:10px; font-size:2.5vw">fa-info-circle</v-icon>
                <span style="font-size:1.2vw; margin-right:1vw">۳۰۰۰۶۱۹۳۰۰۱۰ تنها شماره‌ای است که دیجی‌استایل از طریق آن برای کاربران پیامک (اس ام اس) ارسال می‌کند </span>
                <br>
                <span style="font-size:0.9vw; margin-right:1vw;  color:gray">بنابراین ارسال هرگونه پیامک تحت عنوان دیجی‌استایل، با هر شماره دیگری <span style="text-decoration: underline;">تخلف و سوء استفاده از نام دیجی‌استایل است</span> و در صورت دریافت چنین پیامکی، لطفاً جهت پیگیری قانونی آن را به info@digistyle.com اطلاع دهید. </span>
            </div>
            <br>
            <br>
        </div>
    </v-container>

  </div>
</template>

<script>
  import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

    export default {
        name: "index",
        data: () => ({
      items: ['پیگیری سفارش', 'خدمات پس از فروش', 'پیشنهاد', 'انتقاد یا شکایات'],
    }),
    }
</script>

<style scoped>

</style>

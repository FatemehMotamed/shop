<template>
<div>
        <div class="sider mr-16">
            <div class="row justify-space-between">
                <v-icon color="black" style="float: left;">fa-share-alt</v-icon>
                <h1><span>باینت</span></h1>
            </div>
            <br>
            <div class="float-right">
                <h3>هودی مردانه باینت</h3>
            </div>
            <br>
            <br>

            <div>
                <div class="off" dir="rtl">
                    <span>۲۷۸۰۰۰</span>
                    <span>تومان</span>
                </div>
                <div class="price" dir="rtl">
                    <span>۲۷۸۰۰۰</span>
                    <span>تومان</span>
                </div>
            </div>

            <div class="row" style="text-align:right" dir="rtl">
                <v-select
                :items="items"
                label="انتخاب سایز"
                light
                color="grey darken-4"
                >
                </v-select>
                <div><nuxt-link to="#"><span>راهنمای سایز</span></nuxt-link></div>

            </div>
            <br>
            <div>
            <v-btn
                class="ma-2 pa-6"
                outlined
                color="black"
                >
                بعدا میخرم
            </v-btn>

            <v-btn
                class="ma-2 pa-6"
                color="pink"
                width="15vw"
                style="position: relative;"
                >
            <span class="text-white">  میخرم </span>
            <v-icon style="position: absolute;top:0;left:9vw;">fa-shopping-bag</v-icon>

            </v-btn>
            </div>

            <br>
            <br>

          <v-row dir="rtl" class="mr-2">
                <v-icon color="grey lighten-1" style="font-size:2.5vw">fa-shopping-bag</v-icon>
              <div style="margin-right:10px;">
                <span style="font-size:0.9vw">ضمانت هفت روز</span>
                <br>
                <span style="font-size:0.9vw">بازگشت کالا</span>
              </div>
              <v-icon color="grey lighten-1" style="margin-right:10px; font-size:2.5vw">fa-shopping-bag</v-icon>

              <div style="margin-right:10px;">
                  <span style="font-size:0.9vw">تحویل سریع و آسان</span>
              </div>
              <v-icon color="grey lighten-1" style="margin-right:10px; font-size:2.5vw">fa-shopping-bag</v-icon>

              <div style="margin-right:10px;">
                  <span style="font-size:0.9vw">ضمانت </span>
                  <br>
                  <span style="font-size:0.9vw">اصل بودن کالا</span>
              </div>


          </v-row>
<br>
<br>
<br>
<br>
          <p>فروش توسط <a>باینت</a>
              <v-icon color="blue">fa-check-circle</v-icon>
              <span style="color:blue">فروشنده رسمی برند</span>
          </p>
        <hr>
        <br>
        <div dir="rtl" class="mr-2">

              <div style="font-size:1vw">
                <v-icon color="grey lighten-1">fa-shield-alt</v-icon>
                <span>گارانتی اصالت و سلامت فیزیکی کالا</span>
                <v-icon style="margin-right:20px;" color="grey lighten-1">fa-shuttle-van</v-icon>
                <span>ارسال از ۲ روز کاری</span>
              </div>
              <div>

              </div>

          </div>

        </div>
</div>    
</template>

<script>
export default {
    data(){
        return {
            items: ['M', 'L', 'XL', 'XXL'],
        }
    }
}
</script>

<style scoped>

.off{
    text-decoration-line: line-through;
}
.price span{
    color: red
}
.price span{
    font-size: 30px;

}
#id_size{
    width: 10%;
    overflow: hidden;
}
</style>
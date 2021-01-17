<template>
            <v-card flat>
          <v-card-text>

        <h2 style="float:right">{{ comment.title }}</h2>
        <br>
        <br>
        <div class="row justify-space-between">
            <div>
                <span>نوشته شده توسط </span>
                <span>{{ comment.name }}</span>
                <span>خریدار سایز</span>
                <span>{{ comment.buing_size }}</span>
            </div>
            <div>
                <span> خریداری شده از <a>{{ comment.buing_from }}</a></span>
            </div>
        </div>
        <br>
        <br>

        <h3 style="float:right">{{ comment.body }}</h3>
        <br>
        <br>
        <div style="float:right">
          <span v-if="comment.suggest == '1'">خرید این محصول را حتماً پیشنهاد می کنم. </span>
          <span v-if="comment.suggest == '2'">خرید این محصول را حتماً پیشنهاد نمی کنم. </span>

          <v-icon v-if="comment.suggest == '1'" color="blue">fa-thumbs-up</v-icon> 
          <v-icon v-if="comment.suggest == '2'" color="red">fa-thumbs-down</v-icon>
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
</template>

<script>
export default {
    props: {
        comment: {
            type: Object,
            default: {},
        },
    },
    
}
</script>

<style scoped>

</style>
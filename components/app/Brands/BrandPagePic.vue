<template>
    <v-row class="brands_pic">
        <v-col cols="12" md="3" sm="3" v-for="item in items">
          <img :src="item">
        </v-col>
      </v-row>
</template>

<script>
    export default {
        name: "BrandPagePic",
        data(){
            return {
                items:[
                    'https://dkstatics-public.digikala.com/digikala-adservice-banners/1000024162.jpg?x-oss-process=image/quality,q_80',
                    'https://dkstatics-public.digikala.com/digikala-adservice-banners/1000024161.jpg?x-oss-process=image/quality,q_80',
                    'https://dkstatics-public.digikala.com/digikala-adservice-banners/1000024160.jpg?x-oss-process=image/quality,q_80',
                    'https://dkstatics-public.digikala.com/digikala-adservice-banners/1000024159.jpg?x-oss-process=image/quality,q_80',
                ],
            }
        }
    }
</script>

<style scoped>
    .brands_pic img{
    width: 22vw;
    height: 12vw;
    margin-left: 0.5vw;
  }

</style>

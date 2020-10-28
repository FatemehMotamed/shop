<template>
  <div>
    <v-container fluid class="box">
      <v-row>
        <slide2></slide2>
      </v-row>

      <v-row>
        <card-topic></card-topic>
      </v-row>

      <v-row class="popular">
        <v-col cols="12" md="12" sm="12">
          <h1 dir="rtl">محبوب ترین ها</h1>
          <hr>
          <br>
        </v-col>
      </v-row>

      <v-row>
        <slide-group></slide-group>
      </v-row>

      <v-row class="mt-12"><v-btn outlined class="mx-auto read_more">مشاهده همه</v-btn></v-row>

      <v-row class="mt-16">
        <v-col cols="12" md="6" sm="6" >
          <v-row>
            <img style="width: 40vw; height: 23vw;margin-left: 8vw" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/0b8fc1354295910cc87d5cd38f888b639beb3853_1602195374.jpg?x-oss-process=image/quality,q_80">
          </v-row>
          <v-row >
            <img style="width: 40vw; height: 18vw;margin-left: 8vw; margin-top: 2vw" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/6ec55a34a0d541300faeb20d34698b590d61722c_1602195443.jpg?x-oss-process=image/quality,q_80">
          </v-row>
        </v-col>
        <v-col cols="12" md="6" sm="6" >
          <v-row>
            <img style="width: 40vw; height: 18vw;margin-left: 1vw;" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/b576f9b294e0df31ef5caa106cde8bb460c39c3f_1602195504.jpg?x-oss-process=image/quality,q_80">
          </v-row>
          <v-row>
            <img style="width: 40vw; height: 23vw;margin-left: 1vw; margin-top: 2vw" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/6ec55a34a0d541300faeb20d34698b590d61722c_1602195443.jpg?x-oss-process=image/quality,q_80">
          </v-row>
        </v-col>
      </v-row>

      <v-row class="popular">
        <v-col cols="12" md="12" sm="12">
          <h1 dir="rtl">جدیدترین ها</h1>
          <hr>
          <br>
        </v-col>
      </v-row>

      <v-row>
        <slide-group></slide-group>
      </v-row>

      <v-row class="mt-12"><v-btn outlined class="mx-auto read_more">مشاهده همه</v-btn></v-row>

      <v-row>
        <footer-product></footer-product>
      </v-row>
    </v-container>

  </div>

</template>

<script>
  import Slide2 from "@/components/Slide2";
  import CardTopic from "@/components/CardTopic";
  import SlideGroup from "@/components/SlideGroup";
  import FooterProduct from "@/components/FooterProduct";
    export default {
        name: "index",
        components: {
            Slide2:Slide2,
            CardTopic:CardTopic,
            SlideGroup:SlideGroup,
            FooterProduct:FooterProduct

        }
    }
</script>

<style scoped>
  .box{
    font-family: 'Markazi Text', serif !important;
  }
h1{
  margin-right:4vw;
}
  .popular hr{
    width: 11vw;
    color: #7F828B!important;
    float: right;
    margin-right: 4vw;
  }
  .read_more{
    width: 18vw;
    height: 4vw!important;
    border-width: 2px;
    font-size: 1.6vw;
    font-weight: bold;
  }
</style>

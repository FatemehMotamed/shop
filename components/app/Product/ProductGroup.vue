<template>
    <div>
      <v-row class="popular">
        <v-col cols="12" md="12" sm="12">
          <h1 dir="rtl">{{ title }}</h1>
          <hr>
          <br>
        </v-col>
      </v-row>

      <v-row>
        <slide-group :items="items"></slide-group>
      </v-row>

      <v-row class="mt-12"><v-btn outlined class="mx-auto read_more">مشاهده همه</v-btn></v-row>

    </div>
</template>

<script>
  import SlideGroup from "@/components/app/Slide/SlideGroup";
    export default {
        name: "ProductGroup",
        components:{
            SlideGroup:SlideGroup,
        },
        props:['items','title']
    }
</script>

<style scoped>
  .popular hr{
    width: 11vw;
    color: #7F828B!important;
    float: right;
    margin-right: 4vw;
  }
  h1{
  margin-right:4vw;
  }
    .read_more{
    width: 18vw;
    height: 4vw!important;
    border-width: 2px;
    font-size: 1.6vw;
    font-weight: bold;
  }
</style>

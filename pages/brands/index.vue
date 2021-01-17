<template>

    <v-container fluid dir="rtl" >

      <search-brand></search-brand>
      <brand-page-pic></brand-page-pic>
      <div class="brand_box_sticky">
        <brand-alphabet title="برندهای ایرانی" :alphabets="a1" offset="0"></brand-alphabet>
        <brand-alphabet title="برندهای بین المللی" :alphabets="a2" offset="34"></brand-alphabet>
      </div>
      <hr style="margin-top: 2vw">

      <brand-info :alphabets="a1" offset="0"></brand-info>
      <brand-info :alphabets="a2" offset="34"></brand-info>


    </v-container>

</template>


<script>
  import SearchBrand from "@/components/app/Brands/SearchBrand";
  import BrandPagePic from "@/components/app/Brands/BrandPagePic";
  import BrandAlphabet from "@/components/app/Brands/BrandAlphabet";
  import BrandInfo from "@/components/app/Brands/BrandInfo";


    export default {
        name: "brands",
        components:{
            BrandPagePic:BrandPagePic,
            SearchBrand:SearchBrand,
            BrandAlphabet:BrandAlphabet,
            BrandInfo:BrandInfo,


        },

        data(){
            return {
                a1:[
                    '0-9',
                    'آ', 'ا', 'ب','پ','ت','ث','ج','چ','ح','خ','د','ذ','ر','ز','ؤ','س','ش','ص','ض','ط','ظ','غ','غ','ف','ق','ک','گ','ل','م','ن','و','ه','ی'
                ],
                a2:[
                    '0-9',
                    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
                ],
            }

        }

    }
</script>

<style scoped>
  .brand_box_sticky{
     position: -webkit-sticky;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1;
    }
</style>

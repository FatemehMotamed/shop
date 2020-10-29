<template>

    <v-container fluid dir="rtl" >
      <v-row class="box">
        <v-col cols="12" md="2" sm="2">
          <v-text-field
          label=""
          placeholder=" جستجوی برند (فارسی یا انگلیسی)"
          class="search_box dir"
          dir="rtl"
        >
          <font-awesome-icon :icon="['fas', 'search']" slot="prepend" class="search_icon" />

        </v-text-field>
        </v-col>
        <v-col cols="12" md="6" sm="6"></v-col>
        <v-col cols="12" md="4" sm="4" dir="rtl" class="pr-10"><p>برندهای ما</p></v-col>
      </v-row>

      <v-row class="brands_pic">
        <v-col cols="12" md="3" sm="3" v-for="item in items">
          <img :src="item">
        </v-col>
      </v-row>


       <v-row class="brand_box_sticky">
        <v-col cols="12" md="12" sm="12">
          <label class="iran">برندهای ایرانی</label>
          <ul class="ml-2">
            <li v-for="(alphabet,index) in alphabets"><a :href="'#'+String(parseInt(index)-1)">{{ alphabet }}</a></li>
          </ul>
        </v-col>
         <v-col cols="12" md="12" sm="12">
          <label class="iran">برندهای بین المللی</label>
          <ul class="ml-2">
            <li style="margin-right: 2.35vw" v-for="(alphabet,index) in alphabets2"><a :href="'#e'+String(parseInt(index)-1)">{{ alphabet }}</a></li>
          </ul>
        </v-col>
      </v-row>

      <hr style="margin-top: 2vw">
      <v-row class="brand_box" v-for="(alphabet,index) in alphabets"  :id="index" dir="rtl" >
        <v-col class="mark" cols="12" md="1" sm="1">
           <v-avatar
             color="teal"
             size="48"
           >
              <span class="white--text headline">{{ alphabet }}</span>
          </v-avatar>

        </v-col>
        <v-col  md="2" sm="2">
          <p v-for="i in 10"><a> نام برند</a></p>
        </v-col>
        <v-col md="2" sm="2">
          <p v-for="i in 10"><a>نام برند</a></p>
        </v-col>
        <v-col md="2" sm="2">
          <p v-for="i in 10"><a>نام برند</a></p>
        </v-col>
        <v-col md="2" sm="2">
          <p v-for="i in 10"><a>نام برند</a></p>
        </v-col>
        <v-col md="2" sm="2">
          <p v-for="i in 10"><a>نام برند</a></p>
        </v-col>
        <v-col md="1" sm="1">

        </v-col>

      </v-row>

      <v-row class="brand_box" v-for="(alphabet,index) in alphabets2"  :id="'e'+index" dir="rtl" >
        <v-col class="mark"  cols="12" md="1" sm="1">
          <v-avatar
             color="teal"
             size="48"
           >
              <span class="white--text headline">{{ alphabet }}</span>
          </v-avatar>
        </v-col>
        <v-col  md="2" sm="2">
          <p v-for="i in 10"><a> نام برند</a></p>
        </v-col>
        <v-col md="2" sm="2">
          <p v-for="i in 10"><a>نام برند</a></p>
        </v-col>
        <v-col md="2" sm="2">
          <p v-for="i in 10"><a>نام برند</a></p>
        </v-col>
        <v-col md="2" sm="2">
          <p v-for="i in 10"><a>نام برند</a></p>
        </v-col>
        <v-col md="2" sm="2">
          <p v-for="i in 10"><a>نام برند</a></p>
        </v-col>
        <v-col md="1" sm="1">

        </v-col>

      </v-row>

    </v-container>

</template>


<script>

    export default {
        name: "brands",
        data(){
            return {
                items:[
                    'https://dkstatics-public.digikala.com/digikala-adservice-banners/1000024162.jpg?x-oss-process=image/quality,q_80',
                    'https://dkstatics-public.digikala.com/digikala-adservice-banners/1000024161.jpg?x-oss-process=image/quality,q_80',
                    'https://dkstatics-public.digikala.com/digikala-adservice-banners/1000024160.jpg?x-oss-process=image/quality,q_80',
                    'https://dkstatics-public.digikala.com/digikala-adservice-banners/1000024159.jpg?x-oss-process=image/quality,q_80',
                ],
                alphabets:[
                    '0-9',
                    'آ', 'ا', 'ب','پ','ت','ث','ج','چ','ح','خ','د','ذ','ر','ز','ؤ','س','ش','ص','ض','ط','ظ','غ','غ','ف','ق','ک','گ','ل','م','ن','و','ه','ی'
                ],
                alphabets2:[
                    '0-9',
                    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
                ],
                 tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            }
        }
    }
</script>

<style scoped>
.box p{
  font-family: 'Markazi Text', serif !important;
  font-weight: bold;
  font-size: 2vw;
}
.iran{
font-family: 'Markazi Text', serif !important;
  font-weight: bold;
  font-size: 1.5vw;
  color: #47494e;
  float: right; margin-right: 2vw
}
.iran li{
  margin-right: 3vw;
}
.box label{
font-family: 'Markazi Text', serif !important;
  font-weight: bold;
  font-size: 1.5vw;
  color: #47494e;
}

  .search_box{
    color: #47494e !important;
    position: relative;
    font-family: 'Markazi Text', serif !important;
  }

  .search_icon{
    color:dimgrey;
    position: absolute;
    right: -3vw;
  }

  .v-text-field ::before {
    border-color: black !important;
    width: 20vw !important;
  }

  .v-text-field ::after {
    border-color: blueviolet !important;
    width: 20vw !important;
  }
  .brands_pic img{
    width: 22vw;
    height: 12vw;
    margin-left: 0.5vw;
  }

  .brand_box_sticky{
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1;
  }
  .brand_box_sticky ul{
    list-style-type: none;
    font-family: 'Markazi Text', serif !important;
  }
  .brand_box_sticky li{
    display: inline;
    margin-right: 1.8vw;
  }
  .brand_box_sticky a{
    font-size: 1.5vw;

    text-decoration: none;
    color: #47494e!important;
    font-weight: bold;
  }
  .brand_box{
    font-family: 'Markazi Text', serif !important;
  }
  .mark{
    font-size: 2vw;
    margin-right: 5vw;
    color: #19424e;
  }
</style>

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

      <v-row>
        <v-col cols="12" md="12 sm=12">

          <v-card>
            <v-tabs
                  centered
                  v-model="tab"
                >
            <v-tabs-slider></v-tabs-slider>

             <v-tab :href="'#tab-'+index" v-for="(alphabet,index) in alphabets">
                  {{ alphabet }}
            </v-tab>

    </v-tabs>

            <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="i in 3"
        :key="i"
        :value="'tab-' + i"
      >
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
          </v-card>

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
                    'آ', 'ا', 'ب'
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
</style>

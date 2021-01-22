<template>

<div>
  <v-system-bar color="deep-purple darken-3"></v-system-bar>

  <v-app-bar
    color="red accent-4"
    fixed>
    <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title class="white--text">Brand Name</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon class="white--text">mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon class="white--text">mdi-shopping</v-icon>
    </v-btn>

  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    fixed
    right
    temporary
  >
    <v-list
      nav
      dense
    >
      <v-list-item-group
        v-model="group"
        active-class="deep-purple--text text--accent-4"
      >
      <div class="row justify-space-around">

          <div><v-icon class="ma-2">mdi-close</v-icon></div>
          <div>
              <v-btn
                  class="ma-2"
                  outlined
                  color="dark">
                  ورود و ثبت نام
              </v-btn>
          </div>

      </div>
      <main-menu class="mt-2" v-if="number == -1"></main-menu>
      <men-menu class="mt-2" v-if="number == 0"></men-menu>
      <women-menu class="mt-2" v-if="number == 1"></women-menu>
      <kids-menu class="mt-2" v-if="number == 2"></kids-menu>
      <beauty-menu class="mt-2" v-if="number == 3"></beauty-menu>
      <sub-men-menu class="mt-2" v-if="number == 4"></sub-men-menu>
      <sub-women-menu class="mt-2" v-if="number == 5"></sub-women-menu>

      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
  <v-main>
    <properties-product class="mt-16 ml-8" 
    :properties_data_1="properties_data_1"
    :comments_product="comments_product"
    ></properties-product>

    <footer-side class="mt-16"></footer-side>
  </v-main>
</div>
    
</template>


<script>

  import EventBus from '@/assets/js/eventBus.js'

  import MainMenu from '@/components/app/Mobile/Header/MainMenu.vue'
  import MenMenu from '@/components/app/Mobile/Header/MenMenu.vue'
  import WomenMenu from '@/components/app/Mobile/Header/WomenMenu.vue'
  import BeautyMenu from '@/components/app/Mobile/Header/BeautyMenu.vue'
  import KidsMenu from '@/components/app/Mobile/Header/KidsMenu.vue'

  import SubMenMenu from '@/components/app/Mobile/Header/SubMenu/SubMenMenu.vue'
  import SubWomenMenu from '@/components/app/Mobile/Header/SubMenu/SubWomenMenu.vue'

  import CarouselProduct from '@/components/core/CarouselProduct.vue'
  import PropertiesProduct from '@/components/app/Mobile/Product/PropertiesProduct.vue'
  import FooterSide from '@/components/app/Mobile/Product/FooterSide.vue'

export default {

    components:{

        MainMenu,
        MenMenu,
        KidsMenu,
        BeautyMenu,

        SubMenMenu,
        SubWomenMenu,

        CarouselProduct,
        PropertiesProduct,
        FooterSide,
        
    },
    data(){
      return{

        number: -1,

        drawer: false,
        menu:['مردانه','woman','child'],
        menu2:['tshirt','shoe','kif'],
        menu3:['tshirt1','tshirt2','tshirt3'],
        menu4:['shoe1','shoe2','shoe3'],

        images: [
          'https://dkstatics-public.digikala.com/digikala-products/120864021.jpg?x-oss-process=image/resize,m_fill,h_2625,w_2000/quality,q_90',
          'https://dkstatics-public.digikala.com/digikala-products/120864023.jpg?x-oss-process=image/resize,m_fill,h_2625,w_2000/quality,q_90',
        ],

        properties_data_1:
          {
            rating: '3.7',
            person_rating: '6',
            brand: 'لیورجی',
            brand_link: '',
            title: 'پالتو مردانه لیورجی',
            model: 'MTB2021',
            off: '60000',
            pre_price: '249000',
            price: '189000',
            seller: 'جرمن کالا',
            is_better_brand: Boolean(Math.round(Math.random())),
            size_name: [
              'M',
              'L',
            ],
            properties: [
              'یقه ایستاده و آستین بلند',
              'باز و بسته شدن از طریق زیپ',
              'دارای دو جیب در طرفین',
              'دارای کش بافت در سرآستین ها',
            ],
            custom_properties_1: [
              {'جنس': 'پلی استر'},
              {'قد': 'کوتاه'},
              {'مورد استفاده': 'رسمی، روزمره'},
              {'طرح پارچه': 'طرح دار'},
              {'فرم': 'معمولی'},
              {'یقه': 'ایستاده'},
              {'کلاه': 'بدون کلاه'},

            ],
            custom_properties_2: [
              {'فصل تولید': ''},
              {'کشور مبدا برند': ''},
              {'کشور تولید کننده': 'ایران'},
            ],
          },
          comments_product: [
            {
              like:Math.round(Math.random(1, 6)),
              title: 'حیف پول بخدا',
              comment: 'فقط اسمش کاپشنه یخ میزنی داخلش',
              created_at: 'یک ماه پیش',
              author: 'رضا فقیهی نسب',
            },
            {
              like:Math.round(Math.random(1, 6)),
              title: 'حیف پول بخدا',
              positiv: ['aa', 'bb', 'cc'],
              negative: ['qq', 'ww', 'ee'],
              comment: 'فقط اسمش کاپشنه یخ میزنی داخلش',
              created_at: 'یک ماه پیش',
              author: 'رضا فقیهی نسب',
              is_anonymous: Boolean(Math.round(Math.random())),
            },
            {
              like:Math.round(Math.random(1, 6)),
              title: 'حیف پول بخدا',
              positiv: ['aa', 'bb', 'cc'],
              negative: ['qq', 'ww', 'ee'],
              comment: 'فقط اسمش کاپشنه یخ میزنی داخلش',
              created_at: 'یک ماه پیش',
              author: 'رضا فقیهی نسب',
              is_anonymous: Boolean(Math.round(Math.random())),
            },
            {
              like:Math.round(Math.random(1, 6)),
              title: 'حیف پول بخدا',
              positiv: ['aa', 'bb', 'cc'],
              negative: ['qq', 'ww', 'ee'],
              comment: 'فقط اسمش کاپشنه یخ میزنی داخلش',
              created_at: 'یک ماه پیش',
              author: 'رضا فقیهی نسب',
              is_anonymous: Boolean(Math.round(Math.random())),
            },
            {
              like:Math.round(Math.random(1, 6)),
              title: 'حیف پول بخدا',
              positiv: ['aa', 'bb', 'cc'],
              negative: ['qq', 'ww', 'ee'],
              comment: 'فقط اسمش کاپشنه یخ میزنی داخلش',
              created_at: 'یک ماه پیش',
              author: 'رضا فقیهی نسب',
              is_anonymous: Boolean(Math.round(Math.random())),
            },
            {
              like:Math.round(Math.random(1, 6)),
              title: 'حیف پول بخدا',
              positiv: ['aa', 'bb', 'cc'],
              negative: ['qq', 'ww', 'ee'],
              comment: 'فقط اسمش کاپشنه یخ میزنی داخلش',
              created_at: 'یک ماه پیش',
              author: 'رضا فقیهی نسب',
              is_anonymous: Boolean(Math.round(Math.random())),
            },
            
          ],
        }
    },
    mounted(){
        EventBus.$on('number', (i) => {
            this.number = i;
        }),
        EventBus.$emit('images', this.images)
    },
    methods:{
        TogleDrawer(){
            this.drawer=!this.drawer
        },
        updateMenu(data){
            this.menu=[];
            this.menu=data
        }
    },
    
}
</script>

<style scoped>

</style>
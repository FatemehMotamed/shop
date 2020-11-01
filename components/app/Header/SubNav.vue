<template>
  <div>
    <v-container>
      <v-row >

        <v-col cols="12" md="12" sm="10">
          <v-card class="overflow-hidden">
              <v-tabs align-with-title dir="rtl">
            <v-row class="sub_menu">
              <v-tab>
              <v-col cols="12" md="12">
                <font-awesome-icon :icon="['fas', 'tshirt']" slot="prepend" />
                <label>لباس</label>
              </v-col>
                </v-tab>
              <v-tab>
              <v-col cols="12" md="12">
                <font-awesome-icon :icon="['fas', 'briefcase']" slot="prepend" />
                <label>کیف</label>
              </v-col>
                </v-tab>
              <v-tab>
              <v-col cols="12" md="12">
                <font-awesome-icon :icon="['fas', 'shoe-prints']" slot="prepend" />
                <label>کفش</label>
              </v-col>
                </v-tab>
              <v-tab>
              <v-col cols="12" md="12">
                <font-awesome-icon :icon="['fas', 'glasses']" slot="prepend" />
                <label>اکسسوری</label>
              </v-col>
                </v-tab>
              <v-tab>
              <v-col cols="12" md="12">
                <font-awesome-icon :icon="['fas', 'trophy']" slot="prepend" />
                <label>ورزشی</label>
              </v-col>
                </v-tab>
            </v-row>

        </v-tabs>
              <v-sheet max-height="600" >
                  <v-row>
                    <v-col cols="12" md="1" sm="0"></v-col>
                    <v-col cols="12" md="5" sm="5" >
                      <v-row>
                        <v-col cols="12" md="12" sm="12"><nuxt-link to="#" class="titr">برترین برندهای لباس مردانه</nuxt-link></v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6" sm="6"><img src="https://dkstatics-public.digikala.com/digistyle-mega-menu/6.png"></v-col>
                        <v-col cols="12" md="6" sm="6"><img src="https://dkstatics-public.digikala.com/digistyle-mega-menu/7.png"></v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6" sm="6"><img src="https://dkstatics-public.digikala.com/digistyle-mega-menu/8.png"></v-col>
                        <v-col cols="12" md="6" sm="6"><img src="https://dkstatics-public.digikala.com/digistyle-mega-menu/9.png"></v-col>
                      </v-row>

                    </v-col>

                    <v-col cols="12" md="1" sm="1" style="border-right: 1px solid lightgray;"></v-col>

                    <v-col cols="12" md="5" sm="5">
                      <v-row>
                        <v-col cols="12" md="6" sm="5">
                          <ul>
                            <li>&nbsp;</li>
                            <li v-for="item in items2"><nuxt-link to="/product">{{ item }}</nuxt-link></li>
                          </ul>
                        </v-col>
                        <v-col cols="12" md="6" sm="5">
                          <nuxt-link to="#" class="titr" style="margin-right: 6vw;"><label> < </label><label>خرید لباس مردانه</label></nuxt-link>
                          <ul>
                    <li v-for="item in items"><nuxt-link to="/product">{{ item }}</nuxt-link></li>
                  </ul>
                        </v-col>
                      </v-row>
                    </v-col>




                  </v-row>
              </v-sheet>
          </v-card>

        </v-col>

      </v-row>

    </v-container>
<!--  <v-card class="overflow-hidden">-->

<!--         -->

<!--      </v-card>-->

</div>
</template>

<script>
    export default {
        name: "SubNav",
        data(){
            return{
                items:[
            'کت پاییزه و زمستانی','پالتو','کاپشن','جلیقه پاییزه','کت،جلیقه و ست رسمی','ژاکت و پلیور','\n' +
            'سویشرت و هودی','جین','پیراهن','\n' +
            'تی شرت و پولو شرت','\n' +
            'شلوار و شلوارک راحتی','جوراب و ساق'
        ],
                items2:[
                    'لباس راحتی','لباس زیر','فروش ویژه','جدیدترین‌ها','برترین برندهای لباس مردانه'
                ]
            }
        }
    }
</script>

<style scoped>
  .sub_menu{
    font-family: 'Markazi Text', serif;
    font-size: 1.2vw;
  }
  .titr{
    text-decoration: none;
    font-size:1.2vw ;
    font-family: 'Markazi Text', serif;
    color: black!important;
    font-weight: bold;

  }
  ul{
    list-style: none;
    margin-right: 6vw
  }
  ul li{
    margin-top: 1vw;
  }
  ul li a{
     text-decoration: none;
    font-size:1.2vw ;
    font-family: 'Markazi Text', serif;
    color: gray!important;
  }

  img{
    width: 13vw;
    height: 8vw;
  }

</style>

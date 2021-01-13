<template>
 <div style="z-index:1000">
<!--   {{isAuthenticated}}-->
    <v-container class="logo_box">
      <v-row >
        <v-col cols="12" md="2" sm="2" lg="2" xl="2" offset-md="1" offset-sm="1">
          <v-text-field label="" placeholder="        جستجوی محصولات" class="search_box dir" dir="rtl">
          <font-awesome-icon :icon="['fas', 'search']" slot="prepend" class="search_icon" />
        </v-text-field>
        </v-col>
        <v-col md="3" lg="3" xl="3" sm="3"  offset-lg="2" offset-xl="2" offset-md="1" offset-sm="1">
          <h1 class="brand ml-md-10">BRAND NAME</h1>
          <hr class="ml-md-10" />
        </v-col>
        <v-col md="3" sm="3" lg="2" xl="2" offset-lg="1" >
          <div class="mt-5 float-right login">

            <div v-if="isAuthenticated">
              <label class="float-lef">عزیز خوش آمدید&nbsp;</label><label class="float-right"> {{ loggedInUser }} <v-icon style="font-size: 1.5vw">mdi-account-outline</v-icon></label>


<!--              <a @click="logoutUser()">Logout</a>-->
<!--              <nuxt-link to="/profile">profile</nuxt-link>-->
            </div>

            <div v-else>
              <label class="mr-10"><nuxt-link to="/login">وارد شوید</nuxt-link></label>

            </div>

          </div>
      </v-col>
        <v-col md="1" lg="1" xl="1" sm="1" style="position: relative;" >
          <div class="wrapper">
            <ul>
              <li>
                <a href="#">
                  <font-awesome-icon :icon="['fas', 'shopping-bag']" slot="prepend" style="color:#696969;" class="mt-6 mr-10"/>
                </a>

                <div class="submenu">
                    <img src="@/assets/image/bc6a97c7.svg">
                  <div class="info_container">
                    <div>
                      <div>
                        سبد خرید شما خالی است.
                      </div>
                      <div>
                        شاید این صفحات برای شما جذاب باشند
                      </div>
                      <div class="c-mini-cart__useful-links-container">
                        <a href="#">فروش ویژه </a>
                        <span></span>
                        <a href="#">برندهای برتر </a>
                        <span></span>
                        <a href="#">خانه طراحان ایرانی</a>
                      </div>
                    </div>
                  </div>
                </div>

              </li>

            </ul>
          </div>
        </v-col>
      </v-row>

    </v-container>

 </div>
</template>

<script>
    import{ mapGetters, mapState, mapMutations } from 'vuex'
    export default {
        name: "Logo",
        methods:{
            ...mapMutations(['logoutUser']),
        },

        computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  }
    }
</script>

<style scoped>

    .search_box{
    color: #47494e !important;
    position: relative;
      font-size: 1.3vw;
  }

  .search_icon{
    color:dimgrey;
    position: absolute;
    right: 0;
    top: 33%;
  }

  .v-text-field ::before {
    border-color: black !important;
  }

  .v-text-field ::after {
    border-color: #19424e !important;
  }
.brand{
text-align: center;
  font-size: 3vw;

}
  hr{
    margin-top: 5%;
  }

.logo_box{
      position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  font-family: 'Markazi Text', serif;
}
  .logo_box a{
    color: #47494e !important;
    text-decoration: none;
  }
  .login{
    font-size: 1vw;
  }
    * {
      /*margin: 0;*/
      /*padding: 0;*/
      /*box-sizing: border-box;*/
      list-style: none;
      text-decoration: none;

    }

    body {
      background: #fad8bc;
    }

    .wrapper {
      position: absolute;
      top: 0;
      left: 0;
      /*transform: translate(-50%, -50%);*/
    }

    .wrapper ul {
      width: 20%;
      /*width: 400px;*/
      /*height: 65px;*/
      /*display: flex;*/
    }

    .wrapper ul li {
      width: 10vw;
      text-align: center;
      height: 5vw;
      padding: 1vw 0;
      position: relative;
      border-right: 1px solid #fff;
      transition: all 0.5s ease;
    }

    .wrapper ul li:last-child {
      border-right: 0;
    }

    /*.wrapper ul li a {*/
    /*  !*display: block;*!*/
    /*  !*color: #fff;*!*/
    /*  !*text-transform: uppercase;*!*/
    /*  !*font-size: 10px;*!*/
    /*  !*letter-spacing: 0.5vw;*!*/
    /*}*/

    /*.wrapper ul li a img {*/
    /*  !*width: 100vw;*!*/
    /*}*/

    .wrapper ul li .submenu {
      width: 30vw;
      height: auto;
      background: #fff;
      border-radius: 5px;
      position: absolute;
      top:4.9vw;
      left: 30%;
      transform: translateX(-50%);
      display: none;
    }

    .wrapper ul li .submenu:before {
      content: "";
      position: absolute;
      top: -1.7vw;
      left: 15.7vw;
      transform: translateX(-50%);
      border: 10px solid;
      border-color: transparent transparent white transparent;
    }

    .wrapper ul li .submenu img {
      /*border-top-left-radius: 5px;*/
      /*border-top-right-radius: 5px;*/
      /*display: block;*/
      width: 30%;
    }

    /*.wrapper ul li .submenu ul {*/
    /*  width: 100%;*/
    /*  flex-direction: column;*/
    /*}*/

    .wrapper ul li .submenu ul li {
      width: 100%;
      background: #fff;

      border-bottom: 1px solid #f9f9f9;
    }

    /*.wrapper ul li .submenu ul li:hover {*/
    /*  background: #3b3b5d;*/
    /*}*/

    /*.wrapper ul li .submenu ul li:hover a {*/
    /*  color: #fff;*/
    /*}*/

    .wrapper ul li .submenu ul li a {
      /*padding: 10px;*/
      display: block;
      color: #707086;
    }

    .wrapper ul li .submenu ul li:last-child {
      border-bottom: 0;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    .wrapper ul li:hover .submenu {
      display: block;
    }

    .wrapper ul li .submenu .img_container {
      position: relative;
    }

    /*.wrapper ul li .submenu .img_container .holder {*/
      /*position: absolute;*/
      /*bottom: 15px;*/
      /*left: 15px;*/
      /*z-index: 99;*/
      /*background: #fff;*/
      /*padding: 5px 10px;*/
      /*text-align: center;*/
      /*display: flex;*/
      /*align-items: center;*/
      /*font-weight: bold;*/
    /*}*/

    /*.wrapper ul li .submenu .img_container .holder img {*/
    /*  margin-right: 5px;*/
    /*}*/
  .info_container{
    font-size: 1.3vw;
  }
  .info_container a{

  }

</style>

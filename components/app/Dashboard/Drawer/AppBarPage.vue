<template>
    <v-app-bar
        height="50vw"
        color="white"
        prominent
        fixed
        style="position: relative"
      >

      <v-app-bar-nav-icon color="#2955c8" @click.stop="togleDrawer"  class="float-left"></v-app-bar-nav-icon>
      <v-btn  class="btn_row" fab dark color="#f7b924" >
        <v-icon dark style="font-size: 1vw">
          mdi-home
        </v-icon>
      </v-btn>
      <v-btn class="mr-3" fab dark color="#3ac47d" width="2.5vw" height="2.5vw" >
        <v-icon dark style="font-size: 1vw">
          mdi-source-branch
        </v-icon>
      </v-btn>
      <v-btn class="mr-3" fab dark color="#d92550" width="2.5vw" height="2.5vw">
        <v-icon dark style="font-size: 1vw">
          mdi-email
        </v-icon>
      </v-btn>

      <v-spacer></v-spacer>
<!--      <avatar  class="align-start float-left" v-if="isAuthenticated" :auth="[loggedInUser, logoutUser]"></avatar>-->

      <div class="wrapper_user">
        <ul>
          <li>
            <a href="#">
              <img src="@/assets/images/1.jpg"  style="max-width: 3.5vw;max-height: 3.5vw" class="rounded-circle ml-10 mt-1"/>
            </a>

            <div class="submenu_user">
              <div class="header_user_info">
                <img src="@/assets/images/1.jpg"  style="max-width: 2vw;max-height: 2vw" class="rounded-circle ml-10 mt-1"/>
                <label>{{ loggedInUser }}</label>
                <v-btn class="mr-3" fab dark color="#322f3e" width="2vw" height="2vw" @click="logoutUser()">
                  <v-icon dark style="font-size: 0.8vw; color: white">
                    mdi-exit-to-app
                  </v-icon>
                </v-btn>
              </div>
              <div class="info_container_user">

                <div>
                  <font-awesome-icon :icon="['fas', 'info-circle']" slot="prepend" style="color:#696969;" class="float-right mr-8 mt-1" />
                  <label class="float-right mr-2">اطلاعات کاربر</label>
                </div>
                <div>
                  <font-awesome-icon :icon="['fas', 'exchange-alt']" slot="prepend" style="color:#696969;" class="float-right mr-8 mt-1" />
                  <label class="float-right mr-2">تغییر پسورد</label>
                </div>
                <div>
                  <font-awesome-icon :icon="['fas', 'code-branch']" slot="prepend" style="color:#696969;" class="float-right mr-8 mt-1" />
                  <label class="float-right mr-2">اطلاعات  شعبه</label>
                </div>

              </div>
            </div>

          </li>

        </ul>
      </div>

<!--
      <div class="account_box mt-3" >
              {{ loggedInUser }}
              <a @click="logoutUser()">خروج</a>
      </div> -->

        <!-- <v-spacer></v-spacer>
        <div class="ml-n16 brand_name">Brand Name</div>
        <v-spacer></v-spacer>-->


      </v-app-bar>
</template>

<script>
   import{ mapGetters, mapState, mapMutations } from 'vuex'
   import Avatar from '@/components/app/Dashboard/Drawer/Avatar.vue'
    export default {
      components:{
        Avatar
      },

      name: "AppBarPage",
      methods:{
        togleDrawer(){
            this.$emit("callTogleDrawer");
        },
        ...mapMutations(['logoutUser']),
      },

      computed: {
        ...mapGetters(['isAuthenticated', 'loggedInUser'])
        }
    }

</script>

<style scoped>
  *{
    font-family: 'Markazi Text', serif !important;
    list-style: none;
    text-decoration: none;
  }
  .brand_name{
    font-size: 2vw;
  }
  .account_box{
    font-size: 1.2vw;
  }
  .btn_row{
    width: 2.5vw;
    height: 2.5vw;
    margin-right: 17vw;

  }
  .wrapper_user {
    position: absolute;
    top: 0;
    left: 0;
    /*transform: translate(-50%, -50%);*/
  }


  .wrapper_user ul li {
    text-align: center;
    /*height: 5vw;*/
    /*padding: 2.5vw 0;*/
    position: relative;
    border-right: 1px solid #fff;
    transition: all 0.5s ease;
  }

  .wrapper_user ul li:last-child {
    border-right: 0;
  }


  .wrapper_user ul li .submenu_user {

    /*background: white;*/
    border-radius: 5px;
    position: absolute;
    top:3.9vw;
    left: 12%;
    transform: translateX(2%);
    display: none;
    background-color: white;
  }

  .wrapper_user ul li .submenu_user:before {
    content: "";
    position: absolute;
    top: -1.9vw;
    left: 0vw;
    transform: translateX(2.1vw);
    border: 1vw solid;
    border-color: transparent transparent #16aaff transparent;

  }


  .wrapper_user ul li .submenu_user ul li {
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #f9f9f9;
    line-height: 0.2vw;

  }

  .wrapper_user ul li .submenu_user ul li:last-child {
    border-bottom: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .wrapper_user ul li:hover .submenu_user {
    display: block;
  }
  .info_container_user{
    font-size: 1.2vw;
    margin: 5%;
  }

  .info_container_user div{
    width: 18vw;
    height: 3vw;
  }
.header_user_info{
  width: 100%;
  height: 3vw;
  background-color: #16aaff;
  border-radius:5px 5px 0 0;
}
  .header_user_info label{
    color: white!important;
  }


</style>

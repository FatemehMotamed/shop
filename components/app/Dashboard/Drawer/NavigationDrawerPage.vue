<template>
    <div>
      <v-icon class="float-left mt-n8 ml-2" @click.stop="togleDrawer">mdi-close</v-icon>
      <v-list class="menu mt-10" dir="rtl">

          <v-list-item >
            <v-list-item-icon>
              <v-icon color="#757575">mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title class="main_title">
              <nuxt-link to="/dashboard">
            <span style="color: #3f6ad8; font-weight: bold">داشبورد</span>
            </nuxt-link></v-list-item-title>
          </v-list-item>

        <v-list-group v-for="item in items" :key="item.title" v-model="item.active"  no-action>
            <template v-slot:activator>
              <v-list-item-title class="main_title"><nuxt-link to="#">
                <v-list-item-icon><v-icon color="#757575">{{item.action}}</v-icon></v-list-item-icon>
                <span style="color: #3f6ad8; font-weight: bold">{{item.title}}</span>
              </nuxt-link></v-list-item-title>
            </template>

            <v-list-item v-for="child in item.items" :key="child.title" >
              <v-list-item-icon><v-icon color="#757575">{{child.icon}}</v-icon></v-list-item-icon>

              <v-list-item-title  class="sub_title">
                <nuxt-link :to="child.address">
                <span style="color: #757575">{{child.title}}</span>
                </nuxt-link>
                </v-list-item-title>
            </v-list-item>


          </v-list-group>

      </v-list>


    </div>
</template>

<script>
    export default {
        name: "NavigationDrawerPage",
        methods:{
          togleDrawer(){
            this.$emit("callTogleDrawer");
          },
        },
      data: () => ({
        items: [
          {
            action: 'mdi-account-circle',
            items: [{ title: 'افزودن',icon:'mdi-plus',address:'/dashboard/users/create' },
                    { title: 'همه',icon: 'mdi-playlist-minus',address:'/dashboard/users/list' }
                    ],
            title: 'کاربران',

          },
          {
            action: 'mdi-clipboard-list',
            items: [{ title: 'افزودن',icon:'mdi-plus',address:'/dashboard/category/create' },
                    { title: 'همه',icon: 'mdi-playlist-minus',address:'/dashboard/category/list' }
                    ],
            title: 'دسته بندی ها',
            active: true,
          },
          {
            action: 'mdi-shopping',
            items: [{ title: 'افزودن',icon:'mdi-plus',address:'/dashboard/products/create' },
                    { title: 'همه',icon: 'mdi-playlist-minus',address:'/dashboard/products/list' }
                    ],
            title: 'محصولات',

          },
          {
            action: 'mdi-source-branch',
            items: [{ title: 'افزودن',icon:'mdi-plus',address:'/dashboard/branch/create' }, { title: 'همه',icon: 'mdi-playlist-minus',address:'/dashboard/branch/list' }],
            title: 'شعبه ها',

          }
        ],
      }),
    }
</script>

<style scoped>
  *{
    font-family: 'Markazi Text', serif !important;
  }

  .main_title a{
    color: white!important;
    /*padding-right: 2%;*/
  }
  .main_title a:hover{

    color: #0ad3f7!important;
    display: block;
  }
   .sub_title a{
    color: yellow!important;
     font-size: 1vw;
     /*padding-right: 2%;*/
  }
  .menu a{
    text-decoration: none;
    font-size: 1.25vw;
  }

  .icon{
    width: 2vw;
  }

</style>

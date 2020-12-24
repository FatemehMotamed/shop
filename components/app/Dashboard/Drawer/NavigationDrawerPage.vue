<template>
    <div>

      <v-list class="menu" dir="rtl" >
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="#0ad3f7">mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title class="main_title"><nuxt-link to="/dashboard">صفحه اصلی</nuxt-link></v-list-item-title>
          </v-list-item>

          <v-list-group  >
            <template v-slot:activator>
              <v-list-item-title class="main_title"><nuxt-link to="#">
                <v-list-item-icon><v-icon color="#edd107">mdi-account-circle</v-icon></v-list-item-icon>
                کاربران
              </nuxt-link></v-list-item-title>
            </template>

            <v-list-item>
              <v-list-item-icon><v-icon color="#29f109">mdi-plus</v-icon></v-list-item-icon>

              <v-list-item-title class="sub_title"><nuxt-link to="/dashboard/users/create">ثبت کاربر</nuxt-link></v-list-item-title>
          </v-list-item>
            <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

              <v-list-item-title class="sub_title"><nuxt-link to="/dashboard/users/change">ویرایش و حذف کاربر</nuxt-link></v-list-item-title>
            </v-list-item>

          </v-list-group>

          <v-list-group>
            <template v-slot:activator>
              <v-list-item-title class="main_title">
                <nuxt-link to="#">
                  <v-list-item-icon><v-icon color="#f75a06">mdi-clipboard-list</v-icon></v-list-item-icon>
                  دسته بندی‌ها
                </nuxt-link></v-list-item-title>
            </template>

            <v-list-item>
              <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

              <v-list-item-title class="sub_title"><nuxt-link to="/dashboard/category/create">ثبت دسته بندی</nuxt-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

              <v-list-item-title class="sub_title"><nuxt-link to="/dashboard/category/read">ویرایش و حذف دسته بندی</nuxt-link></v-list-item-title>
          </v-list-item>

          </v-list-group>

          <v-list-group>
          <template v-slot:activator>
            <v-list-item-title class="main_title">
              <nuxt-link to="#">
                <v-list-item-icon><v-icon color="#255803">mdi-source-branch</v-icon></v-list-item-icon>
                محصولات
              </nuxt-link></v-list-item-title>
          </template>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title class="sub_title"><nuxt-link to="/dashboard/products/create">ثبت محصول</nuxt-link></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title class="sub_title"><nuxt-link to="/dashboard/branch/change">ویرایش و حذف محصول</nuxt-link></v-list-item-title>
          </v-list-item>


        </v-list-group>

          <v-list-group>
            <template v-slot:activator>
              <v-list-item-title class="main_title">
                <nuxt-link to="#">
                  <v-list-item-icon><v-icon color="#255803">mdi-source-branch</v-icon></v-list-item-icon>
                  شعبه ها
              </nuxt-link></v-list-item-title>
            </template>

            <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title class="sub_title"><nuxt-link to="/dashboard/branch/create">ثبت شعبه</nuxt-link></v-list-item-title>
          </v-list-item>
            <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title class="sub_title"><nuxt-link to="/dashboard/branch/change">ویرایش و حذف شعبه</nuxt-link></v-list-item-title>
          </v-list-item>

            <v-list-group
              no-action
              sub-group
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Actions</v-list-item-title>
                </v-list-item-content>
              </template>

<!--              <v-list-item-->
<!--                v-for="([title, icon], i) in cruds"-->
<!--                :key="i"-->
<!--                link-->
<!--              >-->
<!--                <v-list-item-title v-text="title"></v-list-item-title>-->

<!--                <v-list-item-icon>-->
<!--                  <v-icon v-text="icon"></v-icon>-->
<!--                </v-list-item-icon>-->
<!--              </v-list-item>-->
            </v-list-group>
          </v-list-group>
      </v-list>

    </div>
</template>

<script>
    export default {
        name: "NavigationDrawerPage",
        methods:{
        }
    }
</script>

<style scoped>
  *{
    font-family: 'Markazi Text', serif !important;
  }

  .main_title a{
    color: white!important;
    padding-right: 2%;
  }
  .main_title a:hover{

    color: #0ad3f7!important;
    display: block;
  }
   .sub_title a{
    color: yellow!important;
     font-size: 1vw;
     padding-right: 2%;
  }
  .menu a{
    text-decoration: none;
    font-size: 1.2vw;
  }

  .icon{
    width: 2vw;
  }

</style>

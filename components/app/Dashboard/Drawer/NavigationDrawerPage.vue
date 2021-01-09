<template>
    <div>

      <v-list class="menu mt-10" dir="rtl">
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="#757575">mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title class="main_title">
              <nuxt-link to="/dashboard">
            <span style="color: #212121">داشبورد</span>
            </nuxt-link></v-list-item-title>
          </v-list-item>

          <v-list-group>
            <template v-slot:activator>
              <v-list-item-title class="main_title"><nuxt-link to="#">
                <v-list-item-icon><v-icon color="#757575">mdi-account-circle</v-icon></v-list-item-icon>
                <span style="color: #212121">کاربران</span>
              </nuxt-link></v-list-item-title>
            </template>

            <v-list-item class="mr-8">
              <v-list-item-icon><v-icon color="#757575">mdi-plus</v-icon></v-list-item-icon>

              <v-list-item-title class="sub_title">
                <nuxt-link to="/dashboard/users/create">
                <span style="color: #757575">افزودن</span>
                </nuxt-link>
                </v-list-item-title>
          </v-list-item>
            <v-list-item class="mr-8">
            <v-list-item-icon>
              <v-icon color="#757575">mdi-playlist-minus</v-icon>
            </v-list-item-icon>

              <v-list-item-title class="sub_title">
                <nuxt-link to="/dashboard/users/list">
                  <span style="color: #757575">همه</span>
                </nuxt-link>
                </v-list-item-title>
            </v-list-item>

          </v-list-group>

          <v-list-group>
            <template v-slot:activator>
              <v-list-item-title class="main_title">
                <nuxt-link to="#">
                  <v-list-item-icon>
                    <v-icon color="#757575">mdi-clipboard-list</v-icon>
                  </v-list-item-icon>
                  <span style="color: #212121">دسته‌بندی‌ها</span>
                </nuxt-link></v-list-item-title>
            </template>

            <v-list-item class="mr-8">
              <v-list-item-icon>
              <v-icon color="#757575">mdi-plus</v-icon>
            </v-list-item-icon>

              <v-list-item-title class="sub_title">
                <nuxt-link to="/dashboard/category/create">
                <span style="color: #757575">افزودن</span>
                </nuxt-link>
                </v-list-item-title>
            </v-list-item>
            <v-list-item class="mr-8">
              <v-list-item-icon>
              <v-icon color="#757575">mdi-playlist-minus</v-icon>
            </v-list-item-icon>

              <v-list-item-title class="sub_title">
                <nuxt-link to="/dashboard/category/list">
                <span style="color: #757575">همه</span>
                </nuxt-link>
                </v-list-item-title>
          </v-list-item>

          </v-list-group>

          <v-list-group>
          <template v-slot:activator>
            <v-list-item-title class="main_title">
              <nuxt-link to="#">
                <v-list-item-icon><v-icon color="#757575">mdi-shopping</v-icon>
                </v-list-item-icon>
                <span style="color: #212121">محصولات</span>
              </nuxt-link></v-list-item-title>
          </template>

          <v-list-item class="mr-8">
            <v-list-item-icon>
              <v-icon color="#757575">mdi-plus</v-icon>
            </v-list-item-icon>

            <v-list-item-title class="sub_title">
              <nuxt-link to="/dashboard/products/create">
            <span style="color: #757575">افزودن</span>
            </nuxt-link></v-list-item-title>
          </v-list-item>
          <v-list-item class="mr-8">
            <v-list-item-icon>
              <v-icon color="#757575">mdi-playlist-minus</v-icon>
            </v-list-item-icon>

            <v-list-item-title class="sub_title">
              <nuxt-link to="/dashboard/branch/change">
              <span style="color: #757575">همه</span>
              </nuxt-link>
              </v-list-item-title>
          </v-list-item>


        </v-list-group>

          <v-list-group>
            <template v-slot:activator>
              <v-list-item-title class="main_title">
                <nuxt-link to="#">
                  <v-list-item-icon><v-icon color="#757575">mdi-source-branch</v-icon></v-list-item-icon>
                  <span style="color: #212121">شعبه‌ها</span>
              </nuxt-link></v-list-item-title>
            </template>

            <v-list-item class="mr-8">
            <v-list-item-icon>
              <v-icon color="#757575">mdi-plus</v-icon>
            </v-list-item-icon>

            <v-list-item-title class="sub_title"><nuxt-link to="/dashboard/branch/create">
            <span style="color: #757575">افزودن</span>
            </nuxt-link></v-list-item-title>
          </v-list-item>
            <v-list-item class="mr-8">
            <v-list-item-icon>
              <v-icon color="#757575">mdi-playlist-minus</v-icon>
            </v-list-item-icon>

            <v-list-item-title class="sub_title">
            <nuxt-link to="/dashboard/branch/list">
            <span style="color: #757575">همه</span>
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

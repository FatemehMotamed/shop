<template>
    <div>

      <v-list class="menu" dir="rtl">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title><nuxt-link to="/dashboard">صفحه اصلی</nuxt-link></v-list-item-title>
          </v-list-item>

          <v-list-group prepend-icon="mdi-account-circle">
            <template v-slot:activator>
              <v-list-item-title>کااربران</v-list-item-title>
            </template>

            <v-list-item>
              <v-list-item-icon><v-icon>mdi-home</v-icon></v-list-item-icon>

              <v-list-item-title><nuxt-link to="/dashboard/users/add">ثبت کاربر</nuxt-link></v-list-item-title>
          </v-list-item>
            <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

              <v-list-item-title><nuxt-link to="/dashboard/users/change">ویرایش و حذف کاربر</nuxt-link></v-list-item-title>
            </v-list-item>

          </v-list-group>

          <v-list-group prepend-icon="mdi-clipboard-list">
            <template v-slot:activator>
              <v-list-item-title>دسته بندی ها</v-list-item-title>
            </template>

            <v-list-item>
              <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

              <v-list-item-title>ثبت دسته بندی</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

              <v-list-item-title>ویرایش و حذف دسته</v-list-item-title>
          </v-list-item>

          </v-list-group>

          <v-list-group prepend-icon="mdi-source-branch">
            <template v-slot:activator>
              <v-list-item-title>شعبه ها</v-list-item-title>
            </template>

            <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title><nuxt-link to="/dashboard/users/add">ثبت کاربر</nuxt-link></v-list-item-title>
          </v-list-item>
            <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title><nuxt-link to="/dashboard/users/change">ویرایش و حذف کاربر</nuxt-link></v-list-item-title>
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

              <v-list-item
                v-for="([title, icon], i) in cruds"
                :key="i"
                link
              >
                <v-list-item-title v-text="title"></v-list-item-title>

                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
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
  .menu a{
    text-decoration: none;
    color: red!important;
    font-size: 1.2vw;
  }

</style>

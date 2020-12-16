<template>
    <div>
      <v-list-group  v-for="item in items">
            <template v-slot:activator>
              <v-list-item-title class="main_title"><nuxt-link to="#">
                <v-list-item-icon><v-icon color="#edd107">{{ item.icon }}</v-icon></v-list-item-icon>
                {{ item.title }}
              </nuxt-link></v-list-item-title>
            </template>

            <v-list-item v-for="subitem in item.sub">
              <v-list-item-icon><v-icon color="#29f109">{{ subitem.icon }}</v-icon></v-list-item-icon>

              <v-list-item-title class="sub_title"><nuxt-link to="/dashboard/users/add">{{ subitem.title}}</nuxt-link></v-list-item-title>
          </v-list-item>


          </v-list-group>
    </div>
</template>

<script>
    export default {
        name: "DrawerMenuItem",
        items:[
          {
            title:'کاربران',
            icon :'mdi-account-circle',
            sub: [
              {title:'ثبت کاربر', icon:'mdi-plus'},
              {title:'ویرایش و حذف کاربر', icon:'mdi-minus'},
                ]
          },
          {},
          {},
        ]
    }
</script>

<style scoped>

</style>

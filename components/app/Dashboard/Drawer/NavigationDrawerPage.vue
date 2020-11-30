<template>
    <div>

      <v-list dir="rtl">
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>صفحه اصلی</v-list-item-title>
      </v-list-item>

      <v-list-group
        prepend-icon="mdi-account-circle"
      >
        <template v-slot:activator>
          <v-list-item-title>کااربران</v-list-item-title>
        </template>

        <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>ثبت کاربر</v-list-item-title>
      </v-list-item>
        <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>ویرایش و حذف کاربر</v-list-item-title>
      </v-list-item>

      </v-list-group>

      <v-list-group
        prepend-icon="mdi-account-circle"
      >
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

      <v-list-group
        prepend-icon="mdi-account-circle"
      >
        <template v-slot:activator>
          <v-list-item-title>کااربران</v-list-item-title>
        </template>

        <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>ثبت کاربر</v-list-item-title>
      </v-list-item>
        <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>ویرایش و حذف کاربر</v-list-item-title>
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

</style>

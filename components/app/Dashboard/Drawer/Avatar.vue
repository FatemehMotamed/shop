<template>

      <v-menu
        bottom
        rounded
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            v-on="on"
          >
            <v-avatar
              color="brown"
              class="avatar_circle"
            >
              <span class="white--text headline">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar
                color="brown"
              >
                <span class="white--text headline">{{ user.initials }}</span>
              </v-avatar>
              <h3>{{ auth[0] }}</h3>
              <p class="caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
                @click="auth[1]"
              >
                ویرایش اطلاعات
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
                @click="auth[1]"
              >
                خروج
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>



</template>


<script>
import{ mapGetters, mapState, mapMutations } from 'vuex'

export default {
  props:{
     auth:{
       type: Array,
       default: '',
     },
  },
    data: () => ({
      user: {
        initials: 'JD',
        fullName: 'John Doe',
        email: 'john.doe@doe.com',
      },
    }),
}
</script>

<style scoped>
.avatar_circle{
  height: 3vw!important;
}
</style>

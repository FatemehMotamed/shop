<template>
    <v-card>
    <v-toolbar
      color="#BDBDBD"
      flat
      prominent
    >
      <template>
        <v-tabs
          v-model="tabs"
          light
          class="grey lighten-5"
          style="font-family: 'Vazir', sans-serif; !important"
        >
          <v-tab>
            نظرات کاربران
          </v-tab>
          <v-tab>
            مشخصات محصول
          </v-tab>

        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs" style="font-family: 'Vazir', sans-serif; !important"
      light
      class="grey lighten-5">
      <v-tab-item style="font-family: 'Vazir', sans-serif; !important"
          light>
      <sub-property></sub-property>
      </v-tab-item>
      <v-tab-item v-for="(l, i) in product.comment" :key="i"> 
        <comment :comment="l"></comment>
      </v-tab-item>

    </v-tabs-items>
  </v-card>
</template>

<script>
import SubProperty from '@/components/app/Product/SubProperty.vue'
import Comment from '@/components/app/Product/Comment.vue'

  export default {
    props: {
      product:{
        type: Array,
        default: [],
      },
    },
    components:{
      SubProperty,
      Comment,
    },
    data () {
      return {
        tabs: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>

<style scoped>

  .info_product{
    float: right
  }

</style>
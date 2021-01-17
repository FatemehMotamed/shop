<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-list>
      <v-list-item-group v-model="model">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
           @click="send_number_to_main(i)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>

import EventBus from '@/assets/js/eventBus.js'

import MenMenu from '@/components/app/Mobile/Header/MenMenu.vue'

  export default {
    methods:{
        send_number_to_main(i){
            EventBus.$emit('number', i)
        },
    },
    components:{
        MenMenu,

    },
    data: () => ({
      items: [
        {
          icon: 'mdi-inbox',
          text: 'مردانه',
        },
        {
          icon: 'mdi-star',
          text: 'زنانه',
        },
        {
          icon: 'mdi-send',
          text: 'بچه گانه',
        },
        {
          icon: 'mdi-email-open',
          text: 'زیبایی و سلامت',
        },
                {
          icon: 'mdi-email-open',
          text: 'فروش ویژه',
        },
                {
          icon: 'mdi-email-open',
          text: 'برندها',
        },
                {
          icon: 'mdi-email-open',
          text: 'خانه طراحان ایرانی',
        },
                {
          icon: 'mdi-email-open',
          text: 'کارت هدیه',
        },
      ],
      model: 1,
    }),
  }
</script>
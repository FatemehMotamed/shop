<template>
  <v-card
    class="mx-auto"
    max-width="500"
    elevation="0"

  >
    <v-list>
      <v-list-item-group v-model="model">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="send_number_to_main(i)">
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

  export default {
    methods:{
      send_number_to_main(i){
        if(i == 0){
          EventBus.$emit('number', -1)
        }
      },
    },
    data: () => ({
      items: [
        {
          icon: 'mdi-forward',
          text: 'زنانه',
        },
        {
          text: 'همه کالاهای زنانه',
        },
        {
          icon: 'mdi-tshirt-v',
          text: 'لباس',
        },
        {
          icon: 'mdi-bag-personal',
          text: 'کیف',
        },
        {
          icon: 'mdi-shoe-formal',
          text: 'کفش',
        },
        {
          icon: 'mdi-glasses',
          text: 'اکسسوری',
        },
        {
          icon: 'mdi-run',
          text: 'ورزشی',
        },
      ],
      model: 1,
    }),
  }
</script>
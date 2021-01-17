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
          text: 'زیبایی و سلامت',
        },
        {
          text: 'همه کالاهای زیبایی و سلامت',
        },
        {
          icon: 'mdi-tshirt-v',
          text: 'عطر و ادکلن',
        },
        {
          icon: 'mdi-bag-personal',
          text: 'آرایش و گریم',
        },
        {
          icon: 'mdi-shoe-formal',
          text: 'مراقبت پوست',
        },
        {
          icon: 'mdi-glasses',
          text: 'آرایش و مراقبت مو',
        },
        {
          icon: 'mdi-flower',
          text: 'بهداشت و مراقب شخصی',
        },
      ],
      model: 1,
    }),
  }
</script>
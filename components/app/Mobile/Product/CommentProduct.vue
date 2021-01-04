<template>

<div>
    <v-row class="justify-space-around">
    <div>نظرات کاربران</div>
    <div><nuxt-link to="#">مشاهده همه</nuxt-link></div>
    </v-row>

    <v-sheet
        class="mx-auto"
    >
        <v-slide-group
        v-model="model"
        class="pa-4"
        >
        <v-slide-item
            v-for="(l, i) in comments_product"
            :key="i"
        >
            <v-card
            :color="active ? undefined : 'grey lighten-1'"
            class="ma-1"
            height="200"
            width="250"
            >
            <v-row
                class="fill-height mr-4 mt-3"
                align="right"
                
            >
            <div v-if="l.like == 0 || l.like == 1 || l.like == 2" style="font-size:0.8em">
                <v-icon color="red darken-1" v-text="'mdi-thumb-down'"></v-icon>
                <span class="red--text darken-1">خرید این محصول را توصیه نمیکنم</span>
            </div>

            <div v-if="l.like == 4 || l.like == 5 || l.like == 6" style="font-size:0.8em">
                <v-icon color="green darken-1" v-text="'mdi-thumb-up'"></v-icon>
                <span class="green--text darken-1">خرید این محصول را توصیه میکنم</span>
            </div>
            <div><strong>{{ l.title }}</strong></div>
            <div>
                <p style="font-size:0.8em">{{ l.comment }}</p>
            </div>
            <div style="font-size:0.8em" class="mr-3">
                <v-row>
                    <div>{{ l.created_at }}</div>
                    <div class="pl-2 pr-2">|</div>
                    <div>{{ l.author }}</div>
                </v-row>
            </div>

            </v-row>
            </v-card>
        </v-slide-item>
        </v-slide-group>
    </v-sheet>


    <v-row>

        <div>در مورد این کالا نظر دهید</div>
        <div>
        <template v-slot`:activator`="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
        </div>
    </v-row>
</div>
  
</template>

<script>
import CreateComment from '@/components/app/Mobile/Product/CreateComment.vue'
  export default {
    props: {
        comments_product:Object,
        default: '',
    },
    data: () => ({
      model: null,
    }),
  }
</script>
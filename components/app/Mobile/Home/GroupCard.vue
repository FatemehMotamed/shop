<template>
  <v-sheet
    class="mx-auto"
    max-width="800"
  >

    <v-slide-group
      v-model="model"
    >
      <v-slide-item
        v-for="(l, index) in list_1" :key="index"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? undefined : 'grey lighten-1'"
          class="ma-1"
          height="300"
          width="200"
          @click="toggle"
        >

        <product-card :product="l"></product-card>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>

    import ProductCard from '@/components/app/Mobile/Home/ProductCard.vue';

    export default {



        components:{
            ProductCard: ProductCard

        },
        data: () => ({
            model: null,
            list_1: [
              {
                title: 'مانتو ولیعصر',
                body: 'پالتو زنانه مانتو ولیعصر مدل رکسانا',
                image: 'https://dkstatics-public.digikala.com/digikala-products/bd6d32212770e6b2ef60d31ab8f32164c6a80510_1597751544.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
                code: 'کد 188',
                off: '198,000',
                price:'198,000 تومان',
              },
              {
                title: 'مانتو ولیعصر',
                body: 'پالتو زنانه مانتو ولیعصر مدل رکسانا',
                image: 'https://dkstatics-public.digikala.com/digikala-products/bd6d32212770e6b2ef60d31ab8f32164c6a80510_1597751544.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
                code: 'کد 188',
                off: '198,000',
                price:'198,000 تومان',
              },
              {
                title: 'مانتو ولیعصر',
                body: 'پالتو زنانه مانتو ولیعصر مدل رکسانا',
                image: 'https://dkstatics-public.digikala.com/digikala-products/bd6d32212770e6b2ef60d31ab8f32164c6a80510_1597751544.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
                code: 'کد 188',
                off: '198,000',
                price:'198,000 تومان',
              },
            ]
        }),
    }
</script>

<style scoped>

</style>
<template>

<div>
    <div v-for="(l, index) in tile_lists_01" :key="index">
        <v-row class="justify-space-between text-center pa-6">
            <product-tile :product="l"></product-tile>
            <product-tile :product="l"></product-tile>
        </v-row>

    </div>
</div>
    
</template>

<script>

import ProductTile from "@/components/core/ProductTile.vue";
export default {
    components:{
        ProductTile,
    },
    data: () => ({
        tile_lists_01: [
            {
                image: 'https://dkstatics-public.digikala.com/digikala-products/117614302.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
                off: '۱۳٪',
                price: 'تومان ۲۹۸.۰۰۰',
                brand: 'باینت',
            },
            {
                image: 'https://dkstatics-public.digikala.com/digikala-products/117614302.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
                off: '۱۳٪',
                price: 'تومان ۲۹۸.۰۰۰',
                brand: 'باینت',
            },
        ]
    })
    
}
</script>

<style scoped>

</style>
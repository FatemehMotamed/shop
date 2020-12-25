<template>

    <div class="gray">
        <div class="red darken-3" style="width:9vw; height:4vw; float:right">
            <span><strong class="red--text text--lighten-5">{{ product.off }}</strong></span>
        </div>
        <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        max-height="150"
        max-width="150"
        :src="product.image"
        >
        </v-img>
        <v-row class="justify-space-between text-center">
            <div class="pa-4"><strong><span>{{ product.price }}</span></strong></div>
            <div class="pa-4"><strong>{{ product.brand }}</strong></div>
        </v-row>
    </div>
    
</template>

<script>
export default {
    props:{
        product:{
            type: Object,
            require: true,
        },
    },
    
}
</script>

<style scoped>

</style>
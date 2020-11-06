<template>

    <v-row>
      <v-carousel cycle>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    </v-row>

</template>

<script>
    export default {
        name: "Slide2",
        data(){
            return {
                items: [
                            {
                              src: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/f6fbb2a23a9f36faf1962b60347af01d54019355_1603403034.jpg?x-oss-process=image/quality,q_80',
                            },
                            {
                              src: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/14094877ee062e24088d7e3267f0fba8cdbb9900_1603696660.jpg?x-oss-process=image/quality,q_80',
                            },
                            {
                              src: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/f6fbb2a23a9f36faf1962b60347af01d54019355_1603403034.jpg?x-oss-process=image/quality,q_80',
                            },
                            {
                              src: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/8aa7a0b095b8f366751993e1cce2f6c5339c0417_1603403014.jpg?x-oss-process=image/quality,q_80',
                            },
                        ]
            }
        }
    }
</script>

<style scoped>
  /*.box{*/
  /*  width: 100vw;*/
  /*  margin-left: 10vw;*/
  /*}*/
</style>

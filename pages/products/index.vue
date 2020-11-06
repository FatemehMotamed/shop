<template>
  <div>
    <v-container fluid class="box">
        <slide2></slide2>
        <card-topic></card-topic>
        <product-group :items="popular_items" title="محبوب ترین ها"></product-group>
        <show-case></show-case>
        <product-group :items="new_items" title="جدیدترین ها"></product-group>
        <footer-product></footer-product>
    </v-container>

  </div>

</template>

<script>
  import Slide2 from "@/components/app/Slide/Slide2";
  import CardTopic from "@/components/app/Product/CardTopic";
  import FooterProduct from "@/components/app/Footer/FooterProduct";
  import ProductGroup from "@/components/app/Product/ProductGroup";
  import ShowCase from "@/components/app/Product/ShowCase";
    export default {
        name: "index",
        components: {
            Slide2:Slide2,
            CardTopic:CardTopic,
            FooterProduct:FooterProduct,
            ProductGroup:ProductGroup,
            ShowCase:ShowCase,

        },
        data(){
            return{
                popular_items:[
                    'https://dkstatics-public.digikala.com/digikala-products/117602102.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/117642937.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/117596894.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/116936395.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/117603487.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/117289581.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/116936208.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/118966895.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/117690088.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public-2.digikala.com/digikala-products/111462030.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/119350798.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/117367287.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/119228249.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/120802249.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/119049626.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/3350742.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/110842370.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/117672045.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/120491191.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/117680612.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/114283383.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/117612307.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                ],
                new_items:[
                    'https://dkstatics-public.digikala.com/digikala-products/55252753250839c6aa7d21e814d1c14cb096c9fa_1604473357.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/0bba6b0ba2430c8e6806f50a9739668ab4d96705_1604473290.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/1c932e2792893f44429eb68eed12608d06b2419d_1604473421.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/0f95649694de4c49f3decc8be973b4530ac6f334_1604473147.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/c8f0ffcd8391bb841fdf7908a8155f81d6561090_1604473295.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/2a14bf080166fe1551df38a717699bb135324cae_1604473070.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/3465058022bf9b053fba97b10008fce89fb265d4_1604473217.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/7c2ecabc04a740924a07d36efb4432bb80f9c71d_1604473901.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/116936395.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/117603487.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/117289581.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/116936208.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/118966895.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public.digikala.com/digikala-products/117690088.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',
                    'https://dkstatics-public-2.digikala.com/digikala-products/111462030.jpg?x-oss-process=image/resize,m_fill,h_600,w_480/quality,q_60',

                ],
            }
        }
    }
</script>

<style scoped>
  .box{
    font-family: 'Markazi Text', serif !important;
  }

</style>

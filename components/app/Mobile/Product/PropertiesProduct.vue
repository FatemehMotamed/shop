<template>


  <div>

    <product-slider></product-slider>
    <v-row class="justify-space-between ma-1">
      <div class="pa-1">
        <nuxt-link :to="properties_data_1.brand_link" style="">{{ properties_data_1.brand }}</nuxt-link>
        <span class="pa-1 rounded-pill primary">برند برتر</span>
      </div>
      <div class="pa-1">
        <span>({{ properties_data_1.person_rating }})</span>
        <span>{{ properties_data_1.rating }}</span>
        <v-icon style="color:#FFFF00">mdi-star</v-icon>
        
      </div>

    </v-row>
    <div class="pa-1">{{ properties_data_1.title }} مدل<span>{{ properties_data_1.model }}</span></div>

    <v-row class="justify-space-between ma-1">
      <div class="red accent-3 red--text text--lighten-5 pa-1">تخفیف
        <span class="red--text text--lighten-5">{{ properties_data_1.pre_price }}</span>
        <span class="red--text text--lighten-5">تومان</span>

      </div>
      <div class="pl-1 text-decoration-line-through" style="direction:ltr; font-size:0.9em">
        <span style="color:#616161">{{ properties_data_1.pre_price }}</span>
        <span style="color:#616161">تومان</span>
      </div>
    </v-row>
    <div class="pl-1 pb-1" style="direction:ltr">
      <span>{{ properties_data_1.price }}</span>
      <span>تومان</span>
    </div>
    <div class="pa-1 mb-4">فروش توسط <span>{{ properties_data_1.seller }}</span></div>

    <v-divider></v-divider>

    <div class="mt-4">سایز:
      <span class="blue-grey--text text--darken-1">{{ size }}</span>
      <span class="blue-grey--text text--darken-1">سایز</span>

    </div>
    
    <div class="mr-4">
      <ul v-for="(l, i) in properties_data_1.size_name" 
      :key="i" style="float:right">
        <li :model="size_number(i)" style="list-style: none;" 
        class="pa-1 pl-5 pr-5 rounded-pill blue-grey lighten-5 mb-16 mt-2" v-if="l != ''">
          {{ l }}
        </li>
      </ul>
    </div>

    <v-divider class="mt-16"></v-divider>

    <div class="mt-10">
      <label>ویژگی‌ها:</label>
      <br>

      <ul v-for="(l, i) in properties_data_1.properties" 
      :key="i" style="float:right" class="mr-4">
        <li style="list-style: none;">{{ l }}-</li>
      </ul>
    </div>

    <v-divider class="mt-16"></v-divider>

        <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          مشخصات فنی
          <template 
          v-slot:actions
          :headers="headers"
          :items="desserts">
            <v-icon color="primary">
              $expand
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content 
        v-for="(l, i) in properties_data_1.custom_properties_1"
        :key="i">
          {{ l }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-divider></v-divider>

    <comment-product class="mt-4" :comments_product="comments_product"></comment-product>


  </div>
    
</template>

<script>
import CommentProduct from '@/components/app/Mobile/Product/CommentProduct.vue'
import ProductSlider from '@/components/app/Mobile/Product/ProductSlider.vue'

export default {


  props:{
    properties_data_1:{
      type:Object,
      default: '',
    },
    comments_product: {
      type:Array,
      default: '',
    },
  },
  components:{
    CommentProduct,
    ProductSlider,
  },
  data(){
    return {
      size: 0
    }
  },
  methods: {
    size_number(i){
      var i = i + 1
      this.size = i
    },
  },
    
}
</script>

<style scoped>

</style>
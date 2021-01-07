<template>

          <v-select
              v-on:change="fill_category($event)"
              color="#0ad3f7"
              align-center
              :items="category"
               item-value="id"
              item-text="name"
              menu-props="auto"
              label="دسته بندی مادر"
              hide-details
              single-line
            ></v-select>

</template>

<script>
  import EventBuss from '@/assets/js/eventBus'
    export default {
        name: "SelectboxRole",
        data(){
          return{
              category:[],
              select_category:'',
          }
        },
      methods:{
        fill_category(event){
            this.select_category=event
            console.log(this.select_category)
            EventBuss.$emit("set-category",this.select_category)
        },
      },
        created() {
              let self=this;
              this.$axios.post('/category/search').then(function(response){
                self.category = response.data.data;
        })
        },


    }
</script>

<style scoped>
*{
  font-family: 'Markazi Text', serif !important;
}
.v-select{
  color: #0ad3f7!important;
}
</style>

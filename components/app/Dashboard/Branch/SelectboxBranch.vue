<template>

      <v-select
              outlined
              dense
              v-on:change="fill_branch($event)"
              color="#3f6ad8"
              align-center
              :items="branch"
               item-value="id"
              item-text="name"
              menu-props="auto"
              label="شعبه"
              hide-details
              single-line
            ></v-select>



</template>

<script>
  import EventBuss from '@/assets/js/eventBus'
    export default {
        name: "SelectboxBranch",
        data(){
          return{
              branch:[],
              select_branch:'',
          }
        },
      methods:{
          fill_branch(event){
          this.select_branch=event
          EventBuss.$emit("set-branch",this.select_branch)
      },
      },
        created() {
            let self=this;
              this.$axios.get('/branch/search').then(function(response){
                self.branch = response.data.data;
        })
        }
    }
</script>

<style scoped>
*{
  font-family: 'Markazi Text', serif !important;
}

</style>

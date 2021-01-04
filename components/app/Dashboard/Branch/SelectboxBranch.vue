<template>



      <v-select
              v-on:change="fill_branch($event)"
              color="#0ad3f7"
              align-center
              :items="branch"
               item-value="id"
              item-text="name"
              menu-props="auto"
              label="شعبه"
              hide-details
              prepend-icon="mdi-account"
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
              this.$axios.get('/branch/search/').then(function(response){
                self.branch = response.data.data;
        })
        }
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

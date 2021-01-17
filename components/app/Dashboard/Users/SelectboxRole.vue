<template>

          <v-select
              outlined
              dense
              v-on:change="fill_role($event)"
              color="#3f6ad8"
              align-center
              :items="role"
               item-value="id"
              item-text="name"
              menu-props="auto"
              label="نقش کاربر"
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
              role:[],
              select_role:'',
          }
        },
      methods:{
          fill_role(event){
            this.select_role=event
            EventBuss.$emit("set-role",this.select_role)
        },
      },
        created() {
              let self=this;
              this.$axios.get('/roles').then(function(response){
                self.role = response.data;
        })
        }
    }
</script>

<style scoped>
*{
  font-family: 'Markazi Text', serif !important;
}

</style>

<template>
    <row>
        <v-col cols="12" md="12" sm="12" lg="12">
          <v-select
              v-on:change="fill_role($event)"
              color="#0ad3f7"
              align-center
              :items="role"
               item-value="id"
              item-text="name"
              menu-props="auto"
              label="نقش کاربر"
              hide-details
              prepend-icon="mdi-account"
              single-line
            ></v-select>
        </v-col>
    </row>
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
.v-select{
  color: #0ad3f7!important;
}
</style>

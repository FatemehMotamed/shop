<template>
  <v-card>
<!--    <v-card-title></v-card-title>-->
    <v-data-table
      dark
      dir="rtl"
      class="text-center"
      :headers="table_title"
      :items="list"
      :expanded.sync="expanded"
      show-expand
      single-expand
      item-key="name"
    >
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <div class="row sp-details">
            <div class="col-4 text-right">
              ویژگی های این دسته:
            </div>
          </div>
          <div class="row sp-details">
            <div class="col-4 text-right">
              <v-list>
                <v-list-item v-for="(m,index) in item.meta">{{item.meta[index].value}}</v-list-item>
              </v-list>

            </div>
          </div>

        </td>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon v-if="delete_icon" small @click="deleteItem(item)">mdi-delete</v-icon>
        <!--       <v-icon small v-if="item.status=='active'" @click="toggle_status(item)">mdi-eye</v-icon>-->
        <!--       <v-icon small v-if="item.status=='inactive'" @click="toggle_status(item)" v-model="item.status">mdi-eye-off</v-icon>-->
        {{item.status_bool}}
        <v-icon @click="toggle_status(item)" small :class="[ item.status_bool ? 'is-on' : 'is-off' ]" >mdi-eye</v-icon>
        <!--      <v-icon small  @click="toggle_status(item)"  :class="{t:item.status_bool}">{{item.icon}}</v-icon>-->
      </template>

    </v-data-table>
  </v-card>
</template>

<script>
    export default {
        name: "ExpandableTable",
        props:{
        list: {
          type: Array,
          default: '',
        },
        table_title: {
          type: Array,
          default: '',
        },
        delete_icon:{
          type:Boolean,
          default:false
        },
        table_name:{
          type:String,
          default:'',
        }
      },
        data(){
          return{
            search: '',
            expanded: [],
            input1: '',
            input2: null,
            input3: null,
          }
        }
    }
</script>

<style scoped>
  .v-table{
  text-align: center;
}
</style>

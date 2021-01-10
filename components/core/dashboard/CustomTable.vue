<template>
  <v-data-table dir="rtl" dark
                :headers="table_title"
                :items="list"
                sort-by="calories"
                class="text-center">
    <template v-slot:top color>

      <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card>
          <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>

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
    <template v-slot:no-data>
      <v-btn color="primary" >
        Reset
      </v-btn>
    </template>

  </v-data-table>

</template>


<script>
  import EventBuss from '@/assets/js/eventBus'
  export default {

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
    data: () => ({

      status:true,
      // eye_icon:'mdi-eye',
      // eye_icon_off:'mdi-eye-off',
      dialog: false,
      dialogDelete: false,

      editedIndex: -1,
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },


    methods: {
      changeColor(item){
        this.editedItem = Object.assign({}, item)
        this.editedItem.status_bool=!this.editedItem.status_bool
      },

      toggle_status(item){
        item.status_bool =! item.status_bool
        // console.log(!item.status_bool)
        if (item.status_bool){
          EventBuss.$emit('change-status',['inactive',item.id])
        }
        else{
          EventBuss.$emit('change-status', ['active',item.id])
        }

      },
      editItem(item){
        this.editedItem = Object.assign({}, item)
        // console.log("hhhhhhhh",this.editedItem.f_name)
        this.$router.push('/dashboard/'+this.table_name+'/edit/'+this.editedItem.id)
      },

      deleteItem (item) {
        this.editedIndex = this.list.indexOf(item)
        this.editedItem = Object.assign({}, item)
        console.log("hhhhhhhh",this.editedItem.f_name)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.list.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

    },

    // created () {
    //   this.icon_status()
    // },
  }
</script>
<style scoped>
  .is-off{
    color: gray;
  }
  .is-on{
    color: white;
  }


</style>

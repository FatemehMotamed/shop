<template>
    <v-data-table dir="rtl"
    :headers="table_title"
    :items="list"
    sort-by="calories"
    class="text-center"
  >
    <template v-slot:top>
      <v-toolbar flat>
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
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon small @click="deleteItem(item)">
        mdi-delete
      </v-icon>
       <v-icon small>
        mdi-eye
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" >
        Reset
      </v-btn>
    </template>

    </v-data-table>

</template>


<script>
  export default {

    props:{
      list: {
        type: Array,
        default: '',
      },
      table_title: {
        type: Array,
        default: '',
      }
    },
    data: () => ({
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

    created () {
      // console.log("hhhhhhhhh",list.id)
    },

    methods: {
      editItem(item){
        this.editedItem = Object.assign({}, item)
        // console.log("hhhhhhhh",this.editedItem.f_name)
        this.$router.push('/dashboard/users/edit/'+this.editedItem.id)
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
  }
</script>

<template>

    <v-dialog v-model="dialog" width="600px">
      <template v-slot:activator="{ on, attrs }">
        <div class="float-left" v-if="disable">
          <v-btn disabled height="3vw" width="10vw">
          ثبت ویژگی
          <v-icon>mdi-format-list-bulleted</v-icon>
        </v-btn>
        </div>
        <div  class="float-left" v-else>
          <v-btn color="#FA950B" v-bind="attrs" v-on="on" width="10vw" height="3vw" class="custom_btn">
            ثبت ویژگی
            <v-icon>mdi-format-list-bulleted</v-icon>
          </v-btn>
        </div>

      </template>
      <v-card>
        <v-card-title dir="rtl">
          <span>ثبت ویژگی</span>
        </v-card-title>

        <v-card-text>
          <attribute-form></attribute-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">خروج</v-btn>
          <v-btn color="green darken-1" text @click="saveAttributes()">ذخیره</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


</template>

<script>
import AttributeForm from "@/components/app/Dashboard/Category/AttributeForm";
import EventBus from '@/assets/js/eventBus.js';
export default {
  name: "DialogBox",
  props:['disable'],
  components:{
    AttributeForm:AttributeForm
  },
  data () {
    return {
      dialog:false,
      form_data:{
        id:'',
        properties:[]
      }
    }
  },
  methods:{
    getAttributes(item){

      this.form_data.properties=item

    },
    get_id_category(item){
      this.form_data.id=item
    },
    saveAttributes(){

      let self=this
      this.$axios.post('/category/addProperties/',self.form_data)
      self.dialog = false
      // this.$router.push('/dashboard/category/create')
    }
  },
  mounted() {
    EventBus.$on('send-attributes',item=>{this.getAttributes(item)})
    EventBus.$on('get-id',item=>{this.get_id_category(item)})
  }

}
</script>

<style scoped>

  .custom_btn{
    font-family: 'Markazi Text', serif !important;
    font-weight: bold;
    font-size: 1vw;
    color: black!important;
  }
  *{
    font-family: 'Markazi Text', serif !important;
  }
</style>

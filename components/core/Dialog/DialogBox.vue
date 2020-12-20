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
          <v-btn color="green darken-1" text @click="dialog = false">ذخیره</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


</template>

<script>
import AttributeForm from "@/components/app/Dashboard/Category/AttributeForm";
export default {
  name: "DialogBox",
  props:['disable'],
  components:{
    AttributeForm:AttributeForm
  },
  data () {
    return {
      dialog:false,
    }
  },
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

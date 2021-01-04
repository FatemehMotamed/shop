<template>

    <v-container >
      <form @submit.prevent="registerAttribute">
        <v-row>
          <v-col cols="12" md="4" lg="4" xs="4" sm="4">
            <v-btn  class="mx-2 mt-7 float-right" fab width="2vw" height="2vw" color="success" v-on:click.prevent="addAttribute()"><v-icon>mdi-plus</v-icon></v-btn>
          </v-col >
          <v-col cols="12" md="8" lg="8" xs="8" sm="8">
            <custom-textbox txt="نام ویژگی" v-model="newAttribute.title"></custom-textbox>
          </v-col>
        </v-row>
        <v-row dir="rtl" class="attribute_table">
          <v-simple-table  style="width: 75%; float: right">
            <template v-slot: >
              <thead>
              <tr>
                <th class="text-right">
                  ویژگی
                </th>
                <th class="text-right">
                  حذف ویژگی
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item,index) in attributes">
                <td class="text-right">{{item}}</td>
                <td class="text-right"><v-btn class="" fab width="1.5vw" height="1.5vw" color="error" v-on:click.prevent="removeAttribute(index)"><v-icon>mdi-minus</v-icon></v-btn></td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-row>


      </form>
    </v-container>

</template>

<script>
import CustomButton from '@/components/core/dashboard/CustomButton'
import CustomTextbox from '@/components/core/dashboard/CustomTextbox'
import CustomSelect from '@/components/core/dashboard/CustomSelect'
import EventBus from '@/assets/js/eventBus.js'

export default {
  name: "AttributeForm",
  components:{
    CustomButton:CustomButton,
    CustomTextbox:CustomTextbox,
    CustomSelect:CustomSelect,
  },
  data(){
    return{
      attributes:[],
      newAttribute:{title:''},
      form_data:{
        name:'',
        parent:'',
      }
    }
  },

  methods:{
    async registerAttribute(){
      console.log(this.form_data)
      this.toggle=false
      // console.log("dsda")
    },

    addAttribute(){

      if (this.newAttribute.title != ""){
        this.attributes.push(this.newAttribute.title)
        this.newAttribute.title=''
        EventBus.$emit('send-attributes',this.attributes)

      }

    },
    removeAttribute(index){
      console.log(index)
      this.attributes.splice(index,1)
    }
  },
}
</script>

<style scoped>

</style>

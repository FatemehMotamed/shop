<template>

    <v-container >
      <form @submit.prevent="registerAttribute">
        <v-row>
          <custom-textbox txt="نام ویژگی" v-model="newAttribute.title"></custom-textbox>
          <v-btn class="mx-2 mt-7" fab width="2vw" height="2vw" color="success" v-on:click.prevent="addAttribute()"><v-icon>mdi-plus</v-icon></v-btn>
        </v-row>
        <v-row v-for="(item,index) in attributes">
          <v-col cols="12" md="6" lg="6" sm="6" dir="rtl">
            {{item}}
            <v-btn class="mx-2 mt-7" fab width="2vw" height="2vw" color="error" v-on:click.prevent="removeAttribute(index)"><v-icon>mdi-minus</v-icon></v-btn>
          </v-col>
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

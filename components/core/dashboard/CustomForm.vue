<template>
  <div class="main rounded-xl">
    <v-container >
      <form @submit.prevent="registerBranch">
<!--                <ul>-->
<!--                  <li v-for="(item, key, index) in form_data">-->
<!--                    {{ item }} - {{ key }} - {{ index }}-->
<!--                    <custom-textbox :txt="item" v-model="form_data[key]"></custom-textbox>&ndash;&gt;-->
<!--                  </li>-->
<!--                </ul>-->

        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
            <v-row v-for="(item, key, index) in form_data">
              <custom-textbox :txt="item" v-model="form_data[key]"></custom-textbox>
            </v-row>

          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <v-row v-for="(item, key, index) in form_data2">
              <custom-textbox :txt="item" v-model="form_data2[key]"></custom-textbox>
            </v-row>
          </v-col>
        </v-row>
                  <custom-select></custom-select>

        <v-row>
          <v-col cols="12" md="2" lg="2" sm="2" offset-lg="5">
            <custom-button txt="ثبت شعبه" bgcolor="#0ad3f7" fontcolor="black" fontsize="1.3" icon="mdi-plus" iconcolor="black" width="10vw" height="3vw"></custom-button>
          </v-col>
        </v-row>


      </form>
    </v-container>
  </div>
</template>

<script>
import CustomButton from '@/components/core/dashboard/CustomButton'
import CustomTextbox from '@/components/core/dashboard/CustomTextbox'
import CustomSelect from '@/components/core/dashboard/CustomSelect'
import EventBuss from '@/assets/js/eventBus'
export default {
  name: "CustomForm",
  props:{
    form_data:{
      type: Object,
      required: true,
    },
    form_data2:{
      type: Object,
      required: true,
    },
  },
  components:{
    CustomButton:CustomButton,
    CustomTextbox:CustomTextbox,
    CustomSelect:CustomSelect
  },
  data(){
    return{
      data_post:{}

    }
  },

  methods:{
    merge_data(){
      let i;
      for (i in this.form_data){
        this.data_post[i]=this.form_data[i]
      }
      for (i in this.form_data2){
        this.data_post[i]=this.form_data2[i]
      }

    },
    async registerBranch(){
      this.merge_data()
      // console.log(this.form_data)
      // console.log(this.form_data)
      console.log(this.data_post)
      // console.log("dsda")
    },
    set_state_city(item){
      // console.log('test',item)
      this.form_data.state=item[0]
      this.form_data.city=item[1]
    }

  },
  mounted(item){
    this.merge_data()
    EventBuss.$on('set-city',item =>{this.set_state_city(item)})
  }
}
</script>

<style scoped>
.main{
  width: 60vw;
  background-color: ghostwhite;
  margin-right: auto;
  margin-left: auto;
}

</style>

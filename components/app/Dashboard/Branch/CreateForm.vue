<template>
  <div class="main rounded-xl">
    <v-container >
      <form @submit.prevent="registerBranch">
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="نام شعبه" v-model="form_data.name"></custom-textbox>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="شماره تلفن" v-model="form_data.phones"></custom-textbox>
          </v-col>
        </v-row>
        <custom-select></custom-select>
        <v-row>
          <v-col cols="12" md="12" lg="12" sm="12">
            <custom-textbox txt="آدرس" textarea=true v-model="form_data.address"></custom-textbox>
          </v-col>

        </v-row>
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="شماره فکس" v-model="form_data.fax"></custom-textbox>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="کد پستی" v-model="form_data.postal_code"></custom-textbox>
          </v-col>
        </v-row>


        <v-row>
          <v-col cols="12" md="2" lg="2" sm="2" offset-lg="5">
            <custom-button txt="ثبت شعبه" bgcolor="#0ad3f7" fontcolor="black" fontsize="1.3" icon="mdi-source-fork" iconcolor="black" width="10vw" height="3vw"></custom-button>
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
  name: "CreateForm",
  components:{
      CustomButton:CustomButton,
      CustomTextbox:CustomTextbox,
      CustomSelect:CustomSelect
    },
    data(){
      return{
        form_data:{
          name:'',
          // phones:'',
          county:'24',
          city:'159',
          // address:'',
          // postal_code:'',
          // fax:'',
        }
      }
    },

    methods:{
      async registerBranch() {
      let self = this;
      try {
        await this.$axios.post('branch', this.form_data).then(function(response){
          console.log(response);
        })
          // .cache((error)=>{
          // window.alert("error");
        // })
        console.log(this.form_data)
        // this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    },
      set_state_city(item){
        // console.log('test',item)
        this.form_data.county=item[0]
        this.form_data.city=item[1]
      }

    },
    mounted(item) {
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

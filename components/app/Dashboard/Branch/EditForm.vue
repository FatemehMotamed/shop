<template>
  <div class="main rounded-xl">
<!--{{form_data}}-->
    <v-container >

      <form @submit.prevent="updateBranch">
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="نام شعبه" v-model="form_data[0].name" v-if="form_data[0]" :data_txt="form_data[0].name" ></custom-textbox>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="شماره تلفن"   v-model="form_data[0].phones" v-if="form_data[0]" :data_txt="form_data[0].phones"></custom-textbox>
          </v-col>
        </v-row>
        <custom-select></custom-select>
        <v-row>
          <v-col cols="12" md="12" lg="12" sm="12">
            <custom-textbox txt="آدرس" v-if="form_data[0]" textarea=true v-model="form_data[0].address" :data_txt="form_data[0].address"></custom-textbox>
          </v-col>

        </v-row>
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="شماره فکس" v-if="form_data[0]" v-model="form_data[0].fax" :data_txt="form_data[0].fax"></custom-textbox>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <custom-textbox txt="کد پستی" v-if="form_data[0]" v-model="form_data[0].postal_code" :data_txt="form_data[0].postal_code"></custom-textbox>
          </v-col>
        </v-row>


        <v-row>
          <v-col cols="12" md="2" lg="2" sm="2" offset-lg="5">
            <custom-button txt="ویرایش شعبه" bgcolor="green" fontcolor="black" fontsize="1.3" icon="mdi-edit" iconcolor="black" width="10vw" height="3vw"></custom-button>
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
    name: "EditForm",
    props:['id_branch'],
    components:{
      CustomButton:CustomButton,
      CustomTextbox:CustomTextbox,
      CustomSelect:CustomSelect
    },
    data(){
      return{
        temp_data:[],
        form_data:{
          name:'',
          phones:'',
          county:'',
          city:'',
          address:'',
          postal_code:'',
          fax:'',
        }
      }
    },

    methods:{
      async updateBranch() {
      let self = this;
      try {
        await this.$axios.put('branch/'+this.id_branch, this.form_data[0]).then(function(response){
          console.log(response);
        })
          // .cache((error)=>{
          // window.alert("error");
        // })
        console.log(this.form_data[0])
        // this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    },
      set_state_city(item){
        // console.log('test',item)
        this.form_data.county=item[0]
        this.form_data.city=item[1]
      },
      set_form_data(){
        this.form_data=this.temp_data
      }

    },
    created() {
      let self=this;
      let d=[];
      this.$axios.get('/branch/search?id='+this.id_branch).then(function(response){
      // console.log(response.data.data[0]);
      response.data.data.forEach(item => d.push({name:item.name,phones:item.phones,county:item.county,city:item.city,address: item.address,postal_code:item.postal_code,fax:item.fax}));
      })
      this.temp_data=d
      this.set_form_data();
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

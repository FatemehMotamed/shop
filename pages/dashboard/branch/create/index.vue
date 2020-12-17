<template>
<div class="main">

  <form @submit.prevent="registerBranch">
    <custom-textbox txt="نام شعبه" v-model="form_data.name"></custom-textbox>
    <custom-textbox txt="شماره تلفن" v-model="form_data.phone"></custom-textbox>
    <custom-select></custom-select>
    <custom-textbox txt="آدرس" textarea=true v-model="form_data.address"></custom-textbox>
    <custom-textbox txt="کد پستی" v-model="form_data.postal_code"></custom-textbox>
    <custom-textbox txt="شناسه" v-model="form_data.id_branch"></custom-textbox>
    <custom-textbox txt="شماره فکس" v-model="form_data.fax"></custom-textbox>
    <custom-button txt="افزودن" bgcolor="green" fontcolor="blue" fontsize="1.3" icon="mdi-plus" iconcolor="red" width="20vw" height="5vw"></custom-button>

  </form>


</div>
</template>

<script>
  import CustomButton from '@/components/core/dashboard/CustomButton'
  import CustomTextbox from '@/components/core/dashboard/CustomTextbox'
  import CustomSelect from '@/components/core/dashboard/CustomSelect'
  import EventBuss from '@/assets/js/eventBus'
    export default {
      name: "index",
      layout: "dashboard_layout",
      components:{
        CustomButton:CustomButton,
        CustomTextbox:CustomTextbox,
        CustomSelect:CustomSelect
      },
      data(){
        return{
          form_data:{
            name:'',
            city:'',
            state:'',
            address:'',
            phone:'',
            postal_code:'',
            id_branch:'',
            fax:'',
          }
        }
      },

      methods:{
        async registerBranch(){
          console.log(this.form_data)
          // console.log("dsda")
        },
        set_state_city(item){
          // console.log('test',item)
          this.form_data.state=item[0]
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
  float: right;
  width: 20vw;
}
</style>

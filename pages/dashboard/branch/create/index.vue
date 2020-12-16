<template>
<div class="main">

  <form>
    <custom-textbox txt="نام شعبه"></custom-textbox>
    <custom-textbox txt="شماره تلفن"></custom-textbox>
    <custom-select></custom-select>
    <custom-textbox txt="آدرس" textarea=true></custom-textbox>
    <custom-textbox txt="کد پستی"></custom-textbox>
    <custom-textbox txt="شناسه"></custom-textbox>
    <custom-textbox txt="شماره فکس"></custom-textbox>
    <custom-button txt="افزودن" bgcolor="green" fontcolor="blue" fontsize="1.3" icon="mdi-plus" iconcolor="red" width="20vw" height="5vw"></custom-button>

  </form>


</div>
</template>

<script>
  import CustomButton from '@/components/core/dashboard/CustomButton'
  import CustomTextbox from '@/components/core/dashboard/CustomTextbox'
  import CustomSelect from '@/components/core/dashboard/CustomSelect'
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
            address:'',
            phone:'',
            postal_code:'',
            id_branch:'',
            fax:'',
          }
        }
      }
    }
</script>

<style scoped>
.main{
  width: 20vw;
}
</style>

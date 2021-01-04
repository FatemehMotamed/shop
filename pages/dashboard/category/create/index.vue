<template>
  <create-form style="box-shadow: 5px 5px 5px #424242;"></create-form>
</template>

<script>

import CreateForm from '@/components/app/Dashboard/Category/CreateForm'
export default {
  name: "index",

  layout: "dashboard_layout",
  components:{
    CreateForm:CreateForm,
  },

}
</script>

<style scoped>

</style>

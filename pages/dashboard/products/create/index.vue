<template>

  <create-form></create-form>
</template>

<script>

import CreateForm from '@/components/app/Dashboard/Products/CreateForm'
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

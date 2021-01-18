<template>

<div>
  <create-form class="mt-10"></create-form>
  <create-form ></create-form>
</div>
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

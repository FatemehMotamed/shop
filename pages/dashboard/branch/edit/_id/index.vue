<template>
<!--  <div>{{$route.params.id}}</div>-->
  <edit-form class="mt-10" style="box-shadow: 5px 5px 5px #BDBDBD;"
  :id_branch="$route.params.id"></edit-form>
</template>

<script>

    import EditForm from '@/components/app/Dashboard/Branch/EditForm'
    export default {
      name: "index",

      layout: "dashboard_layout",
      components:{
        EditForm:EditForm,
      },

    }
</script>

<style scoped>

</style>

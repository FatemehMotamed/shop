<template>
  <div v-if="textarea">
      <v-textarea
      label=""
      :placeholder="txt"
      rows="3"
      row-height="25"
      dir="rtl"
      :value="data_txt"
      v-on:input="$emit('input', $event)">

      </v-textarea>
  </div>
  <div v-else>
      <v-text-field :value="data_txt"  dir="rtl"  label="" :placeholder="txt" v-on:input="$emit('input', $event)"></v-text-field>
  </div>


</template>

<script>
    export default {
        name: "CustomTextbox",
        props:['txt','textarea','data_txt']
    }
</script>

<style scoped>
  *{
    font-family: 'Markazi Text', serif !important;
  }

  .v-text-field ::before {
    border-color: black !important;
    color: #7F828B !important;
  }

  .v-text-field ::after {
    border-color: #3f6ad8 !important;
    color: black !important;
  }



</style>

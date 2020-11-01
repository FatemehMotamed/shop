<template>
  <div>
    <v-app>

      <tab-group></tab-group>
    </v-app>

  </div>
</template>

<script>
  import TabGroup from "@/components/app/Tab/TabGroup";
    export default {
        name: "test",
        components: {
         TabGroup:TabGroup,

    }

    }
</script>

<style scoped>


</style>

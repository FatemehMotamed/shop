<template>
  <div>
    <v-app>

      <tab-group></tab-group>
    </v-app>

  </div>
</template>

<script>
  import TabGroup from "@/components/TabGroup";
    export default {
        name: "test",
        components: {
         TabGroup:TabGroup,

    }

    }
</script>

<style scoped>


</style>

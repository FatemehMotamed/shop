<template>
  <div>
    <v-container fluid>
      <v-row>
        <slide2></slide2>
      </v-row>

      <v-row>
        <card-topic></card-topic>
      </v-row>

      <v-row>
        <slide-group></slide-group>
      </v-row>
    </v-container>

  </div>

</template>

<script>
  import Slide2 from "@/components/Slide2";
  import CardTopic from "@/components/CardTopic";
  import SlideGroup from "@/components/SlideGroup";
    export default {
        name: "index",
        components: {
            Slide2:Slide2,
            CardTopic:CardTopic,
            SlideGroup:SlideGroup,
        }
    }
</script>

<style scoped>

</style>

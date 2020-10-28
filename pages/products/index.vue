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
        <v-col cols="12" md="12" sm="12">
          <h1 dir="rtl">محبوب ترین ها</h1>
        </v-col>
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
h1{
  font-family: 'Markazi Text', serif !important;
  text-decoration-style: solid;
  text-decoration-line: underline;
  text-decoration-color: #7F828B;
}
</style>

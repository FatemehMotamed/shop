<template>
  <div>
    <v-container>
      <v-row>

        <v-col cols="12" md="12" sm="10">
          <v-card class="overflow-hidden">
          <v-tabs align-with-title dir="rtl">
            <v-row>
              <v-tab>
              <v-col cols="12" md="12">
                <font-awesome-icon :icon="['fas', 'tshirt']" slot="prepend" />
                <label>لباس</label>
              </v-col>
                </v-tab>
              <v-tab>
              <v-col cols="12" md="12">
                <font-awesome-icon :icon="['fas', 'briefcase']" slot="prepend" />
                <label>لباس</label>
              </v-col>
                </v-tab>
              <v-tab>
              <v-col cols="12" md="12">
                <font-awesome-icon :icon="['fas', 'shoe-prints']" slot="prepend" />
                <label>اکسسوری</label>
              </v-col>
                </v-tab>
              <v-tab>
              <v-col cols="12" md="12">
                <font-awesome-icon :icon="['fas', 'glasses-alt']" slot="prepend" />
                <label>اکسسوری</label>
              </v-col>
                </v-tab>
            </v-row>

        </v-tabs>
          </v-card>

        </v-col>

      </v-row>
      <v-row>
        <v-sheet
      id="scrolling-techniques-5"
      class="overflow-y-auto"
      max-height="600"
    >

    </v-sheet>
      </v-row>
    </v-container>
<!--  <v-card class="overflow-hidden">-->

<!--         -->

<!--      </v-card>-->

</div>
</template>

<script>
    export default {
        name: "SubNav"
    }
</script>

<style scoped>
.font-awesome-icon{
  color: dimgrey;
}
</style>

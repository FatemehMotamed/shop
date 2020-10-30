<template>
    <v-row>
        <v-col cols="12" md="12 sm=12">

          <v-card >
            <v-tabs
                  centered
                  v-model="tab"
                >
            <v-tabs-slider></v-tabs-slider>

             <v-tab :href="'#tab-'+index" v-for="(alphabet,index) in alphabets" :key="index">
                  {{ alphabet }}
            </v-tab>

    </v-tabs>

            <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="i in 3"
        :key="i"
        :value="'tab-' + i"
      >
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
          </v-card>

        </v-col>
      </v-row>
</template>

<script>
    export default {
        name: "TabGroup",

        data(){
            return{
                alphabets:[
                    'تب4 ', 'تب 3', 'تب 2', 'تب 1'
                ],
                 tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            }
        }
    }
</script>

<style scoped>

</style>

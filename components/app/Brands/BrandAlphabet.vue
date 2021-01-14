<template>
    <v-row class="brand_box">
        <v-col cols="12" md="12" sm="12">
          <label class="iran">{{ title }}</label>
          <ul class="ml-2">
            <li v-for="(alphabet,index) in alphabets"><a :href="'#'+String(parseInt(index)+parseInt(offset)-1)">{{ alphabet }}</a></li>
          </ul>
        </v-col>
      </v-row>
</template>

<script>
    export default {
        name: "BrandAlphabet",
        props:{
            title:{
                type: String,
                required: true,
            },
            alphabets:{
                type:Array,
                required:true,
            },
            offset:{
                type:String,
                required:true,
            }

        }
    }
</script>

<style scoped>
  .iran{
  font-family: 'Markazi Text', serif !important;
    font-weight: bold;
    font-size: 1.5vw;
    color: #47494e;
    float: right; margin-right: 2vw
  }
  .iran li{
    margin-right: 3vw;
  }


  .brand_boxul{
    list-style-type: none;
    font-family: 'Markazi Text', serif !important;
  }
  .brand_box li{
    display: inline;
    margin-right: 1.5vw;
  }
  .brand_box a{
    font-size: 1.2vw;

    text-decoration: none;
    color: #47494e!important;
    font-weight: bold;
  }

</style>

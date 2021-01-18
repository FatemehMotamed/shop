<template>
    <div>
      <v-row class="brand_box" v-for="(alphabet,index) in alphabets"  :id="String(parseInt(index)+parseInt(offset))" dir="rtl" >
        <v-col class="mark" cols="12" md="1" sm="1">
           <v-avatar
             color="teal"
             size="48"
           >
              <span class="white--text headline">{{ alphabet }}</span>
          </v-avatar>

        </v-col>
        <v-col  md="2" sm="2">
          <p v-for="i in 10"><a> نام برند</a></p>
        </v-col>
        <v-col md="2" sm="2">
          <p v-for="i in 10"><a>نام برند</a></p>
        </v-col>
        <v-col md="2" sm="2">
          <p v-for="i in 10"><a>نام برند</a></p>
        </v-col>
        <v-col md="2" sm="2">
          <p v-for="i in 10"><a>نام برند</a></p>
        </v-col>
        <v-col md="2" sm="2">
          <p v-for="i in 10"><a>نام برند</a></p>
        </v-col>
        <v-col md="1" sm="1">

        </v-col>

      </v-row>
    </div>
</template>

<script>
    export default {
        name: "BrandInfo",
        props:{
            alphabets:{
                type:Array,
                required:true,
            },
             offset:{
                type:String,
                required:true,
            },
        }
    }
</script>

<style scoped>
    .brand_box{
    font-family: 'Markazi Text', serif !important;
  }
  .mark{
    font-size: 2vw;
    margin-right: 5vw;
    color: #19424e;
  }

</style>

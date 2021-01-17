<template>
<div>
  <v-container >
    <v-row >
      <v-card class="ml-5 mx-auto" width="22vw" height="18vw">
        <img  src="@/assets/images/accounting.png" style="max-width: 18vw; margin-left:2vw;margin-right: 2vw " />
        <label class="card_title">حسابداری</label>
      </v-card>
      <v-card class="ml-5" width="22vw" height="18vw">
        <img  src="@/assets/images/packet.png" style="max-width: 18vw; margin-left:2vw;margin-right: 2vw " />
        <label class="card_title">پنل پیامکی</label>
      </v-card>
      <v-card class="ml-5" width="22vw" height="18vw">
        <img  src="@/assets/images/report.png" style="max-width: 16vw; margin-left:4vw;margin-right: 4vw;margin-top: 2vw " />
        <label class="card_title">گزارش گیری</label>
      </v-card>
    </v-row>
    <v-row class="mt-10">
      <v-card class="ml-5 mx-auto" width="22vw" height="18vw">
        <img  src="@/assets/images/shop.png" style="max-width: 10vw; margin-left:6vw;margin-right: 6vw " />
        <label class="card_title">محصولات</label>
      </v-card>
      <v-card class="ml-5" width="22vw" height="18vw">
        <img  src="@/assets/images/factor.png" style="max-width: 18vw; margin-left:2vw;margin-right: 2vw " />
        <label class="card_title">فاکتور</label>
      </v-card>
      <v-card class="ml-5" width="22vw" height="18vw">
        <img  src="@/assets/images/branch.png" style="max-width: 18vw; margin-left:2vw;margin-right: 2vw " />
        <label class="card_title">شعب</label>
      </v-card>
    </v-row>
  </v-container>
</div>
</template>

<script>
    export default {
        name: "HomePage",
    }
</script>

<style scoped>
  *{
    font-family: 'Markazi Text', serif !important;
  }
  .card_title{
    margin-right: 8vw;
    font-size: 1.5vw;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.6);
  }

</style>

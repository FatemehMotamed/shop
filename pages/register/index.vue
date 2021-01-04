<template>
  <div>
    <v-container class="main_box">
      <v-row >
          <v-col cols="12" md="4" sm="4" offset-md="5" offset-sm="5">
            <p class="ml-12 mt-n6">ثبت نام</p>
          </v-col>
        </v-row>
      <v-row >
        <v-col cols="12" md="5" offset-sm="4" offset-md="4" >
          <v-card class="card ml-n6">
            <form method="post" @submit.prevent="register">
              <v-row class="pt-12">
                <v-text-field dir="rtl"  label="" placeholder="موبایل" name="name" v-model="mobile" ></v-text-field>
              </v-row>
              <v-row >
                <v-text-field dir="rtl"  label="" placeholder="کلمه عبور" name="password" v-model="password" ></v-text-field>
                <v-btn type="submit" class="btn ml-8 mt-10">ثبت نام</v-btn>
<!--                    <button type="submit" class="button is-dark is-fullwidth">Log In</button>-->
              </v-row>
            </form>

            <v-row class="pt-5">
          <v-col class="txt" cols="12" offset-md="2" md="8" sm="12">
            <p>با ورود و یا ثبت نام در دیجی‌استایل، شما شرایط و قوانین استفاده از تمام سرویس های سایت دیجی‌کالا و قوانین حریم خصوصی آن را می‌پذیرید </p>
        </v-col>
      </v-row>

        </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3" sm="3" offset-md="5" offset-sm="5">
          <p class="footnote"> Login Powered by </p>
          <img class="ml-4" src="https://www.digistyle.com/static/files/d4af64f8.svg">
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<script>


export default {
    layout: 'simple',
    middleware: 'guest',
  data() {
    return {
      mobile: '',
      password: '',
      error: null
    }
  },

  methods: {
    async register() {
      try {
        await this.$axios.post('register', {
          mobile: this.mobile,
          password: this.password,
          role_id: 1,
        })

        // await this.$auth.loginWith('local', {
        //   data: {
        //   email: this.email,
        //   password: this.password
        //   },
        // })

        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>
<style>
  .main_box{
    font-family: 'Markazi Text', serif !important;
  }
  p{
    font-size: 2.5vw;
  }
  .v-text-field ::before {
    border-color: black !important;
    color: #7F828B !important;
  }

  .v-text-field ::after {
    border-color: cadetblue !important;
    color: black !important;
  }
  .card{
    width: 32vw;
    padding-right: 5vw;
    padding-left: 5vw;
  }
  .btn{
    background-color: #d0d3d4 !important;
    width: 20vw;
  }

  .txt p{
    text-align: center !important;
    font-size: 1.3vw;
  }
.footnote{
  font-size: 0.9em;
  color: #7f828b;
  margin-left: 2.1vw;
}
</style>

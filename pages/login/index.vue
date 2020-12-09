<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Welcome back!</h2>



          <form method="post" @submit.prevent="login">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input
                  type="text"
                  class="input"
                  name="name"
                  v-model="name"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  type="email"
                  class="input"
                  name="email"
                  v-model="email"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  type="password"
                  class="input"
                  name="password"
                  v-model="password"
                />
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">Log In</button>
            </div>
          </form>
          <div class="has-text-centered" style="margin-top: 20px">
            <p>
              Don't have an account? <nuxt-link to="/register">Register</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>


export default {
    middleware: 'guest',
  components: {

  },

  data() {
    return {
         name: '',
      email: '',
      password: '',
      error: null
    }
  },

  methods: {

    async login() {

      try {
        await this.$auth.loginWith('local', {
          data: {
              name: this.name,
              email: this.email,
              password: this.password
          }
        })
          this.$auth.setUserToken(token, refreshToken)
              .then(() => this.$toast.success('User set!'))

        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }

    }
  }
}
</script>

<!-- this.$axios.post('/login', {-->
<!--            name:this.name,-->
<!--          email: this.email,-->
<!--          password: this.password-->
<!--        }).then((resp) => {-->
<!--          this.$auth.setToken('local', 'Bearer ' + resp.data.access_token)-->
<!--          this.$auth.setRefreshToken('local', resp.data.refresh_token)-->
<!--          this.$axios.setHeader('Authorization', 'Bearer ' + resp.data.access_token)-->
<!--          this.$auth.ctx.app.$axios.setHeader('Authorization', 'Bearer ' + resp.data.access_token)-->
<!--          this.$axios.get('/users/me').then((resp) => { this.$auth.setUser(resp.data); this.$router.push('/') })-->
<!--        })-->

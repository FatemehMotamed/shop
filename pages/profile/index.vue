<template>

    <div class="v-container">
      <h2>My Profile</h2>
      <div>
        <p>
          <strong>Username:</strong>
          {{ loggedInUser.username }}
        </p>
        <p>
          <strong>Email:</strong>
          {{ loggedInUser.email }}
        </p>
      </div>
    </div>

</template>

<script>
  import { mapGetters } from 'vuex'

    export default {
        name: "index",
        middleware: 'auth',
        computed: {
            ...mapGetters(['loggedInUser'])
            }
    }
</script>

<style scoped>

</style>

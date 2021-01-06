<template>

    <div class="v-container">
      <h2>My Profile</h2>
      <div>
        <p>
          <strong>Username:</strong>
          {{ loggedInUser }}
        </p>

      </div>
    </div>

</template>

<script>

  import { mapGetters } from 'vuex'

    export default {
      middleware: 'authUser',
        name: "index",

        computed: {
            ...mapGetters(['loggedInUser'])
            }
    }
</script>

<style scoped>

</style>

<template>
    <div>
    <v-app-bar
        
        color="red accent-3"
        prominent
        fixed
        bottom
        height="50vw"
      >
        <label>
          افزودن به سبد خرید
          <font-awesome-icon :icon="'shopping-bag'" slot="prepend" style="color:#FFEBEE;" />
        </label>
        <v-spacer></v-spacer>

      </v-app-bar>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

<style scoped>

</style>
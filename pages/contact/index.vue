<template>

<div>
    <contact-page></contact-page>
    <contact-page-xs class="d-flex d-sm-none"></contact-page-xs>
</div>
    
</template>


<script>

import ContactPage from '@/components/app/Contact/ContactPage.vue'
import ContactPageXs from '@/components/app/Mobile/Contact/ContactPageXs.vue'


export default {
    components:{
        ContactPage,
        ContactPageXs
    }
    
}
</script>

<style scoped>

</style>
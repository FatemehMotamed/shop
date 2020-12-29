<template>

<div>
    <about-page></about-page>
    <about-page-xs class="d-flex d-sm-none"></about-page-xs>

</div>
    
</template>

<script>
import AboutPage from '@/components/app/About/AboutPage.vue'
import AboutPageXs from '@/components/app/Mobile/About/AboutPageXs.vue'

export default {

    components:{
        AboutPage,
        AboutPageXs,
    }


    
}
</script>

<style scoped>

</style>
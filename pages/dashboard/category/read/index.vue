<template>

<read-category></read-category>
    
</template>


<script>
import ReadCategory from '@/components/app/Dashboard/Table.vue';
export default {
    name: 'read',
    layout:  'dashboard_layout',
    components: {
        ReadCategory: ReadCategory,
    }
    
}
</script>

<style scoped>

</style>
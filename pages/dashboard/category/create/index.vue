<template>

    <create-category></create-category>

</template>


<script>

import CreateCategory from '@/components/app/Dashboard/Form.vue';
export default {
    name: 'create',
    layout: 'dashboard_layout',
    components: {
        CreateCategory: CreateCategory,
    }
}
</script>


<style scoped>

</style>
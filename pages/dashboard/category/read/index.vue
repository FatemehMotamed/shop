<template>
<div>

    <read-category :list="table_data"></read-category>


</div>

    
</template>


<script>



import ReadCategory from '@/components/app/Dashboard/Table.vue';


export default {

    data(){
        return{
            table_data: {}
        }
    },

    created(){
        this.fetchSomething();
    },
    methods: {
    async fetchSomething() {
        let self = this;
        // const ip = await this.$axios.$get('/categories')
        // this.ip = ip
        
        this.$axios.$get('/categories').then(function(response) {
            self.table_data = response.data[0];
            console.log(self.table_data);
        });

        // this.$axios.$get('/categories').then((data) => {

        //         self.table_data = data;
        //         window.alert(data);
        //         console.log(data);
        //     }).catch(e => {
        //         this.$message.error('عملیات با شکست مواجه شد، با پشتیبانی تماس بگیرید')
        //         console.log(e.response);
        //         this.$store.dispatch('stopLoading');
        //     }).finally(() => {
        //         this.loading = false;
        //     })

    }


    },
    name: 'read',
    layout:  'dashboard_layout',
    components: {
        ReadCategory: ReadCategory,
    },



}
</script>

<style scoped>

</style>
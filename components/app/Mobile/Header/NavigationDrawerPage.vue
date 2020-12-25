<template>
    <div>

        <v-btn @click="changeWidth()">Click</v-btn>

        <div :style="{ width: computedWidth}">sss</div>
    </div>
</template>

<script>
    export default {
        name: "NavigationDrawerPage",
        props:['menu'],
        data(){
            return{
                width:'200px',
            }
        },
          computed: {
                computedWidth: function () {
                return this.width;
                }
            },
        methods:{
                changeWidth: function (event) {
                this.width='100px';

                },
            changeMenu(item){
                this.$emit("update-menu",item)
            }
        }
    }
</script>

<style scoped>

</style>

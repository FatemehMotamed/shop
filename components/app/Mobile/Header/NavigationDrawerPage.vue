<template>
    <div>
        <div class="row justify-space-around">

            <div><v-icon class="ma-2">mdi-close</v-icon></div>
            <div>
                <v-btn
                    class="ma-2"
                    outlined
                    color="dark">
                    ورود و ثبت نام
                </v-btn>
            </div>

        </div>
        <main-menu class="mt-2" v-if="number == -1"></main-menu>
        <men-menu class="mt-2" v-if="number == 0"></men-menu>
        <women-menu class="mt-2" v-if="number == 1"></women-menu>
        <kids-menu class="mt-2" v-if="number == 2"></kids-menu>
        <beauty-menu class="mt-2" v-if="number == 3"></beauty-menu>


    </div>
</template>

<script>

import EventBus from '@/assets/js/eventBus.js'

import MainMenu from '@/components/app/Mobile/Header/MainMenu.vue'
import MenMenu from '@/components/app/Mobile/Header/MenMenu.vue'
import WomenMenu from '@/components/app/Mobile/Header/WomenMenu.vue'
import BeautyMenu from '@/components/app/Mobile/Header/BeautyMenu.vue'
import KidsMenu from '@/components/app/Mobile/Header/KidsMenu.vue'




    export default {
        name: "NavigationDrawerPage",
        props:['menu'],
        components:{
            MainMenu,
            MenMenu,
            KidsMenu,
            BeautyMenu,
        },

        data(){
            return{
                number: -1,
                width:'200px',
            }
        },
        computed: {
            computedWidth: function () {
            return this.width;
            }
            },
        mounted(){
            EventBus.$on('number', (i) => {
                this.number = i;

            })
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

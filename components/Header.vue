<template>
    <div class="header flex justify-between items-center mb-5 p-3 shadow-md bg-gray-300 dark:bg-gray-800">
        <div class="leftNav">
            <h1 class="text-3xl text-gray-700 dark:text-gray-200">FUN WITH FLAGS</h1>
        </div>
        <div class="rightNav">
            <Toggle checkedText="Dark Mode" uncheckedText="My Eyes!" v-model="darkmodeSelected" :hasChanged="saveDarkmodeSettings"/>
        </div>
    </div>
</template>


<script>
import Vue from 'vue'


export default Vue.extend({
    name: 'Header',
    data(){
        return {
            darkmodeSelected:false
        }
    },
    created(){
        this.isDarkmode()
    },
    computed:{
        countries(){
            return this.$store.state.countries
        }
    },
    methods:{
        isDarkmode(){
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                this.darkmodeSelected = true
            } else {
                this.darkmodeSelected = false
            }
        },
        saveDarkmodeSettings(){
            if(this.darkmodeSelected){
                localStorage.theme = 'dark'
                document.documentElement.classList.add('dark')
            } else {
                localStorage.theme = 'light'
                document.documentElement.classList.remove('dark')
            }
        }
    }
})
</script>
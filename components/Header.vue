<template>
    <div class="header flex justify-between items-center mb-5 p-3 shadow-md bg-gray-300 dark:bg-gray-800">
        <div class="leftNav">
            <h1 class="text-3xl text-gray-700 dark:text-gray-200">FUN WITH FLAGS</h1>
        </div>
        <div class="rightNav flex">

            <!-- Filter Select -->
            <select v-model="selectedRegion" id="countries" class="px-3 mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-800 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="all">All Regions</option>
                <option :value="regionKey" v-for="(region, regionKey) in regions" :key="regionKey">{{region}}</option>
            </select>

            <!-- Search -->
            <div class="flex items-center justify-center bg-gray-800 mr-3">
                <form method="GET">
                    <div class="relative text-gray-600 focus-within:text-gray-400">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                    </span>
                    <input type="search" name="q" class="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search Country..." autocomplete="off">
                    </div>
                </form>
            </div>
            <!-- Dark Mode -->
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
        },
        regions(){
           return this.$store.getters.getRegions 
        },
        selectedRegion:{
            get(){
               return this.$store.state.selectedRegion
            },
            set(value){
                this.$store.commit("setSelectedRegion", value)
            }
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
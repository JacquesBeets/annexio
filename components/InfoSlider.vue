<template>
    <div class="slider text-gray-900 dark:text-gray-200 p-2">
        <div class="close absolute text-gray-200 top-1 -left-7" @click="close">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <div class="flagContainer">
            <img :src="country.flags.svg" alt="">
        </div>
        <div class="details text-lg font-extralight">
            <h1 class="text-3xl my-2 font-bold">{{country.name.common}}</h1>
            <h2  class="mb-2" v-if="country.capital">Capital: <strong class="font-bold">{{country.capital[0]}}</strong></h2>
            <h3 class="mb-2">ISO Code: <strong class="font-bold">{{country.cca3}}</strong></h3>
            <h3 class="mb-2">Population: <strong class="font-bold">{{country.population}}</strong></h3>
            <h3 class="">Currencies:</h3>
            <div class="currency ml-4" v-for="(currency, currencyKey) in country.currencies" :key="currencyKey">
                <strong class="font-bold">{{currency.symbol}} &bullet; {{currency.name}}</strong> 
            </div>
            <h3 class="mt-2">Languages:</h3>
            <div class="currency ml-4" v-for="(lang, langKey) in country.languages" :key="langKey"><strong class="font-bold">{{lang}}</strong></div>
        </div>
    </div>
</template>

<script >
import Vue from 'vue'

export default Vue.extend({
    name: 'InfoSlider',
    props:["close", "country"],
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    }
})
</script>
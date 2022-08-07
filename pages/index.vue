<template>
  <div class="bg-gray-50 dark:bg-gray-900 text-white mainContainer font-sans">
    <Header/>
    <div class="container mx-auto flex flex-wrap justify-center">
        <Flag class="bg-gray-50 dark:bg-gray-900 shadow" v-for="(country, index) in countries" :key="country.altSpellings[0]+index" :country="country"/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Header from '../components/Header.vue'

export default Vue.extend({
    name: "HomePage",
    components: { Header },
    data() {
        return {
            darkmodeSelected: false
        };
    },
    async fetch() {
        try {
            // await this.$store.dispatch("fetchCountries") 
        }
        catch (error) {
            console.error(error);
        }
    },
    computed: {
        countries() {
            return this.$store.state.countries;
        }
    },
    methods: {

    },
})
</script>

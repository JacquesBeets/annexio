<template>
  <div class="bg-black text-white mainContainer font-sans">
    <div class="container mx-auto flex flex-wrap justify-center">
        <Flag v-for="(country, index) in countries" :key="country.altSpellings[0]+index" :country="country"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomePage',
  data(){
    return {}
  },
  async fetch(){  
    try {
      // await this.$store.dispatch("fetchCountries")  
    } catch (error) {
        console.error(error)
    }
  },
  computed:{
    countries(){
      return this.$store.state.countries
    }
  },
  methods:{}
})
</script>

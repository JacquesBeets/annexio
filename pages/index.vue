<template>
  <div class="bg-gray-50 dark:bg-gray-900 text-white mainContainer font-sans">
    <Header/>
    <div class="container mx-auto flex flex-wrap justify-center" >
        <Flag :flagSelected="setSelectedCountry" class="bg-gray-100 dark:bg-gray-800 shadow"  v-for="(country, index) in countries" :key="country.altSpellings[0]+index" :country="country" showText="false" />
    </div>
    <div class="infoCover bg-gray-900 fixed top-0 left-0 w-full h-full ease duration-500 z-20" v-if="infoSliderOpen"></div>


    <InfoSlider v-if="infoSliderOpen" class="fixed right-0 top-0 w-1/4 h-full bg-gray-50 dark:bg-gray-700 z-20 shadow-2xl  infoSlider" :class="{'open': infoSliderOpen}" :close="toggleInfoSlider" :country="selectedCountry"/>
  </div>
</template>

<script>
import Vue from 'vue'
import Header from '../components/Header.vue'
import InfoSlider from '~/components/InfoSlider.vue';

export default Vue.extend({
    name: "HomePage",
    components: { Header, InfoSlider },
    data() {
        return {
            selectedCountry: false,
            infoSliderOpen: false
        };
    },
    async fetch() {
        try {
            await this.$store.dispatch("fetchCountries") 
        }
        catch (error) {
            console.error(error);
        }
    },
    computed: {
        countries() {
            return this.$store.getters.getCounties;
        }
    },
    methods: {
      setSelectedCountry(country){
        this.selectedCountry = country
        this.toggleInfoSlider()
      },
      toggleInfoSlider(){
        this.infoSliderOpen = !this.infoSliderOpen
        this.addRemoveScrollClass()
      },
      addRemoveScrollClass(){
        if(this.infoSliderOpen){
          document.body.classList.add("noScroll")
        } else {
          document.body.classList.remove("noScroll")
        }
      }
    },
})
</script>

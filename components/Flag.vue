<template>
    <div class="flag mr-3 mb-5" :style="backgroundFlag" @click="flagSelected(country)">
       <h1>
            {{country.name.official}}
            <div class="capitals" v-if="country.capital">{{country.capital[0]}}</div> 
       </h1>
    </div>
</template>

<script >
import Vue from 'vue'

export default Vue.extend({
    name: 'Flag',
    props:["country", "flagSelected"],
    computed:{
        backgroundFlag(){
            return `background-image:url(${this.country.flags.svg})`
        }
    }
})
</script>
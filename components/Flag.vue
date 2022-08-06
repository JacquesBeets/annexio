<template>
    <div class="flag mr-3 mb-5" :style="'background-image:url('+country.flags.svg+')'">
       <h1>
            {{country.name.official}}
            <div class="capitals" v-if="country.capital">{{country.capital[0]}}</div> 
       </h1>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'Flag',
    props:["country"],
    computed:{

    }
})
</script>
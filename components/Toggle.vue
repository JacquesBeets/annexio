<template>
    <div class="flex items-center justify-center w-full ">
        <label for="toggle" class="flex items-center cursor-pointer">
            <!-- Toggle -->
            <div class="relative">
                <input type="checkbox" id="toggle" class="sr-only" v-model="checkSelected" @change="handleCheckChange">
                <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
                <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>
            <!-- label -->
            <div class="ml-3 text-gray-700 dark:text-gray-200 font-medium">
                {{text}}
            </div>
        </label>
    </div>
</template>

<script >
import Vue from 'vue'

export default Vue.extend({
    name: 'Toggle',
    props:["checkedText", "uncheckedText", "value", "hasChanged"],
    data(){
        return {
            checkSelected: this.value
        }
    },
    computed:{
        text(){
            if(this.checkSelected){
                return this.checkedText ? this.checkedText : ""
            } else {
                return this.uncheckedText ? this.uncheckedText : ""
            }
        }
    },
    methods:{
        handleCheckChange(){
            this.$emit('input', this.checkSelected)
            if(this.hasChanged) this.hasChanged()
        }
    }
})
</script>
export const state = () => ({
    flags: false
  })
  
  export const getters = {
    getCounter(state:any) {
      return state.counter
    }
  }
  
  export const mutations = {
    increment(state:any) {
      state.counter++
    }
  }
  
  export const actions = {
    async fetchCountries(state:any) {
      const res = { data: 10 };
      state.counter = res.data;
      return res.data;
    }
  }
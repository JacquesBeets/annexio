export const state = () => ({
    selectedRegion: "all",
    countrySearch:"",
    countries:[]
  })
  
  export const getters = {
    getCounties(state) {
      if(state.selectedRegion === "all"){ 
        return state.countries.filter(country => {
          let countryName = country.name.common.toLowerCase()
          return countryName.indexOf(state.countrySearch.toLowerCase()) > -1
        })
      }
      if(state.selectedRegion !== "all") {
        return state.countries
          .filter(country => country.region == state.selectedRegion)
          .filter(country => {
            let countryName = country.name.common.toLowerCase()
            return countryName.indexOf(state.countrySearch.toLowerCase()) > -1
          })
      }
    },
    getRegions(state){
      if(!state.countries) return []

      let regionObj = {}
      state.countries.forEach(country => {
        regionObj[country.region] = country.region
      })
      return regionObj
    }
  }
  
  export const mutations = {
    setCountries(state, payload) {
      state.countries = payload
    },
    setSelectedRegion(state, payload){
      state.selectedRegion = payload
    },
    setCountrySearch(state, payload){
      state.countrySearch = payload
    }
  }
  
  export const actions = {
    async fetchCountries({commit}, state) {
      return await fetch("https://restcountries.com/v3.1/all")
            .then((res)=> res.text())
            .then(data => {
              commit("setCountries", JSON.parse(data))
              return data
            })
    }
  }
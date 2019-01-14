import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        cityId:'0'
    },
    mutations:{
        changeCityId(state,value){
            state.cityId =value
        }
    }
})
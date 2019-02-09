import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        cityId:'0',
        userName:localStorage.getItem('userName'),
        price:0
    },
    mutations:{
        changeCityId(state,value){
            state.cityId =value
        },
        changeUserName(state,value){
            state.userName =value
        },
        changePrice(state,value){
            state.price = value
        }
    }
})
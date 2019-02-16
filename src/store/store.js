import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        cityId:'0',
        userName:localStorage.getItem('userName'),
        price:0,
        userId:localStorage.getItem('studentId'),
        orderMsg:{},
        payPsd:localStorage.getItem('payPsd'),
        show:false,
        balance:0
    },
    mutations:{
        changeCityId(state,value){
            state.cityId =value
        },
        changeUserName(state,value){ 
            state.userName =value
        },
        changeStudentId(state,value){ 
            state.userId =value
        },
        changePrice(state,value){
            state.price = value
        },
        changeOrderMsg(state,value){
            state.orderMsg = value
        },
        changeStudentPayPsd(state,value){
            state.payPsd = value
        },
        changeshow(state,value){
            state.show = value
        },
        changebalance(state,value){
            state.balance = value
        }
    }
})
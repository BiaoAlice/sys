<template>
    <div class="home">
        <swiper></swiper>
        <h3 class="title">旅游景点</h3>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane 
                v-for="item in cityList"
                :key="item.name"
                :label="item.label" 
                :name="item.name"
            > 
                <scenic v-if=" item.name == cityId"></scenic> 
            </el-tab-pane>
        </el-tabs>
        <img src="../../assets/home/hotel1.jpg" alt="">
        <img src="../../assets/home/hotel.jpg" alt="">
        <h3 class="title hotel">超值酒店</h3>
        <el-tabs tab-position="left">
            <el-tab-pane
                v-for="item in cityList"
                :key="item.name"
                :label="item.label"
                :name="item.name"
            >
                <!-- <hotel v-if=" item.name == cityId"></hotel> -->
                <hotel></hotel>
            </el-tab-pane>
        </el-tabs>
        <friendly-link></friendly-link>
    </div>
</template>

<script>
import Swiper from './components/Swiper'
import Scenic from './components/Scenic'
import Hotel from './components/Hotel'
import FriendlyLink from './components/FriendlyLink'
import {mapState} from 'vuex'
export default {
    name:'Home',
    data () {
        return{
            fullscreenLoading: false,
            cityList:[],
            activeName: '0'
        }
    },
    methods:{
        handleClick(tab) {
            this.$store.commit('changeCityId',tab.name);
        }
    },
    components:{
        swiper:Swiper,
        scenic:Scenic,
        hotel:Hotel,
        friendlyLink:FriendlyLink
    },
    computed:{
        ...mapState(["cityId"])
    },
    created(){
        // console.log(this.cityId);
        // console.log(this.$store.state.cityId)
        // this.http.get('/train/train/tickets/queryByStationToStation?key=275a8c8708ce0&start=乌海&end=北京')
        //          .then(res=>{
        //             console.log(res);
        //          })
        this.http.get('/api/jdlist/getlist')
                .then(res=>{
                    this.cityList = res.data.data;
                })
    }
}
</script>
<style scoped>
    .title{
        padding-left: 10px;
        color:#589ef8;
    }
    .hotel{
        margin-bottom: 10px;
    }
    img{
        width: 100%;
        height: auto;
    }
</style>



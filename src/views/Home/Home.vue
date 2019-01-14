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
    </div>
</template>

<script>
import Swiper from './components/Swiper'
import Scenic from './components/Scenic'
import {mapState} from 'vuex'
export default {
    name:'Home',
    data () {
        return{
            cityList:[
                {
                    "label":'精选',
                    "name":"0"
                },
                
                {
                    "label":'西安',
                    "name":"317"
                },
                {
                    "label":'三亚',
                    "name":"133"
                },
                {
                    "label":'桂林',
                    "name":"102"
                },
                {
                    "label":'杭州',
                    "name":"383"
                },
            ],
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
        scenic:Scenic
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
    //   http://apis.haoservice.com/lifeservice/travel/cityList?key=您申请的APPKEY
    }
}
</script>
<style scoped>
    .title{
        padding-left: 10px;
    }
</style>



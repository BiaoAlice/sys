<template>
    <div class="airplane">
         <el-row :gutter="20">
            <el-col :md="8" :sm="12" :lg="8" :xs="24">
                <choose :title="title"></choose>
            </el-col>
            <el-col :md="16" :lg="16"  :xs="24">
                <img src="@/assets/airplane/air2.jpg" alt="">
            </el-col>
         </el-row>
         <h2>航空公司特惠专区</h2>
         <swiper></swiper>
         <h2>票务公告</h2>
         <notice></notice>
    </div>
</template>

<script>
import choose from '@/components/Choose' 
import Swiper from './components/Swiper'
import Notice from './components/Notice'
export default {
    name:'Airplane',
    data () {
        return{
           title:'机票'
        }
    },
    components:{
        choose,
        swiper:Swiper,
        notice:Notice
    },
    created (){
        // console.log(this.cityList)
        // this.http.get('/api/citylist/getlist')
        //          .then(res=>{
        //              this.cityListArr = res.data.data[0].cities;
        //          })
    }
}
</script>

<style scoped>
    .airplane{
        padding:0 123px;
    }
    @media screen and (max-width:500px) {
       .airplane{
        padding:0px;
        }
   }
   img{
       width:100%;
       height: auto;
   }
   h2{
       color: #589ef8;
       padding-bottom: 5px;
       border-bottom: 1px solid #589ef8;
   }
</style>



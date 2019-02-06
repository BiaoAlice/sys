<template>
    <div class="train">
        <el-row :gutter="20">
            <el-col :md="8" :sm="12" :lg="8" :xs="24">
                <choose :title="title" class="bottom"></choose>
                <el-row :gutter="20" class="icno">
                    <el-col :span="8" class="center">
                        <i class="el-icon-time">&nbsp;时刻查询</i>
                    </el-col>
                     <el-col :span="8" class="center">
                         <i class="el-icon-location">&nbsp;代售点</i>
                    </el-col>
                     <el-col :span="8" class="center">
                         <i class="el-icon-document">&nbsp;常见问题</i>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :md="16" :lg="16"  :xs="24">
                <img src="@/assets/train/train2.jpg" alt="">                
            </el-col>
         </el-row>
         <h2>坐火车去旅行</h2>
         <card class="bottom1"></card>
         <h2>热门路线</h2>
         <swiper></swiper>
    </div>
</template>

<script>
import choose from '@/components/Choose' 
import card from './components/Card'
import swiper from './components/swiper'
export default {
    name:'Train',
    data () {
        return{
            title:"火车票"
        }
    },
    components:{
        choose,
        card,
        swiper
    },
    methods:{
       
    }
}
</script>

<style scoped>
    .train{
        padding:0 123px;
    }
    @media screen and (max-width:500px) {
        .train{
            padding:0px;
        }
        .bottom{
            margin-bottom: 0px;
        }
   }
   img{
       width:100%;
       height: auto;
   }
   .center{
       text-align: center;
   }
   .bottom{
       margin-bottom: 50px;
   }
    @media screen and (max-width:500px) {
        .train{
            padding:0px;
        }
        .bottom{
            margin-bottom: 0px;
        }
        .icno{
            margin-bottom: 5px;
        }
   }
   i{
       font-size: 20px;
       color: #589ef8;
   }
    h2{
        color: #589ef8;
        padding-bottom: 5px;
        border-bottom: 1px solid #589ef8;
        padding-left:5px;
        margin-bottom: 5px;
    }
    .bottom1{
        margin-bottom: 10px;
    }
</style>

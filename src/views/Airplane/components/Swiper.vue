<template>
    <div class="swiper">
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="(item,index) in airList" :key="index">
               <el-row :gutter="20">
                   <el-col
                    :md="12"
                    :ld="12"
                    :xs="24"
                    v-for="(v,i) in item"
                    :key="i"
                   >
                        <h5 class="h5">{{v.title}}</h5>
                        <h5>{{v.msg}}&nbsp;&nbsp;&nbsp;<span>{{v.price}}</span></h5>
                        <h5>{{v.msg1}}&nbsp;&nbsp;&nbsp;<span>{{v.price1}}</span></h5>
                   </el-col>
               </el-row>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name:'Swiper',
    data () {
        return{
            airList:{
        arr:[
            {
                title:'东方航空',
                msg:'鄂尔多斯-西安',
                price:'230',
                msg1:'鄂尔多斯-大连',
                price1:'270'
            },
            {
                title:'海南航空',
                msg:'鄂尔多斯-桂林',
                price:'2045',
                msg1:'宜州-杭州',
                price1:'275'
            }
        ],
        arr11:[
            {
                title:'吉祥航空',
                msg:'贵阳-南京',
                price:'80',
                msg1:'金昌-兰州',
                price1:'174'
            },
            {
                title:'四川航空',
                 msg:'鄂尔多斯-成都',
                price:'540',
                msg1:'鄂尔多斯-沈阳',
                price1:'860'
            }
        ],
        arr22:[
            {
                title:'天津航空',
                msg:'贵阳-南京',
                price:'80',
                msg1:'六盘水-贵阳',
                price1:'215'
            },
            {
                title:'青岛航空',
                 msg:'贵阳-六盘水',
                price:'100',
                msg1:'青岛-宁波',
                price1:'275'
            }
        ],
        arr33:[
            {
                title:'祥鹏航空',
                msg:'大同-太远',
                price:'80',
                msg1:'贵阳-揭阳',
                price1:'65'
            },
            {
                title:'首都航空',
                 msg:'桂林-杭州',
                price:'130',
                msg1:'南昌-青岛',
                price1:'140'
            }
        ]
    }
        }
    }
    
}
</script>

<style scoped>
    .swiper{
        padding: 10px 0;
    }
    h5{
        text-align: center;
        margin-bottom: 18px;
    }
    @media screen and (max-width:500px){
        h5{
            margin-bottom: 5px;
        }
    }
    .el-carousel-item{
        padding-top: 10px;
    }
    .el-col{
        padding-top:20px;
    }
    span{
        color: red;
    }
    .h5{
        color: #589ef8;
    }
</style>

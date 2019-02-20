<template>
    <div class="swiper">
       <el-row :gutter="20">
           <el-col
            :md="8"
            :lg="8"
            :xs="24"
            v-for="(item,index) in list"
            :key="index"
           >
            <p>{{item.start1}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="red">¥</span> {{item.price1}} <span class="gray">起</span></p>
            <p>{{item.start2}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="red">¥</span> {{item.price2}} <span class="gray">起</span></p>
            <p>{{item.start3}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="red">¥</span> {{item.price3}} <span class="gray">起</span></p>
           </el-col>
          
       </el-row>
    </div>
</template>

<script>
export default {
    name:'Swiper',
    data () {
        return{
            list:[
                {
                    start1:"北京 --- 沈阳",
                    price1:206,
                    start2:"北京 --- 青岛",
                    price2:249,
                    start3:"北京 --- 长春",
                    price3:306
                },
                {
                    start1:"上海 --- 北京",
                    price1:309,
                    start2:"上海 --- 武汉",
                    price2:249,
                    start3:"上海 --- 杭州",
                    price3:146
                },
                {
                    start1:"杭州 --- 宁波",
                    price1:149,
                    start2:"杭州 --- 南昌",
                    price2:190,
                    start3:"杭州 --- 温岭",
                    price3:100
                }
            ]
        }
    }
}
</script>

<style scoped>
    .swiper{
        padding:10px 0px;
    }
    .el-col{
        border-right:1px dashed #ccc;
        text-align: center;
    }
    .el-col:nth-of-type(3){
        border-right:0px dashed #ccc;        
    }
    span{
        font-size: 12px;
    }
    .red{
        color: red;
    }
    .gray{
        color:#ccc;
    }
    p{
        margin-bottom: 5px;
    }
</style>


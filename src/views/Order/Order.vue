<template>
    <div class="order">
        <tab></tab>
        <el-row
            :gutter="20"
        >
            <el-col
                :md="16"
                :lg="16"
                :xs="24"
            >
                <passenger :type="type"></passenger>
            </el-col>
             <el-col
                :md="8"
                :lg="8"
                :xs="24"
            >
                <airmsg :msg="msg" :day1="day1" :type="type"></airmsg>
            </el-col>
        </el-row>
        <el-row>
            <el-col
                :md="16"
                :lg="16"
                :xs="24"
            >
                <linkman></linkman>
            </el-col>
        </el-row>
        <el-row class="top">
            <el-col
                :md="16"
                :lg="16"
                :xs="24"
                class="center"
            >
                <el-button type="warning">提交订单并支付</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import tab from './components/Tab'
import passenger from './components/Passenger'
import linkman from './components/Linkman'
import airmsg from './components/Airmsg'
export default {
    name:'Order',
    data () {
        return {
            type: '', 
            msg:{},
            day1:''
        }
    },
    components:{
        tab,
        passenger,
        linkman,
        airmsg
    },
    created(){
        this.type = this.$route.query.type;
        this.msg = this.$route.query.msg;
        this.day1 = this.$route.query.day1
    }
}
</script>

<style scoped>
    .order{
        padding:10px 123px;
    }
    @media screen and (max-width:500px) {
        .order{
            padding:10px 0;
        }
   }
   .top{
       margin-top:10px;
   }
   .center{
       text-align: center;
   }
</style>

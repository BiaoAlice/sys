<template>
    <div class="airmsg">
        <div class="msg" v-if="this.type == 'air'">
            <p>{{day1}} \ {{this.msg.fromCityName}}------{{this.msg.toCityName}} \ 经济舱</p>
            <p>{{this.msg.airLines}}</p>
            <h3>{{this.msg.planTime}} ------ {{this.msg.planArriveTime}} </h3>
            <p class="left">票务说明</p>
        </div>
        <div class="msg" v-else>
            <p>{{day1}} \ {{this.msg.startStationName}}------{{this.msg.endStationName}} \ 硬座</p>
            <p>{{this.msg.stationTrainCode}}</p>
            <h3>{{this.msg.startTime}} ------ {{this.msg.arriveTime}} </h3>
            <p class="left">票务说明</p>
        </div>
        <div class="content" v-if="this.type == 'air'">
            {{content}}
        </div>
        <el-card class="box-card" shadow="never">
            <div slot="header" class="clearfix">
                <span>订单总额</span>
                <h3 class="right">¥ {{sPrice}}</h3>
            </div>
            <div v-for="(item,index) in listPrice" :key="index" class="text item">
                <p>{{item.name}} <span class="sRight">{{item.price}}/人</span></p>
            </div>
        </el-card>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'Airmsg',
    props:['msg','day1','type'],
    data () {
        return {
            list:[
                {
                    name:'成人票',
                    price:this.msg.price 
                },
                {
                    name:'燃油费',
                    price:50
                },
                {
                    name:'保险费',
                    price:0
                }
            ],
            content:"尊敬的旅客：从2017年8月1日开始，东航、上航实施统一运行，所有东方航空系列航班（二字代码为MU或FM的航班），将由东方航空（包括其控股子公司上海航空）的飞机、机组执行，东航及控股子公司将为旅客提供统一标准的全流程服务。"
        }
    },
    computed:{
        ...mapState(['price']),
        sPrice(){
            let price = 0;
            this.list.forEach(item=>{
                price += parseFloat(item.price);
            })
            return price;
        },
        listPrice(){
            if(this.type != 'air'){
                let priceyz = this.msg.priceyz;
                priceyz = priceyz.substring(1);
                this.list[0].price = priceyz;
                this.list[1].price = 3;
            }
            this.list[2].price = this.price;
            let arr = this.list.filter(item=>{
                return item.price != 0;
            })
            return arr;
        }
    },
    created(){
        if(this.type == 'air'){
            this.$store.commit("changeOrderMsg", orderMsg(this.sPrice,this.msg.fromCityName,this.msg.toCityName,this.msg.planTime,this.msg.planArriveTime,this.day1,this.msg.airLines))
        }else{
            this.$store.commit("changeOrderMsg", orderMsg(this.sPrice,this.msg.startStationName,this.msg.endStationName,this.msg.startTime,this.msg.arriveTime,this.day1,this.msg.stationTrainCode))
        }
    },
    updated(){
        if(this.type == 'air'){
            this.$store.commit("changeOrderMsg", orderMsg(this.sPrice,this.msg.fromCityName,this.msg.toCityName,this.msg.planTime,this.msg.planArriveTime,this.day1,this.msg.airLines))
        }else{
            this.$store.commit("changeOrderMsg", orderMsg(this.sPrice,this.msg.startStationName,this.msg.endStationName,this.msg.startTime,this.msg.arriveTime,this.day1,this.msg.stationTrainCode))
        }
    }
}

function orderMsg(price,start,end,startTime,endTime,time,code){
    let orderMsg={
                price,
                start,
                end,
                startTime,
                endTime,
                time,
                code,
            }
    return orderMsg;
    }

</script>

<style scoped>
    .msg{
        background-color: #2ca1e7;
        color: white;
        text-align: center;
        padding: 10px 5px;
    }
    .left{
        text-align: left;
    }
    .content{
        border:1px solid #ccc;
        padding: 10px 5px;
        font-size: 14px;
        color: #888;
    }
    .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card{
      background-color: #fffef3;
  }
  .right{
      float: right;
      color: red;
  }
  .sRight{
      float: right;
  }
</style>


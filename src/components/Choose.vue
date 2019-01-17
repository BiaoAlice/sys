<template>
    <div class="choose">
        <div class="container">
            <h2>机票</h2>
            <p>
                <label for="city">出发城市</label>
                <city-selector field="city" placeholder="请选择城市" 
                :no-hot="true" :city-list="cityListArr" v-model="cityId">
                </city-selector>
            </p>
            <div class="taggle"><a href="javascript:;" @click="taggle">换</a></div>
            <p>
                <label for="city">到达城市</label>
                <city-selector field="city" placeholder="请选择城市" 
                :no-hot="true" :city-list="cityListArr" v-model="cityId1">
                </city-selector>
            </p>
            <p>
                <el-date-picker
                    v-model="day"
                    type="date"
                    :picker-options="pickerOptions1"
                    placeholder="选择日期">
                </el-date-picker>
            </p>
            <p>
                <el-button type="warning" size="medium">搜索</el-button>
            </p>
        </div>
  </div>
</template>

<script>
import {citySelector} from "vue2-city-selector";
import cityList from 'china-city-data';

export default {
    name:'choose',
    data () {
        return{
            cityId: '',
            cityId1: '',
            cityListArr: cityList,
            activeName:'air',
            day:'',
            pickerOptions1: {
                disabledDate(time) {
                    return time.getTime() < Date.now();
                },
            }
        }   
    },
    components:{
        citySelector
    },
    methods:{
        taggle(){
            let value = this.cityId;
            this.cityId = this.cityId1;
            this.cityId1 = value;
        }
    }

}
</script>

<style scoped>
    .choose{
        padding:10px 0;
    }
   p{
       display: flex;
       align-items: center;
       margin-bottom: 10px;
       justify-content: center;
   }
   h2{
       color:#589ef8;
       text-align: center;
   }
   .container{
       position: relative;
       border-radius: 5px;
       border:3px solid #589ef8;
   }
   .taggle{
       position: absolute;
       width:8px;
       height: 30px;
       top:55px;
       right: 50px;
       border:1px solid #ccc;
       border-left: 0px;
       display: flex;
       flex-direction: row-reverse;
   }
   .taggle a{
       display: block;
       width: 15px;
       height: 16px;
       line-height: 15px;
       position: absolute;
       right:-10px;
       top:8px;
       background-color: #ccc;
       color: white;
       font-size: 12px;
       text-decoration: none;
       text-align: center;
   }
    .el-button{
        width:100px;
        color: white;
    }
</style>

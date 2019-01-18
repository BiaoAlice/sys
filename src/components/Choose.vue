<template>
    <div class="choose">
        <div class="container">
            <h2>{{this.title}}</h2>
            <p>
                <label for="city">出发城市</label>
                <city-selector field="city" placeholder="请选择城市" 
                :no-hot="true" :city-list="cityListArr" v-model="start">
                </city-selector>
            </p>
            <div class="taggle"><a href="javascript:;" @click="taggle">换</a></div>
            <p>
                <label for="city">到达城市</label>
                <city-selector field="city" placeholder="请选择城市" 
                :no-hot="true" :city-list="cityListArr" v-model="end">
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
                <el-button type="warning" size="medium" @click="submit">搜索</el-button>
            </p>
        </div>
  </div>
</template>

<script>
import {citySelector} from "vue2-city-selector";
import cityList from 'china-city-data';

export default {
    name:'choose',
    props:['title'],
    data () {
        return{
            start: '',
            end: '',
            startName:'',
            endName:'',
            cityListArr: cityList,
            cityListKey:['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','W','X','Y','Z'],
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
        },
        submit(){
            // console.log(this.cityListArr[0].find(x => {return x.id == this.start}));
            if(this.start=='' || this.end == '' || this.time == ''){
                this.$message({
                        duration: 2000,
                        showClose: true,
                        message:'请选择出发城市/到达城市/出发时间',
                        type:'error'
                    })
            }else{
                this.cityListKey.forEach(item=>{
                    let name = this.cityListArr[item].find(x => {return x.id == this.start});
                    if(name){
                        this.startName = name.name;
                        return false;
                    }
                })
                this.cityListKey.forEach(item=>{
                    let name = this.cityListArr[item].find(x => {return x.id == this.end});
                    if(name){
                        this.endName = name.name;
                        return false;
                    }
                })
                this.http.get(`/ticket/flight/line/query?key=275a8c8708ce0&start=${this.startName}&end=${this.endName}`)
                    .then(res=>{
                        console.log(res);
                    })
            }
        }
    },
    created(){
        // 275a8c8708ce0
        // http://apicloud.mob.com/flight/line/query?key=appkey&start=上海&end=海口
        
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

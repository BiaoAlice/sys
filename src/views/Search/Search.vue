<template>
    <div class="search">
        <el-row class="line">
            <el-col
                :md="8"
                :lg="8"
                :xs="24"
                class="bottom"
            >
            <h3>{{this.start}} ---- {{this.end}}&nbsp;&nbsp;&nbsp;<span>单程</span>&nbsp;<span>{{this.type == 'air' ? '飞机票' : '火车票'}}</span></h3>
            </el-col>
             <el-col
                :md="8"
                :lg="8"
                :xs="24"
                class="bottom"
            >
               <el-date-picker
                    v-model="day"
                    type="date"
                    :picker-options="pickerOptions1"
                    placeholder="选择日期">
                </el-date-picker>
            </el-col>
            <el-col
                :md="8"
                :lg="8"
                :xs="24"
                class="bottom"
            >
                <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
            </el-col>
        </el-row>
        <list :trainList = "trainList" :day1 = "day1" v-if="this.type == 'train'"></list>
        <air :airList = "airList"  :day1 = "day1" v-if="this.type == 'air'"></air>
    </div>
</template>

<script>
import list from './components/list'
import air from './components/air'
export default {
    name:'Search',
    data () {
        return {
            type:'',
            start:'',
            end:'',
            day:'',
            day1:'',
            trainList:[],
            airList:[],
            pickerOptions1: {
                disabledDate(time) {
                    return time.getTime() < Date.now();
                },
            }
            
        }
    },
    updated(){
        if(isNaN(this.day)&&!isNaN(Date.parse(this.day))){
            this.day1 = this.day;
            }else{
                  Date.prototype.Format = function (fmt) { 
                    var o = {
                        "M+": this.getMonth() + 1, //月份 
                        "d+": this.getDate(), //日 
                        "h+": this.getHours(), //小时 
                        "m+": this.getMinutes(), //分 
                        "s+": this.getSeconds(), //秒 
                        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
                        "S": this.getMilliseconds() //毫秒 
                    };
                    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
                    for (var k in o)
                    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                    return fmt;
                }
                  this.day1 = this.day.Format("yyyy-MM-dd");
            }
    },
    created(){
        this.type = this.$route.query.type;
        this.start = this.$route.query.start;
        this.end = this.$route.query.end;
        this.day = this.$route.query.time;
        if(this.type == 'air'){
            this.http.get(`/ticket/flight/line/query?key=275a8c8708ce0&start=${this.start}&end=${this.end}`)
                        .then(res=>{
                            if(res.data.result<6){
                                this.airList = res.data.result;
                            }else{
                                this.airList = res.data.result.splice(0,6);
                            }
                        })
        }else{
             this.http.get(`/ticket/train/tickets/queryByStationToStation?key=275a8c8708ce0&start=${this.start}&end=${this.end}`)
                        .then(res=>{
                            if(res.data.result<8){
                                this.trainList = res.data.result;
                            }else{
                                this.trainList = res.data.result.splice(0,8);
                            }
                        })
        }
    },
    methods:{
        search(){
            if(this.day == null){
                this.$message({
                        duration: 2000,
                        showClose: true,
                        message:'请选择出发时间',
                        type:'error'
                    });
                return;
            }
            if(this.type == 'air'){
                let num = Math.round(Math.random()*5+1);
            this.http.get(`/ticket/flight/line/query?key=275a8c8708ce0&start=${this.start}&end=${this.end}`)
                        .then(res=>{
                              if(res.data.result.length<num){
                                    this.airList = res.data.result;
                            }else{
                                this.airList = res.data.result.splice(0,num);
                            }
                            this.$message({
                                duration: 2000,
                                showClose: true,
                                message:'更新完成',
                                type:'success'
                            });
                        })
            }else{
                let num = Math.round(Math.random()*7+1);
                this.http.get(`/ticket/train/tickets/queryByStationToStation?key=275a8c8708ce0&start=${this.start}&end=${this.end}`)
                            .then(res=>{
                                if(res.data.result.length<num){
                                    this.trainList = res.data.result;
                            }else{
                                this.trainList = res.data.result.splice(0,num);
                            }
                            this.$message({
                                duration: 2000,
                                showClose: true,
                                message:'更新完成',
                                type:'success'
                            });
                        })
        }
        }
    },
    components:{
        list,
        air
    }
}
</script>

<style scoped>
 .search{
        padding:10px 123px;
    }
    @media screen and (max-width:500px) {
        .search{
            padding:10px 0;
        }
   }
   .line{
       border-bottom: 1px solid #589ef8;
   }
   h3{
       color: #589ef8;
       margin-top:7px;
   }
   span{
       font-size: 14px;
       color: black;
   }
   .bottom{
       margin-bottom:10px;
       text-align: center;
   }
</style>

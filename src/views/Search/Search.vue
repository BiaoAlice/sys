<template>
    <div class="search">
        <el-row class="line">
            <el-col
                :md="8"
                :lg="8"
                :xs="24"
                class="bottom"
            >
            <h3>{{this.start}} ---- {{this.end}}&nbsp;&nbsp;&nbsp;<span>单程</span></h3>
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
        <list :trainList = "trainList"></list>
    </div>
</template>

<script>
import list from './components/list'
export default {
    name:'Search',
    data () {
        return {
            type:'',
            start:'',
            end:'',
            day:'',
            trainList:[],
            pickerOptions1: {
                disabledDate(time) {
                    return time.getTime() < Date.now();
                },
            }
            
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
                            console.log(res);
                        })
        }else{
             this.http.get(`/ticket/train/tickets/queryByStationToStation?key=275a8c8708ce0&start=${this.start}&end=${this.end}`)
                        .then(res=>{
                            if(res.data.result<8){
                                this.trainList = res.data.result;
                            }else{
                                this.trainList = res.data.result.splice(0,8);
                            }
                            console.log(this.trainList);
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
            // console.log('搜索成功');
            if(this.type == 'air'){
            this.http.get(`/ticket/flight/line/query?key=275a8c8708ce0&start=${this.start}&end=${this.end}`)
                        .then(res=>{
                            console.log(res);
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
                            // console.log(this.trainList);
                        })
        }
        }
    },
    components:{
        list
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

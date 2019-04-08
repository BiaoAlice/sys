<template>
    <div class="mine">
        <div class="msg">
            <div class="toux"></div>
            <h2 class="h2">{{form.name}}</h2>
            <p class="p">余额：{{balance}}元</p>
        </div>
        <el-tabs type="border-card">
            <el-tab-pane label="订单中心">
                <div class="order">
                    <div class="absolute" v-if="show">
                        <i class="img"></i>
                        <span>暂时没有相关订单</span>
                    </div>
                    <div v-if="!show">
                       <el-table
                            :data="orderList"
                            stripe
                            style="width: 100%">
                            <el-table-column
                            prop="orderId"
                            label="订单号"
                            >
                            </el-table-column>
                            <el-table-column
                            prop="type"
                            label="类型"
                            >
                            </el-table-column>
                            <el-table-column
                                label="详情"
                            >
                                <template slot-scope="scope">
                                    <el-button @click="detail(scope.row)" type="text" size="small">查看</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="修改信息" class="changeMsg">
                <el-form ref="form" :model="form" label-width="80px" class="form">
                    <el-form-item label="姓名" >
                        <el-input v-model="form.name" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="学号" >
                        <el-input v-model="form.id" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="登录密码">
                        <el-input v-model="form.logPsd" placeholder="输入新密码（默认为旧密码）" type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="支付密码">
                        <el-input v-model="form.payPsd" placeholder="输入新密码（默认为旧密码）" type="password"></el-input>
                    </el-form-item>
                    <el-form-item class="center">
                        <el-button type="warning" @click="change">确认修改</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="充值中心" class="changeMsg">
                <el-form ref="form" :model="price" label-width="80px" class="form">
                    <el-form-item label="姓名" >
                        <el-input v-model="price.name" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="金额">
                        <el-radio-group v-model="radio2">
                            <el-radio :label="100">100元</el-radio>
                            <el-radio :label="300">300元</el-radio>
                            <el-radio :label="500">500元</el-radio>
                            <el-radio :label="1000">1000元</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="支付密码">
                        <el-input v-model="price.payPsd" placeholder="输入支付密码" type="password"></el-input>
                    </el-form-item>
                    <el-form-item class="center">
                        <el-button type="warning" @click="submit">确认支付</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    name:"Mine",
    data(){
        return{
            form:{
                name:'',
                id:'',
                logPsd:'',
                payPsd:''
            },
            price:{
                name:'',
                payPsd:''
            },
            radio2: null,
            payPsd:'',
            logPsd:'',
            balance:null,
            show:true,
            orderList:[]
        }
    },
    methods:{
        submit(){
            let payPassword = window.localStorage.getItem("payPsd");
            if(this.radio2!=null && payPassword == this.price.payPsd){
                this.http.get('/api/user/updata',{
                    params:{
                        token:localStorage.getItem("token"),
                        price:this.radio2
                    }
                    })
                    .then(res=>{
                        this.$message({
                                duration: 2000,
                                showClose: true,
                                message:'充值成功',
                                type:'success'
                            });
                        this.form.name = res.data.msg.studentName;
                        this.form.id = res.data.msg.studentId;
                        this.price.name = res.data.msg.studentName;
                        this.payPsd = res.data.msg.studentPayPsd;
                        this.balance = res.data.msg.balance;
                        this.$store.commit('changebalance',res.data.msg.balance);
                        this.radio2 = null;
                        this.price.payPsd="";
                    })
                    .catch(err=>{
                        console.log(err);
                    })
            }else{
               this.$message({
                                duration: 2000,
                                showClose: true,
                                message:'请填写正确的密码',
                                type:'error'
                            });
            }
        },
        change(){
            if(this.logPsd == '' && this.payPsd == ''){
                this.$message({
                    duration: 2000,
                    showClose: true,
                    message:'请填写登录密码/支付密码',
                    type:'error'
                });
            }else{
                this.http.post('/api/user/updatepsd',{
                        token:localStorage.getItem("token"),
                        studentPsd: this.form.logPsd,
                        payPsd: this.form.payPsd
                }).then(res=>{
                    if(res.code == 0){
                        this.$router.path('/');
                    }else{
                        this.$message({
                            duration: 2000,
                            showClose: true,
                            message:'修改成功',
                            type:'success'
                        });
                        this.$store.commit("changeStudentPayPsd",this.form.payPsd);
                        localStorage.setItem("payPsd",this.form.payPsd);
                        this.form.logPsd="";
                        this.form.payPsd= "";
                    }
                })
            }
        },
        detail(row){
            let {code,start,end,time,startTime,endTime,price} = row.msg;
            this.$alert(`<div>
                            <ul style="list-style:none">
                                <li>车次：${code}</li>
                                <li>出发城市：${start}</li>
                                <li>到达城市：${end}</li>
                                <li>日期：${time}</li>
                                <li>出发日期：${startTime}</li>
                                <li>到达日期：${endTime}</li>
                                <li>票价：${price}</li>
                            </ul>
                        </div>`, '详细信息', {
          dangerouslyUseHTMLString: true,
           callback: action => {
           }
        })
        }
    },
    created(){
         this.http.get('/api/user/getmsg',{
            params:{
                token: localStorage.getItem('token')
            }
        })
        .then(res=>{
            if(res.code == 0){
                this.$router.path('/');
            }else{
                this.form.name = res.data.msg.studentName;
                this.form.id = res.data.msg.studentId;
                this.price.name = res.data.msg.studentName;
                this.payPsd = res.data.msg.studentPayPsd;
                this.balance = res.data.msg.balance;
                this.logPsd = res.data.msg.studentPsd;
                this.$store.commit('changebalance',res.data.msg.balance);

            }
        })
        // 订单请求
         this.http.get('/api/order/get',{
            params:{
                token: localStorage.getItem('token')
            }
        }).then(res=>{
                if(res.data.data != ''){
                    this.show=false;
                   this.orderList = res.data.data;
                   this.orderList.forEach(item=>{
                       if(item.type == 'air'){
                          return item.type = '飞机票'
                       }else{
                           return item.type ="火车票"
                       }
                   })
                }
            })
    }
}
</script>

<style scoped>
 .mine{
        padding:10px 123px;
    }
    @media screen and (max-width:500px) {
        .mine{
            padding:10px 0;
        }
   }
   .msg{
       width:100%;
       height:104px;
       background-image: url('../../assets/mine/mine1.png');
       position: relative;
   }
   .toux{
       width:80px;
       height:80px;
       border-radius: 50%;
       background-color: red;
       background-image: url('../../assets/mine/mine2.jpg');
       background-size: contain;
       position: absolute;
       top:12px;
       left:40px;
   }
   .h2{
       position: absolute;
       top:32px;
       left:150px;
       color: white;
   }
   .p{
       position: absolute;
       top:40px;
       left:300px;
       color: white;
   }
   .red{
       width: 100%;
       height:200px;
       background-color: red;
   }
   .order{
       width:100%;
       min-height: 190px;
       position: relative;
   }
   .img{
       display: block;
       width: 112px;
       height: 108px;
       background:url('../../assets/mine/mine3.png') 0 -110px no-repeat;;
   }
   .absolute{
       position: absolute;
        top:50%;
       left:50%;
       margin-left:-56px;
       margin-top: -54px;
   }
   .changeMsg{
       display: flex;
       justify-content: center;
   }
   .form{
       width:300px;
   }
   .center{
        margin-left:0 !important;
        text-align: center;
    }
    .el-radio{
        width:70px;
    }
</style>
